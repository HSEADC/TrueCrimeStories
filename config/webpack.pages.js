const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/about.html", "./about.html"),
  createPages("./src/newspaper.html", "./newspaper.html"),
  createPages("./src/tests.html", "./tests.html"),
  createPages("./src/files.html", "./files.html"),
  createPages("./src/podcasts.html", "./podcasts.html"),
  createPages("./src/stylegaid.html", "./stylegaid.html"),
];

module.exports = htmlPages;