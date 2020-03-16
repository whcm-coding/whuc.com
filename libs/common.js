function parseSearchParams() {
  var search = window.location.search;
  if (!search) return null;
  var searchWords = search.slice(1).split('&');
  var res = {};
  for (var i = 0; i < searchWords.length; ++i) {
    var words = searchWords[i].split('=');
    res[decodeURIComponent(words[0])] = decodeURIComponent(words[1]);
  }
  return res;
}
