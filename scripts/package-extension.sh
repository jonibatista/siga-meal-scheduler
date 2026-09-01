#!/usr/bin/env bash

set -euo pipefail

target="${1:-all}"
project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
stage_dir="$project_root/dist/stage"

case "$target" in
  all)
    "$0" chromium
    "$0" firefox
    exit 0
    ;;
  chromium|firefox)
    archive="$project_root/dist/siga-meal-scheduler-$target.zip"
    ;;
  *)
    echo "Usage: $0 [chromium|firefox]" >&2
    exit 1
    ;;
esac

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
