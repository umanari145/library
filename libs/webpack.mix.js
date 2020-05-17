const mix = require('laravel-mix');

//console.log(mix)
mix.js('./js/resource.js', './js/main.js')
mix.sass('./css/common.scss','./css/common.css',{
    implementation: require('node-sass')
})

mix.less('./css/common.less','./css/common_less.css')

mix.styles([
    './css/common.css',
    './css/common_less.css'
], './css/common.css');

mix.webpackConfig({
    devtool: 'source-map'
})
.sourceMaps()
