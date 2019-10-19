// npm install gulp gulp-pug gulp-less gulp-csso gulp-concat gulp-javascript-obfuscator gulp-rename gulp-sourcemaps gulp-order gulp-debug --save -D
const path = require("path");

const { src, dest, parallel, series } = require("gulp");
const pug = require("gulp-pug");
const less = require("gulp-less");
const minifyCSS = require("gulp-csso");
const concat = require("gulp-concat");

const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const javascriptObfuscator = require("gulp-javascript-obfuscator");
const sort = require("gulp-sort");
const order = require("gulp-order");
const debug = require("gulp-debug");

const imageResize = require("gulp-image-resize");

const PUBLIC_ROOT = "/home/logic/_workspace/louiscklaw.github.io";
const PUBLIC_CSS = path.join(PUBLIC_ROOT, "css");
const PUBLIC_JS = path.join(PUBLIC_ROOT, "js");
const PUBLIC_ASSETS = path.join(PUBLIC_ROOT, "assets");
const JS_TEMP = path.join(__dirname, "temp");

function html() {
  return src("client/templates/*.pug")
    .pipe(pug())
    .pipe(dest(PUBLIC_ROOT));
}

function css() {
  return src("client/templates/*.less")
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest(PUBLIC_CSS));
}

function js() {
  return src(["client/templates/*.js"], {
    sourcemaps: true
  })
    .pipe(order(["_*.js", "*.js"]))
    .pipe(debug())
    .pipe(concat("app.js"))
    .pipe(
      dest(JS_TEMP, {
        sourcemaps: true
      })
    );
}

function js_compress() {
  return src(JS_TEMP + "/*.js")
    .pipe(
      javascriptObfuscator({
        compact: true
      })
    )
    .pipe(rename("app.min.js"))
    .pipe(sourcemaps.write())
    .pipe(dest(PUBLIC_JS));
}

function down_sample_image(done) {
  src("client/templates/assets/**/*.jpg").pipe(
    dest(PUBLIC_ASSETS + "/down_sampled")
  );
  return done();
}
function handle_img_files(done) {
  src("client/templates/assets/share-button/*").pipe(
    dest(PUBLIC_ASSETS + "/share-button")
  );

  src("client/templates/assets/**/*").pipe(dest(PUBLIC_ASSETS));

  src("client/templates/assets/proj_thumbnails/*.jpg")
    .pipe(
      imageResize({
        width: 500,
        height: 400,
        crop: false,
        upscale: false
      })
    )
    .pipe(dest(PUBLIC_ASSETS + "/proj_thumbnails"));

  return done();
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(
  handle_img_files,
  down_sample_image,
  css,
  series(js, js_compress),
  html
);
