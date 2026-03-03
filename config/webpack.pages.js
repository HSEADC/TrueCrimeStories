const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'menu', 'allStyles']),
  createPages('./src/pages/files.html', './pages/files.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/about.html', './pages/about.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['menu', 'styleguide', 'allStyles', 'footer']),
  
  createPages('./src/pages/podcasts.html', './pages/podcasts.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcasts/podcast1.html', './pages/podcasts/podcast1.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcasts/podcast2.html', './pages/podcasts/podcast2.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcasts/podcast3.html', './pages/podcasts/podcast3.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/articles.html', './pages/articles.html', ['header', 'menu', 'articles', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article1.html', './pages/articles/article1.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/test-types.html', './pages/test-types.html', ['menu', 'allStyles']),
  createPages('./src/pages/test-types/tests1.html', './pages/test-types/tests1.html', ['header','menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests2.html', './pages/test-types/tests2.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests3.html', './pages/test-types/tests3.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests4.html', './pages/test-types/tests4.html', ['header', 'menu', 'allStyles', 'footer']),
]

module.exports = htmlPages;