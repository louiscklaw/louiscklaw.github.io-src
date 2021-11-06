#!/usr/bin/env bash

set -ex


pushd /home/logic/_workspace/louiscklaw.github.io-src
  find ./README.md |entr -c -s 'cp ./README.md /home/logic/_workspace/louiscklaw.github.io-src/content/projects/Portfolio/index.md' &
popd 

wait 
  