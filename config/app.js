// isProd = process.argv.includes("--production");
// isDev = !isProd;

module.exports = {
  // isProd: isProd,
  // isDev: isDev,

  htmlmin: {
    collapseWhitespace: true,
  },

  // webpack: {
  //   mode: isProd ? "production" : "development",
  // },

  //   imagemin: {
  //     verbose: true,
  //   },

  //   fonter: {
  //     formats: ["ttf", "woff", "eot", "svg"],
  //   },
};
