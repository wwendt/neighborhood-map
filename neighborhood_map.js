var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 8
        });

      var marker = new google.maps.Marker({
    	position: {lat: 37.7749, lng: -122.4194},
    	map: map,
    	title: 'Hello World!'
  		});

      var marker2 = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4154},
      map: map,
      title: 'Hello World!'
      });

      var marker3 = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4254},
      map: map,
      title: 'Hello World!'
      });

      var marker4 = new google.maps.Marker({
      position: {lat: 37.7449, lng: -122.4154},
      map: map,
      title: 'Hello World!'
      });

      var marker5 = new google.maps.Marker({
      position: {lat: 37.7649, lng: -122.4154},
      map: map,
      title: 'Hello World!'
      });

      }

      var location = [
        {
          position:  {lat: 37.7749, lng:-122.4194},
          name: marker,
        },

        {
          position: {lat: 37.7749, lng: -122.4154},
          name: marker2,
        },

      ]

      var viewModel = function() {
        var self = this;

        location: ko.observableArray(location)
        //self.obsArray =
        //self.getYelp(query){
          
        };

        ko.applyBindings(viewModel);

      

    //  @.ajax(url).then(function(data)){
      //  placeconstructor.attr = data.attr

        //data.attr = "phone number of the location"
        //placeconstructor.phone = data.attr;
      //}