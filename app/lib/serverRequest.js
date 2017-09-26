var serverRequest = ({query}, callback) => {
  // $.ajax({
  //   url: '127.0.0.1:3000',
  //   data: {query: query},
  //   dataType: 'json',
  //   success: function(data) {
  //     callback(data);
  //   },
  //   error: function(err) {
  //     console.log(err);
  //   },
  //   type: 'GET'
  // })
  console.log(query)
};

window.serverRequest = serverRequest;