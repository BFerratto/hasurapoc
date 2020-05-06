const custom = require('../webpack/webpack.common.js')
const path = require('path')
const ourRules = custom.module.rules

ourRules[0].use.push(
  {
    loader: require.resolve("react-docgen-typescript-loader"),
    options: {
      skipPropsWithoutDoc: false,
      setDisplayName: true,
    }
  }

)
ourRules.push({
  test: /__stories__\/.*\.ts(x?)$/,
  exclude: [/node_modules/, /__tests__/],
  use: [
    {
      loader: 'ts-loader',
      options: {
        configFile: path.resolve(__dirname, '../tsconfig.story.json')
      }
    }
  ]
})
module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: ourRules.concat(config.module.rules)
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
        extensions: custom.resolve.extensions.concat(config.resolve.extensions)
      }
    }
  }
}
