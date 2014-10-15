var assert = require('assert')
  , emojis = require('../index.js')

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the beginning of the line', function () {

      // act
      var actual = emojis.replaceWithHtml(':beer: is the answer')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" align="absmiddle" src="beer.png" alt="beer" /> \
is the answer')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the middle of the line', function () {

      // act
      var actual = emojis.replaceWithHtml('Stop... :hammer: time!')

      // assert
      assert.strictEqual(actual, 'Stop... \
<img class="emoji" width="20" height="20" align="absmiddle" src="hammer.png" alt="hammer" /> \
time!')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace an emoji on the end of the line', function () {

      // act
      var actual = emojis.replaceWithHtml('Patience is :key:')

      // assert
      assert.strictEqual(actual, 'Patience is \
<img class="emoji" width="20" height="20" align="absmiddle" src="key.png" alt="key" />')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace consecutive emojis', function () {

      // act
      var actual = emojis.replaceWithHtml(':game_die::game_die:')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" align="absmiddle" src="game_die.png" alt="game_die" />\
<img class="emoji" width="20" height="20" align="absmiddle" src="game_die.png" alt="game_die" />')

    })
  })
})

describe('emojis', function () {
  describe('replaceWithHtml', function () {
    it('should replace lines with just emojis', function () {

      // act
      var actual = emojis.replaceWithHtml(':eyes:\n:tongue:')

      // assert
      assert.strictEqual(actual, '\
<img class="emoji" width="20" height="20" align="absmiddle" src="eyes.png" alt="eyes" />\n\
<img class="emoji" width="20" height="20" align="absmiddle" src="tongue.png" alt="tongue" />')

    })
  })
})