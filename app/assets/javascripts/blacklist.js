/*!
  Copyright (c) 2015 KhacLuan.
  Licensed under the MIT License (MIT), see
  http://khacluan.github.io/backlist
*/

(function(){
  'user strict';

  function blacklist(src) {
    var copy = {}
    var filter = arguments[1]

    if (typeof filter === 'string') {
      filter = {}
      for (var i = 1; i < arguments.length; i++) {
        filter[arguments[i]] = true
      }
    }

    for (var key in src) {
      // blacklist?
      if (filter[key]) continue

      copy[key] = src[key]
    }

    return copy
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = blacklist;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
    // AMD. Register as an anonymous module.
    define(function () {
      return blacklist;
    });
  } else {
    window.blacklist = blacklist;
  }
}());