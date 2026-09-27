#!/bin/bash
# Azure App Service startup script for AegisAI Python backend
cd /home/site/wwwroot
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app --bind 0.0.0.0:8000 --timeout 120 --access-logfile '-' --error-logfile '-'
