var express = require('express');
var app = express();

const docker = require('harbor-master/index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

// client.info().then((info) => {
//   console.log(info);
// }).catch((err) => {
//   console.error(err);
// });

// var options = {filters: }


// images=client.images().list()


app.get('/', function (req, res) {

  client.images().list().then((info) => {

    // console.log(info);
      // // var obj = JSON.parse(info)
      // var obj = info.json()
      // var images1=obj.Created


      console.log(info);

      res.send(info);
        }).catch((err) => {
      console.error(err);
        });



});
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');

});
