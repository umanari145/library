const mix = require('laravel-mix');

//console.log(mix)
mix.js('./js/resource.js', './js/main.js')
mix.sass('./css/common.scss','./css/common.css',{
    implementation: require('node-sass')
})

mix.webpackConfig({
    devtool: 'source-map'
})
.sourceMaps()
