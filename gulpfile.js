const { src, dest } = require("gulp");
const fileinclude = require("gulp-file-include");
// const htmlmin = require("gulp-htmlmin");

// const path = require("../config/path");
// const app = require("../config/app");

const html = () => {
  return (
    src("./src/html/*.html")
      .pipe(fileinclude())
      //     .pipe(htmlmin(app.htmlmin))
      .pipe(dest("./public"))
  );
};

exports.html = html;

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
