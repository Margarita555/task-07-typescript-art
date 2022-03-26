import gulp from "gulp";
import browserSync from "browser-sync";

import path from "./config/path.js";
import app from "./config/app.js";

import clear from "./task/clear.js";
import html from "./task/html.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import font from "./task/font.js";

const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

const build = gulp.series(clear, gulp.parallel(html, scss, js, img, font));

const dev = gulp.series(build, gulp.parallel(watcher, server));

export { html };
// export {clear};
export { scss };
export { js };
export { img };
export { font };
export default app.isProd ? build : dev;

// const { watch, series, parallel } = require("gulp");
// const browserSync = require("browser-sync").create();

// const path = require("./config/path.js");
// const app = require("./config/app");

// const clear = require("./task/clear.js");
// const html = require("./task/html.js");
// const css = require("./task/css.js");
// const scss = require("./task/scss.js");
// const js = require("./task/js.js");
// const img = require("./task/img.js");
// const font = require("./task/font.js");

// const watcher = () => {
//   watch(path.html.watch, html).on("all", browserSync.reload);
//   watch(path.scss.watch, scss).on("all", browserSync.reload);
//   watch(path.js.watch, js).on("all", browserSync.reload);
//   watch(path.img.watch, img).on("all", browserSync.reload);
//   watch(path.font.watch, font).on("all", browserSync.reload);
// };

// const server = () => {
//   browserSync.init({
//     server: {
//       baseDir: path.root,
//     },
//   });
// };

// const build = series(clear, parallel(html, scss, js, img, font));

// const dev = series(build, parallel(watcher, server));

// exports.html = html;
// exports.watch = watcher;
// exports.clear = clear;
// exports.scss = scss;
// exports.js = js;
// exports.img = img;
// exports.font = font;
// exports.default = app.isProd ? build : dev;
