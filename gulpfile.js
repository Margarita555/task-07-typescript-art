const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const del = require("del");
// const size = require("gulp-size");
// const path = require("../config/path");

const html = () => {
  return src("./src/html/*.html")
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileinclude())
    .pipe(size({ title: "size before minification" }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: "size after minification" }))
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
};

const watcher = () => {
  watch("./src/html/**/*.html", html);
  // watch(path.scss.watch, scss).on("all", browserSync.reload);
  // watch(path.js.watch, js).on("all", browserSync.reload);
  // watch(path.img.watch, img).on("all", browserSync.reload);
  // watch(path.font.watch, font).on("all", browserSync.reload);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

const clear = () => {
  return del("./public");
};

exports.html = html;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series(clear, html, parallel(watcher, server));

// const { watch, series, parallel } = require("gulp");
// const browserSync = require("browser-sync").create();

// const path = require("./config/path");
// const app = require("./config/app");

// const clear = require("./task/clear.js");
// const html = require("./task/html.js");
// const scss = require("./task/scss.js");
// const js = require("./task/js.js");
// const img = require("./task/img.js");
// const font = require("./task/font.js");

// const server = () => {
//   browserSync.init({
//     server: {
//       baseDir: path.root,
//     },
//   });
// };

// const watcher = () => {
//   watch(path.html.watch, html).on("all", browserSync.reload);
//   watch(path.scss.watch, scss).on("all", browserSync.reload);
//   watch(path.js.watch, js).on("all", browserSync.reload);
//   watch(path.img.watch, img).on("all", browserSync.reload);
//   watch(path.font.watch, font).on("all", browserSync.reload);
// };

// const build = series(
//   clear,
//   parallel(html, scss, js, img, font)
// );

// const dev = series(build, parallel(watcher, server));

// exports.watch = watcher;
// exports.html = html;
// exports.clear = clear;
// exports.scss = scss;
// exports.js = js;
// exports.img = img;
// exports.font = font;
// exports.default = app.isProd? build : dev;
