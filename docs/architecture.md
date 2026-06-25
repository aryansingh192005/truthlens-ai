# TruthLens AI Architecture

## Overview
TruthLens AI is a full-stack AI-powered media authenticity platform for detecting manipulated images and videos.

## Core Components
- React frontend for upload, dashboard, and reports
- FastAPI backend for APIs, inference handling, and report generation
- MongoDB for users, reports, and media metadata
- AI inference pipeline for image/video deepfake detection
- Explainability layer for suspicious regions and frame analysis

## Planned Pipeline
1. User uploads image or video
2. Backend validates and stores media
3. Preprocessing pipeline extracts required features/frames
4. Deepfake model performs inference
5. Authenticity report is generated and stored
6. Frontend displays verdict, confidence, and analysis results