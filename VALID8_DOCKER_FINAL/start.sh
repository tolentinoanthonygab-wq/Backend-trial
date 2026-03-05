#!/usr/bin/env bash
# start.sh – convenience script to launch the Valid8 application locally using Docker Compose
# -------------------------------------------------
# Usage:
#   ./start.sh          # builds and starts all services (backend, frontend, postgres)
#   ./start.sh down     # stops and removes containers
#   ./start.sh logs     # tails logs of all services
# -------------------------------------------------
set -e

COMMAND=${1:-up}

case "$COMMAND" in
  up)
    echo "Building and starting services..."
    docker compose up --build
    ;;
  down)
    echo "Stopping and removing containers..."
    docker compose down
    ;;
  logs)
    echo "Tailing logs..."
    docker compose logs -f
    ;;
  *)
    echo "Unknown command: $COMMAND"
    echo "Supported commands: up (default), down, logs"
    exit 1
    ;;
esac
