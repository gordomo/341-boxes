#!/usr/bin/env bash
# Deploy de la landing 341-Boxes. Uso: bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

DC="docker compose -f docker-compose.prod.yml"

echo "→ Trayendo últimos cambios (git pull)..."
git pull origin main

echo "→ Build + recreación del contenedor (clave: --force-recreate)..."
# --force-recreate evita el bug de quedarse con la build vieja.
$DC up -d --build --force-recreate

echo "→ Estado:"
$DC ps

echo "→ Verificación (debe responder 200):"
curl -s -o /dev/null -w "  http://127.0.0.1:3001 -> %{http_code}\n" http://127.0.0.1:3001/pedir-turno || true

echo "✓ Landing desplegada. (En el navegador: hard refresh / incógnito si hace falta.)"
