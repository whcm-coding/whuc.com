var ajax = {
    get: function(url, onSuccess) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.send(null);
      req.onload = function() {
        // console.log('status', req.status);
        // console.log('data', req.responseText);
        if (req.status === 200) {
          onSuccess(req.responseText);
        }
      };
    },

    post: function(url, page) {
      var req = new XMLHttpRequest();
      req.open('POST', url);
      req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      req.send(`page=${page}`);
      req.onload = function() {
        console.log('status', req.status);
        console.log('data', req.responseText);
      };
    }
}