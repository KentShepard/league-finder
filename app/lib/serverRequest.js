var serverRequest = ({name, accountId, gameId, champId, endpoint}, callback) => {
  $.ajax({
    url: `/${endpoint}`,
    data: {name: name,
      accountId: accountId,
      gameId: gameId,
      champId: champId
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