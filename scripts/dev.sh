#!/usr/bin/env bash

set -ex

find . |entr -c -s "hugo serve -D --disableFastRender"
