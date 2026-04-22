-- Personas Extraction Database Schema
-- Purpose: Track sources, chunks, and extracted ideas for a single expert
-- Simpler than talent_density (no alignment classification, no cross-source deduplication)

----------------------------------------------------------------------
-- SOURCES: Content files for this expert
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_path TEXT NOT NULL UNIQUE,      -- relative path from persona root
  title TEXT NOT NULL,
  source_type TEXT NOT NULL,           -- book, article, podcast, youtube, interview
  url TEXT,                            -- original URL if applicable
  word_count INTEGER,
  date_published TEXT,                 -- when original was published
  date_added TEXT DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  CHECK (source_type IN ('book', 'article', 'podcast', 'youtube', 'interview', 'tweet', 'other'))
);

----------------------------------------------------------------------
-- INBOX_ITEMS: Track content to acquire
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS inbox_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  url TEXT,                              -- URL to acquire (optional if file_path provided)
  file_path TEXT,                        -- Local file path if dropped as file
  title TEXT,                            -- Optional hint for title
  source_type TEXT,                      -- youtube, article, podcast, book, etc.
  status TEXT NOT NULL DEFAULT 'pending', -- pending, acquired, skipped
  source_id INTEGER REFERENCES sources(id), -- Set when acquired, links to sources table
  notes TEXT,
  added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  processed_at DATETIME,
  UNIQUE(url),
  CHECK (status IN ('pending', 'acquired', 'skipped')),
  CHECK (url IS NOT NULL OR file_path IS NOT NULL)
);

----------------------------------------------------------------------
-- CHUNKS: Pieces of sources (chapters, sections, etc.)
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS chunks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id INTEGER NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  title TEXT,
  file_path TEXT,                      -- path if stored separately
  sequence INTEGER,                    -- order within source
  start_line INTEGER,
  end_line INTEGER,
  word_count INTEGER,
  chunk_level TEXT NOT NULL DEFAULT 'source',  -- source, chapter, section
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  CHECK (chunk_level IN ('source', 'part', 'chapter', 'section'))
);

----------------------------------------------------------------------
-- EXTRACTION_STATUS: Track processing pipeline per chunk
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS extraction_status (
  chunk_id INTEGER PRIMARY KEY REFERENCES chunks(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, extracted, skipped
  extracted_at DATETIME,
  notes TEXT,
  CHECK (status IN ('pending', 'extracted', 'skipped'))
);

----------------------------------------------------------------------
-- IDEAS: Extracted knowledge units
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ideas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  -- Classification
  idea_type TEXT NOT NULL,             -- framework, principle, technique, anti_pattern, story, quote, value, assumption, tradeoff
  category TEXT,                       -- optional grouping (wealth, happiness, negotiation, etc.)

  -- Content
  title TEXT,                          -- optional short name
  content TEXT NOT NULL,               -- the actual idea

  -- Conditional logic
  use_when TEXT,                       -- JSON array or newline-separated conditions
  fails_when TEXT,                     -- JSON array or newline-separated failure modes
  conditions TEXT,                     -- JSON object with scope, scale, prerequisites

  -- Classification
  evidence_type TEXT,                  -- data, case_study, expert_opinion, assertion
  actionability TEXT,                  -- immediate, tactical, strategic, theoretical

  -- Review workflow
  needs_review BOOLEAN DEFAULT FALSE,
  review_decision TEXT,                -- include, exclude, needs_edit
  review_notes TEXT,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  CHECK (idea_type IN ('framework', 'principle', 'technique', 'anti_pattern', 'story', 'quote', 'value', 'assumption', 'tradeoff', 'hero', 'villain')),
  CHECK (evidence_type IS NULL OR evidence_type IN ('data', 'case_study', 'expert_opinion', 'assertion')),
  CHECK (actionability IS NULL OR actionability IN ('immediate', 'tactical', 'strategic', 'theoretical')),
  CHECK (review_decision IS NULL OR review_decision IN ('include', 'exclude', 'needs_edit'))
);

----------------------------------------------------------------------
-- IDEA_SOURCES: Provenance linking (idea -> source chunk)
----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idea_sources (
  idea_id INTEGER NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,
  chunk_id INTEGER NOT NULL REFERENCES chunks(id) ON DELETE CASCADE,
  quote TEXT,                          -- relevant quote from source
  location TEXT,                       -- page number, timestamp, etc.
  PRIMARY KEY (idea_id, chunk_id)
);

----------------------------------------------------------------------
-- INDEXES
----------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_sources_type ON sources(source_type);
CREATE INDEX IF NOT EXISTS idx_inbox_status ON inbox_items(status);
CREATE INDEX IF NOT EXISTS idx_inbox_source ON inbox_items(source_id);
CREATE INDEX IF NOT EXISTS idx_chunks_source ON chunks(source_id);
CREATE INDEX IF NOT EXISTS idx_extraction_status ON extraction_status(status);
CREATE INDEX IF NOT EXISTS idx_ideas_type ON ideas(idea_type);
CREATE INDEX IF NOT EXISTS idx_ideas_category ON ideas(category);
CREATE INDEX IF NOT EXISTS idx_ideas_needs_review ON ideas(needs_review);

----------------------------------------------------------------------
-- VIEWS
----------------------------------------------------------------------

-- Pipeline status summary
CREATE VIEW IF NOT EXISTS v_pipeline_status AS
SELECT
  es.status,
  COUNT(*) as count
FROM extraction_status es
GROUP BY es.status;

-- Ideas needing review
CREATE VIEW IF NOT EXISTS v_needs_review AS
SELECT
  i.id,
  i.idea_type,
  i.title,
  i.content,
  i.category,
  GROUP_CONCAT(s.title, ', ') as sources
FROM ideas i
LEFT JOIN idea_sources isrc ON i.id = isrc.idea_id
LEFT JOIN chunks c ON isrc.chunk_id = c.id
LEFT JOIN sources s ON c.source_id = s.id
WHERE i.needs_review = TRUE
GROUP BY i.id
ORDER BY i.idea_type, i.created_at;

-- Full idea view with provenance
CREATE VIEW IF NOT EXISTS v_ideas_with_sources AS
SELECT
  i.*,
  GROUP_CONCAT(s.title, ' | ') as source_titles,
  GROUP_CONCAT(isrc.quote, ' | ') as quotes
FROM ideas i
LEFT JOIN idea_sources isrc ON i.id = isrc.idea_id
LEFT JOIN chunks c ON isrc.chunk_id = c.id
LEFT JOIN sources s ON c.source_id = s.id
GROUP BY i.id;
