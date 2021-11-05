#!/usr/bin/env bash

set -ex

rm -rf public || true

find . |entr -c -s "hugo  -D serve  --disableFastRender"
