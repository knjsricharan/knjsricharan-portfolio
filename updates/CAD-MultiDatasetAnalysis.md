# Cache-Augmented Generation (CAG) Multi-Dataset Research Analyzer

## Project Overview
A web application that allows users to upload CSV, JSON, or TXT datasets and ask multiple analytical questions using Cache-Augmented Generation (CAG). 

This project demonstrates the CAG architecture. It is designed to cache a dataset once and reuse it for follow-up queries to significantly reduce latency and API token costs. To bypass free-tier limitations on the Gemini API, the engine currently runs in a Simulated Caching Mode that precisely mimics the token tracking and behavior of provider-side caching.

## Features Implemented
- **Multi-format Upload**: Supports uploading and parsing CSV, JSON, and TXT datasets using robust pandas and json handlers.
- **CAG Simulation Engine**: Replicates the behavior of the google-genai SDK's Cached Content API. It tracks dataset token size and rewrites API usage metadata to accurately demonstrate token savings (Cache Hits) without incurring paid API costs.
- **Interactive Chat Interface**: A clean Streamlit chat UI that retains session history and displays typing indicators while the model generates responses.
- **Session and Analytics Tracking**: Real-time side-panel monitoring of:
  - Cache status (Active or Expired)
  - Token reuse (Prompt tokens, Cached tokens reused, Output tokens)
  - Estimated token savings
  - Session duration and cache creation time
- **Defensive Error Handling**: Gracefully catches API timeouts, corrupted datasets, and empty questions.

## Tech Stack
- **Python 3**
- **Streamlit**: Web interface and session state management.
- **Pandas**: Robust CSV processing.
- **Google GenAI SDK (google-genai)**: Model content generation (Gemini 2.5 Flash).

## Folder Structure
```text
.
├── app.py             # Main Streamlit application and UI
├── cag.py             # Cache-Augmented Generation engine (Simulated Mode)
├── loader.py          # Dataset parsing and loading utilities
├── utils.py           # Helper functions for duration formatting
├── requirements.txt   # Project dependencies
├── .env.example       # Example environment variables file
├── .gitignore         # Git ignore configuration
└── README.md          # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cag-muldataset
   ```

2. Create and activate a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   Copy `.env.example` to `.env` and add your Google Gemini API key:
   ```bash
   cp .env.example .env
   ```

## Running the application

Run the Streamlit app using the following command:
```bash
streamlit run app.py
```

## Known Limitations
- The application currently relies on a simulated cache to accommodate free-tier API limitations.
- Caching is limited to text representations of datasets. Massive CSVs may exceed model token limits (Gemini 2.5 Flash supports up to 1M tokens).
- Provider-side caches (when billing is enabled) are transient and expire after 1 hour of inactivity by default.

## Future Enhancements
- **PDF and Document Support**: Expand loaders to handle unstructured documents.
- **Multiple Datasets**: Allow concurrent caching of multiple files into a single unified context.
- **Cost Dashboard**: Integrate a precise cost calculator based on real-time API pricing.
- **True Provider Caching**: Toggle simulation mode off once a billing-enabled API key is provided.
