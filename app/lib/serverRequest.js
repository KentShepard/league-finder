var serverRequest = ({name, accountId, gameId, endpoint}, callback) => {
  $.ajax({
    url: `http://127.0.0.1:3000/${endpoint}`,
    data: {name: name,
      accountId: accountId,
      gameId: gameId
    },
    dataType: 'json',
    success: function(data) {
      callback(null, data);
    },
    error: function(err) {
      callback(err);
    },
    type: 'GET'
  })
};

window.serverRequest = serverRequest;