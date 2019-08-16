# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

# Changes in this variant

## Use custom dust naming via configure in `package.json`

```json5
{
  distNaming: {
    output: {
      production: {
        filename: 'epg.bundle.js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
      },
      development: {
        // same as above
      },
    },
    css: {
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    },
    media: {
      filename: '[name].[hash:8].[ext]',
    },
    files: {
      filename: '[name].[hash:8].[ext]',
    },
  },
}
```

## Use CACHE_ROOT from .env to instruct where webpack plugins/loaders store caches

If omit will use defaults `true`
Configured to store caches of:

- jest
- terser-plugin
- babel-loader

Do not forget to add them in .\*ignore files

## Use webpackOverrides from `package.json`

Unstable and dangerous.

## Kick out `react-dev-utils/webpackHotDevClient` due to it's could not be configured.

## Try to configure schema/host/port as could it possible in every related case.
