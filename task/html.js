import gulp from "gulp";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";

import path from "../config/path.js";
import app from "../config/app.js";

const html = () => {
  return gulp
    .src(path.html.src)
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
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "size after minification" }))
    .pipe(gulp.dest(path.html.dest));
};

export default html;
