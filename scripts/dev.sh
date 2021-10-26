#!/usr/bin/env bash

set -ex

rm -rf public || true

find . |entr -c -s "hugo serve -D --disableFastRender"
