/*global describe, it, beforeEach, afterEach*/
/*jshint expr:true*/

var createTagPrefixer  = require('..');
var postcss = require('postcss');
var expect = require('chai').expect;

describe('postcss-tag-prefixer', function() {
  it('should prefix css tags', function() {
    var tagPrefixer = createTagPrefixer({prefix: 'pm-'});

    return postcss([tagPrefixer])
      .process('a b c,d e f[g] {}')
      .then(function(result) {
        expect(result.css)
          .to.equal('.pm-a .pm-b .pm-c,.pm-d .pm-e .pm-f[g] {}');
      });
  });

  it('uses b- as a default prefix', function() {
    var tagPrefixer = createTagPrefixer();

    return postcss([tagPrefixer])
      .process('a b c,d e > f[g] {}')
      .then(function(result) {
        expect(result.css)
          .to.equal('.b-a .b-b .b-c,.b-d .b-e > .b-f[g] {}');
      });
  });

  it('should not touch pseudo elements arguments', function() {
    var tagPrefixer = createTagPrefixer();

    return postcss([tagPrefixer])
      .process('a:nth-of-type(n+1),b:not(:nth-of-type(even)) {}')
      .then(function(result) {
        expect(result.css)
          .to.equal('.b-a:nth-of-type(n+1),.b-b:not(:nth-of-type(even)) {}');
      });
  });
});
