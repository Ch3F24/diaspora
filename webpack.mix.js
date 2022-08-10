const mix = require('laravel-mix');
require('laravel-mix-svg-vue');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .svgVue()
    .js('resources/js/house.js', 'public/js')
    .js('resources/js/argentine.js', 'public/js')
    .js('resources/js/globe.js', 'public/js')
    .copy('node_modules/leader-line/leader-line.min.js','public/js/leader-line.min.js')
    .copyDirectory('resources/fonts','public/fonts')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);
