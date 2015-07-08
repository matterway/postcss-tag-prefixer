var postcss = require('postcss');
var parser = require('postcss-selector-parser');

/**
 * Creates selector processor.
 *
 * @param {String} prefix
 * @returns {Function}
 */
function createPrefixer(prefix) {
  /**
   * @see https://github.com/postcss/postcss-selector-parser
   */
  return function addPrefixToTag(node) {
    node.eachInside(function(node) {
      if (node.type !== 'selector') {
        return;
      }

      node.nodes.forEach(function(node) {
        if (node.type !== 'tag') {
          return;
        }

        // Replace tag with prefixed class
        node.replaceWith(parser.className({
          value: prefix + node.value
        }));
      });
    });
  };
}

module.exports = postcss.plugin('postcss-tag-prefixer', function(opts) {
  opts = opts || {};

  var prefixer = createPrefixer(opts.prefix || 'b-');
  return function(css) {
    css.eachRule(function(rule) {
      rule.selector = parser(prefixer).process(rule.selector).result;
    });
  };
});
