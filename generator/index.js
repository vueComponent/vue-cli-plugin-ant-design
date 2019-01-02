module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    dependencies: {
      'ant-design-vue': '^1.2.4'
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/ant-design-vue.js'`)

  api.render({
    './src/plugins/ant-design-vue.js': './templates/src/plugins/ant-design-vue.js',
    './src/App.vue': './templates/src/App.vue'
  })

  if(opts.lang !== 'en_US') {
    api.render({
      './src/App.vue': './templates/src/customLangApp.vue'
    })
  } else {
    api.render({
      './src/App.vue': './templates/src/App.vue'
    })
  }

  if (opts.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-import': '^1.11.0'
      }
    })
    api.extendPackage({
      devDependencies: {
        'less-loader': '^4.1.0',
        'less': '^2.7.3'
      }
    })
  } else if (opts.customTheme) {
    api.render({
      './src/antd-variables.less': './templates/src/antd-variables.less'
    })
    api.extendPackage({
      devDependencies: {
        'less-loader': '^4.1.0',
        'less': '^2.7.3'
      }
    })
  }

  api.onCreateComplete(() => {
    if (opts.import === 'partial') {
      utils.updateBabelConfig(cfg => {
        const pluginComponent = ['import', {
          'libraryName': 'ant-design-vue',
          'libraryDirectory': 'es', 
          'style': true
        }]
        cfg.plugins = cfg.plugins || []
        cfg.plugins.push(pluginComponent)
        return cfg
      })
    }
  })
}
