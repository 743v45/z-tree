'use strict';

var async = require('async');
var fs = require('fs');
var path = require('path');

function dirJSON(dir, callback) {
  function _dirJSON(dir) {
    var stats = fs.statSync(dir);
    var obj = {
      name: path.basename(dir)
    };
    if (stats.isFile()) {
      obj.type = 'file';
      return obj;
    } else {
      try {
        obj.type = 'directory';
        obj.child = fs.readdirSync(dir).map(function(child) {
          return _dirJSON(path.join(dir, child));
        });
      } catch(e) {
        obj.type = 'file';
        return obj;
      }
    }
    return obj;
  }
  return callback(null, _dirJSON(dir));
}

module.exports = function(dir, callback) {
  try {
    return process.nextTick(function() {
      dirJSON(dir, callback);
    });
  } catch(e) {
    // if dir is not a directory or a file, fs.statSync cause the error
    return callback(e);
  }
};
