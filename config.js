module.exports = {
  source: ["tokens/**/*.json"],
  format: {
    cssHelpers: require('./formats/cssHelpers')
  },
  platforms: {
    css: {
      transformGroup: 'web',
      buildPath: 'dist/',
      files: [{
        destination: 'helpers.css',
        format: 'cssHelpers'
      }]
    }
  }
}