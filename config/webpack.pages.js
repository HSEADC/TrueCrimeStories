const HtmlWebpackPlugin = require("html-webpack-plugin");
function createPages(template, filename){
    return new HtmlWebpackPlugin({
        template: template,
        filename: filename
      })
}
const htmlPages=[
    createPages('./src/index.html', './index.html'),
    createPages('./src/pages/mainpage/mainpage.html', './pages/mainpage/mainpage.html'),
    createPages('./src/pages/magazine/magazine.html', './pages/magazine/magazine.html'),
    createPages('./src/pages/podcasts/podcasts.html','./pages/podcasts/podcasts.html'),
    createPages('./src/pages/folders/folders.html','./pages/folders/folders.html'),
    createPages('./src/pages/tests/test1.html','./pages/tests/test1.html')
]
module.exports=htmlPages