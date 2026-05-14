#!/usr/bin/env bash
set -euo pipefail

HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-8000}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WEB_DIR="$ROOT_DIR/web"

if [[ ! -d "$WEB_DIR" ]]; then
  echo "Cannot find web directory: $WEB_DIR" >&2
  exit 1
fi

cat <<MSG
Starting Urban Planning Studio Copilot web prototype...

Local URL:      http://127.0.0.1:${PORT}
Bind address:   ${HOST}:${PORT}
Serving folder: ${WEB_DIR}

Tips:
- Keep this terminal open while using the page.
- In a remote container/Codespaces/cloud IDE, open the forwarded port URL for port ${PORT}.
- To use another port: PORT=8080 ./scripts/start_web.sh

MSG

exec python3 -m http.server "$PORT" --bind "$HOST" --directory "$WEB_DIR"
