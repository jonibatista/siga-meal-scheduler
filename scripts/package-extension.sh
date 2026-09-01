#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
stage_dir="$project_root/dist/stage"
archive="$project_root/dist/siga-meal-scheduler.zip"

rm -rf "$stage_dir" "$archive"
mkdir -p "$stage_dir"

cp "$project_root/manifest.json" "$project_root/content.js" "$stage_dir/"
cp -R "$project_root/icons" "$stage_dir/icons"

(
  cd "$stage_dir"
  zip -qr "$archive" manifest.json content.js icons
)

rm -rf "$stage_dir"
echo "Created $archive"
