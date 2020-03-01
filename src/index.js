
/**
 * Returns the latest index of provided `searchString` which matches the char of any provided option in `opts` list.
 * 
 * Returns -1 if there is no any matches.
 * 
 * @param {string} searchString 
 * @param {string[]} opts array of searchable chars. 
 * It doesn't allow to use options which contain more than one chars - in this case 
 * it will use only first char of provided substring for searching.
 * 
 * @example findLatestIndex('foobar', 'f', 'b') // returns 3
 */
function findLatestIndex(searchString, ...opts) {

  if (typeof searchString !== 'string') {
    return -1;
  }

  for (let i = searchString.length - 1; i >= 0; i--) {
    if (opts.some((opt) => opt == searchString[i])) {
      return i;
    }
  }

  return -1;
}

function func(s, a, b) {

  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;

  while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex;
    }
    else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex != -1) {
    return bIndex;
  }
  else {
    return -1;
  }
}

module.exports = {
  findLatestIndex,
  func,
}
