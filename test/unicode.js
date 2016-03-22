'use strict'

const assert = require('assert')
const emojis = require('../lib/emojis.js')

describe('replaceWithUnicode', () => {
  it('should replace an emoji on the beginning of the line', () => 
    assert.strictEqual(emojis.replaceWithUnicode(':beer: is the answer'), '🍺 is the answer')
  ),
  it('should replace an emoji on the middle of the line', () =>
    assert.strictEqual(emojis.replaceWithUnicode('Stop... :hammer: time!'), 'Stop... 🔨 time!')
  ),
  it('should replace an emoji on the end of the line', () =>
    assert.strictEqual(emojis.replaceWithUnicode('Patience is :key:'), 'Patience is 🔑')
  ),
  it('should replace consecutive emojis', () =>
    assert.strictEqual(emojis.replaceWithUnicode(':game_die::game_die:'), '🎲🎲')
  ),
  it('should replace lines with just emojis', () =>
    assert.strictEqual(emojis.replaceWithUnicode(':eyes:/n:tongue:'), '👀/n👅')
  ),
  it('should replace even with colons on text', () =>
    assert.strictEqual(emojis.replaceWithUnicode('Here\'s a math for you: :beer: + :beer: = :beers:'),
      'Here\'s a math for you: 🍺 + 🍺 = 🍻')
  )
})
