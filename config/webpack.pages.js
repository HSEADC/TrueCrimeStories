// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

// function createPages(template, filename) {
//   return new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, "..", template),
//     filename: filename,
//   });
// }

const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

// const htmlPages = [
//   createPages("./src/index.html", "./index.html"),
//   createPages("./src/pages/about.html", "./pages/about.html"),
//   createPages("./src/pages/newspaper.html", "./pages/newspaper.html"),
//   createPages("./src/pages/tests.html", "./pages/tests.html"),
//   createPages("./src/pages/files.html", "./pages/files.html"),
//   createPages("./src/pages/podcasts.html", "./pages/podcasts.html"),
//   createPages("./src/pages/stylegaid.html", "./pages/stylegaid.html"),
// ];

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'allStyles']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['articles', 'allStyles']),
  createPages('./src/pages/tests.html', './pages/tests.html', ['allStyles']),
  createPages('./src/pages/files.html', './pages/files.html', ['allStyles']),
  createPages('./src/pages/podcasts.html', './pages/podcasts.html', ['allStyles']),
  createPages('./src/pages/about.html', './pages/about.html', ['allStyles']),
  createPages('./src/pages/articles/article1.html', './pages/articles/article1.html', ['allStyles']),
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', ['test1', 'allStyles']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['styleguide', 'allStyles']),
]

module.exports = htmlPages;