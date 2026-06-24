const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'footer', 'allStyles']),
  // createPages('./src/pages/files.html', './pages/files.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/about.html', './pages/about.html', ['menu', 'footer', 'allStyles', 'footer']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['menu', 'footer', 'styleguide', 'allStyles', 'footer']),
  
  createPages('./src/pages/podcast-types.html', './pages/podcast-types.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast1.html', './pages/podcast-types/podcast1.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast2.html', './pages/podcast-types/podcast2.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/podcast-types/podcast3.html', './pages/podcast-types/podcast3.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/articles.html', './pages/articles.html', ['header', 'menu', 'articles', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article1.html', './pages/articles/article1.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article2.html', './pages/articles/article2.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article3.html', './pages/articles/article3.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article4.html', './pages/articles/article4.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article5.html', './pages/articles/article5.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article6.html', './pages/articles/article6.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article7.html', './pages/articles/article7.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article8.html', './pages/articles/article8.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article9.html', './pages/articles/article9.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article10.html', './pages/articles/article10.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article11.html', './pages/articles/article11.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/articles/article12.html', './pages/articles/article12.html', ['menu', 'allStyles', 'footer']),
  
  createPages('./src/pages/about.html', './pages/about.html', ['menu', 'allStyles', 'footer']),
  createPages('./src/pages/404.html', './pages/404.html', ['menu', 'allStyles']),
  createPages('./src/pages/test-types.html', './pages/test-types.html', ['menu', 'allStyles']),
  createPages('./src/pages/test-types/tests1.html', './pages/test-types/tests1.html', ['header','menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests2.html', './pages/test-types/tests2.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests3.html', './pages/test-types/tests3.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests4.html', './pages/test-types/tests4.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests5.html', './pages/test-types/tests5.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests6.html', './pages/test-types/tests6.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests7.html', './pages/test-types/tests7.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests8.html', './pages/test-types/tests8.html', ['header', 'menu', 'allStyles', 'footer']),
  createPages('./src/pages/test-types/tests9.html', './pages/test-types/tests9.html', ['header', 'menu', 'allStyles', 'footer']),
]

module.exports = htmlPages;