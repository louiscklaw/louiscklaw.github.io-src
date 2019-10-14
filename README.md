# louis portfolio

### purpose
hold the portfolio source code of [https://louiscklaw.github.io](https://louiscklaw.github.io)

the generated html pages holded in repoistory louiscklaw.github.io seperately


### to spin me up
```
git clone https://github.com/louiscklaw/louiscklaw.github.io-src
git clone https://github.com/louiscklaw/louiscklaw.github.io

# thread 1, for code change and static page regen
cd louiscklaw.github.io-src
npm install -d
npm run gulp_regen

# thread 2, if you want local server for preview
cd louiscklaw.github.io
npm install
nodemon server.js
```

### to deploy
```
npm run push_all
```
