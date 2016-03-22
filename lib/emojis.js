'use strict'

const url = require('url')
const emojis = require('../asset/emojis')

exports.replaceWithUnicode = function (input) {
  return replace(input, unicodeForEmoji)
}

exports.replaceWithHtml = function (input, baseUrl) {
  return replace(input, htmlForEmoji, baseUrl)
}

function replace (input, fn, baseUrl) {
  
  // tokens split by colon
  const tokens = input.split(':')
  
  // parsed tokens
  const parsed = [ ]
  
  // flag indicating if previous iteration token is an emoji
  let emojiBefore = true;
  
  // for each token
  for (let i = 0; i < tokens.length; ++i) {

    // flag indicating if current iteration token is an emoji
    const emojiCurrent = isEmoji(tokens[i])
    
    // if we are not dealing with an emoji
    if (!emojiBefore && !emojiCurrent) {
      
      // adds the colon back
      parsed.push(':')
      
    }
    
    // if current iteration token is an emoji
    if (emojiCurrent) {
      
      // parses the emoji and push it to the parsed array
      parsed.push(fn(tokens[i], baseUrl))
      
    }
    
    // if current iteration token isn't an emoji
    else {
      
      // push it without any parsing
      parsed.push(tokens[i])
      
    }
    
    // setting current flag as before flag
    emojiBefore = emojiCurrent
    
  }
  
  // joining the parsed tokens and returning it
  return parsed.join('')
}

function isEmoji(token) {
  return emojis[token] !== undefined
}

function unicodeForEmoji(token) {
  return emojis[token]
}

function htmlForEmoji (token, baseUrl) {
  var src = (baseUrl ? url.resolve(baseUrl, token)  : token) + '.png'
  return `<img class="emoji" width="20" height="20" src="${src}" alt="${token}">`
}

