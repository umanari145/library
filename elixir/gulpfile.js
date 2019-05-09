var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.webpack('./es6load.js','./bundle.js');
});
