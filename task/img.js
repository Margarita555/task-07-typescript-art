// const { src, dest } = require("gulp");
// const imagemin = require("gulp-imagemin");
// const newer = require("gulp-newer");
// const gulpif = require("gulp-if");

// const path = require("../config/path");
// const app = require("../config/app");

// const img = () => {
//   return src(path.img.src)
//     .pipe(newer(path.img.dest))
//     .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
//     .pipe(dest(path.img.dest));
// };

// module.exports = img;
