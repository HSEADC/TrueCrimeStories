const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'footer', 'menu', 'allStyles']),
  // createPages('./src/pages/files.html', './pages/files.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/about.html', './pages/about.html', ['menu', 'footer', 'allStyles', 'footer']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['menu', 'footer', 'styleguide', 'allStyles', 'footer']),
  
  createPages('./src/pages/podcast-types.html', './pages/podcast-types.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast1.html', './pages/podcast-types/podcast1.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast2.html', './pages/podcast-types/podcast2.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast3.html', './pages/podcast-types/podcast3.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/articles.html', './pages/articles.html', ['header', 'menu', 'articles', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article1.html', './pages/articles/article1.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/test-types.html', './pages/test-types.html', ['menu', 'allStyles']),
  createPages('./src/pages/test-types/tests1.html', './pages/test-types/tests1.html', ['header','menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests2.html', './pages/test-types/tests2.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests3.html', './pages/test-types/tests3.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests4.html', './pages/test-types/tests4.html', ['header', 'menu', 'allStyles', 'footer']),
]

module.exports = htmlPages;