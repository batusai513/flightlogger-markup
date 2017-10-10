module.exports = {
  sourceMap: true,
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-normalize": {},
    "postcss-cssnext": {},
    // "autoprefixer": {},
    "postcss-reporter": {},
    "postcss-units": {
      size: 18
    }
  },
};

/*
  plugins: {
    'postcss-normalize': {},
    'postcss-import': {
      addModulesDirectories: ['node_modules']
    },
    'autoprefixer': {},
  }

  plugins: function() {
  return [
    require('postcss-normalize'),
    require('postcss-import')({
      addModulesDirectories: ['node_modules']
    }),
    require('stylelint')(),
    require('postcss-reporter')(),
    require('postcss-cssnext')({

    }),
    require('postcss-nested'),
    // require('postcss-remove-root'),
    require('css-mqpacker')({
      sort: true
    }),
    require('autoprefixer')
  ]
}

*/