#!/usr/bin/env zsh

set -ex

rm -rf public

hugo  \
  --cleanDestinationDir \
  --enableGitInfo \
  --gc \
  --ignoreCache \
  --minify

pushd /tmp
  rm -rf portfolio-tmp-build || true
  mkdir -p portfolio-tmp-build
  pushd portfolio-tmp-build

    git clone git@github.com:louiscklaw/louiscklaw.github.io.git
    pushd louiscklaw.github.io
      git checkout master
      git branch -D gh-pages || true
      git checkout --orphan gh-pages
      git rm -rf . || true

      echo by hugo-src > README.md
      cp -r /home/logic/_workspace/hugo-playlist/themes/PaperMod-helloworld/public/* .

      git add .
      git commit -m"init commit,"
      git push --set-upstream origin gh-pages -f


    popd
  popd
popd
