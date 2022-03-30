import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import ts from "gulp-typescript";
// const tsProject = ts.createProject("tsconfig.json");

import path from "../config/path.js";
import app from "../config/app.js";

const js = () => {
  return (
    gulp
      .src(path.js.src, { sourcemaps: app.isDev })
      // .pipe(
      //   ts({
      //     noImplicitAny: true,
      //     outFile: path.js.dest,
      //   })
      // )
      // .pipe(tsProject())
      .pipe(
        ts({
          noImplicitAny: true,
          allowJs: true,
          outFile: path.js.dest,
        })
      )
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "JavaScript",
            message: error.message,
          })),
        })
      )
      .pipe(babel())
      .pipe(webpack(app.webpack))
      .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
  );
};

export default js;

// const { src, dest } = require("gulp");
// const plumber = require("gulp-plumber");
// const notify = require("gulp-notify");
// const babel = require("gulp-babel");
// const webpack = require("webpack-stream");

// const path = require("../config/path");
// const app = require("../config/app");

// const js = () => {
//   return src(path.js.src, { sourcemaps: app.isDev })
//     .pipe(
//       plumber({
//         errorHandler: notify.onError((error) => ({
//           title: "JavaScript",
//           message: error.message,
//         })),
//       })
//     )
//     .pipe(babel())
//     .pipe(webpack(app.webpack))
//     .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
// };

// module.exports = js;
