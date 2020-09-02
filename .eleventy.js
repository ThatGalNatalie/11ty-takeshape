const CleanCSS = require('clean-css');
require('dotenv').config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter('console', function (value) {
    return console.log(value);
  });
  eleventyConfig.addFilter('slug', function (str) {
    return str
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy('img');
};
