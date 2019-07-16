module.exports = function(dictionary, config) {
  // Dictionary is filtered
  return dictionary.allProperties.map(function(prop) {
    return `.${prop.name} { ${prop.cssProp}: ${prop.value}; }`
  }).join('\n');
}