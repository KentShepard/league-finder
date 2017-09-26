var serverRequest = ({name}, callback) => {
  $.ajax({
    url: 'http://127.0.0.1:3000/summoner',
    data: {name: name},
    dataType: 'json',
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log(err);
    },
    type: 'GET'
  })
};

window.serverRequest = serverRequest;