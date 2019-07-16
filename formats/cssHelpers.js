module.exports = function(dictionary, config) {
  return dictionary.allProperties.map(function(prop) {
    return `.${prop.name} { ${prop.cssProp}: ${prop.value}; }`
  }).join('\n');
}