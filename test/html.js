'use strict'

const assert = require('assert')
const emojis = require('../lib/emojis.js')

describe('replaceWithHtml', () => {
  it('should replace an emoji on the beginning of the line', () =>
    assert.strictEqual(emojis.replaceWithHtml(':beer: is the answer'),
      '<img class="emoji" width="20" height="20" src="beer.png" alt="beer"> is the answer')
  ),
  it('should replace an emoji on the middle of the line', () =>
    assert.strictEqual(emojis.replaceWithHtml('Stop... :hammer: time!'),
      'Stop... <img class="emoji" width="20" height="20" src="hammer.png" alt="hammer"> time!')
  ),
  it('should replace an emoji on the end of the line', () =>
    assert.strictEqual(emojis.replaceWithHtml('Patience is :key:'),
      'Patience is <img class="emoji" width="20" height="20" src="key.png" alt="key">')
  ),
  it('should replace consecutive emojis', () =>
    assert.strictEqual(emojis.replaceWithHtml(':game_die::game_die:'),
      '<img class="emoji" width="20" height="20" src="game_die.png" alt="game_die"><img class="emoji" width="20" height="20" src="game_die.png" alt="game_die">')
  ),
  it('should replace lines with just emojis', () =>
    assert.strictEqual(emojis.replaceWithHtml(':eyes:\n:tongue:'),
      '<img class="emoji" width="20" height="20" src="eyes.png" alt="eyes">\n\<img class="emoji" width="20" height="20" src="tongue.png" alt="tongue">')
  ),
  it('should replace even with colons on text', () =>
    assert.strictEqual(emojis.replaceWithHtml('Here\'s a math for you: :beer: + :beer: = :beers:'),
      'Here\'s a math for you: <img class="emoji" width="20" height="20" src="beer.png" alt="beer"> + <img class="emoji" width="20" height="20" src="beer.png" alt="beer"> = <img class="emoji" width="20" height="20" src="beers.png" alt="beers">')
  )
})
