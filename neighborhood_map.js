var locations =  [
        {
          position:  {lat: 37.7749, lng:-122.4194},
          name: "Location 1",
          

        },

        {
          position: {lat: 37.7749, lng: -122.4154},
          name: "Location 2",

        },

        {
          position: {lat: 37.7649, lng: -122.4154},
          name: "location 3"
        }

      ]



var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 8
        });

   for (var i = 0; i < myViewModel.myLocations().length; i++) {
        console.log(myViewModel.myLocations(i));

        var marker = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4194},
      map: map,
      title: 'Hello World!'
      });
      


      }
    
    /*   
        

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
       
    */

      }

      

      

      var Location = function(data) {
        this.name = data.name;
        this.marker = ko.observableArray(locations);
        this.marker2 = data.marker2;

       // name = "Location 1";



      }

      var viewModel = function() {
        var self = this;
        this.myLocations = ko.observableArray(locations);
        this.myLocation = ko.observable(new Location(locations[0]));
        console.log(this.myLocation());

        this.query = ko.observable("");
        this.trackQuery = ko.computed(function() {  
           var query = self.query();     
           console.log("query: ", query);  
            });
         //self.obsArray =
        //self.getYelp(query){

         
          
        };



        var myViewModel = new viewModel();
        ko.applyBindings(myViewModel);

        

      

    //  @.ajax(url).then(function(data)){
      //  placeconstructor.attr = data.attr

        //data.attr = "phone number of the location"
        //placeconstructor.phone = data.attr;
      //}