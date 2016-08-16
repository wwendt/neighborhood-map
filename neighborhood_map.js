var locations =  [
        {
          position:  {lat: 37.786532, lng:-122.411525},
          name: "Napa Valley Winery Exchange",
          
        },

        {
          position: {lat: 37.800644, lng: -122.438221},
          name: "California Wine Merchant"
          
        },

        {
          position: {lat: 37.777353, lng: -122.422650},
          name: "Arlequin Wine Merchant"
        },
        {
          position: {lat: 37.797898, lng: -122.422449},
          name: "Biondivino"
        },

        {
          position: {lat: 37.797878, lng: -122.422297},
          name: "William Cross Wine Merchants"
        }

      ]



var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 8
        });

   for (var i = 0; i < myViewModel.myLocations().length; i++) {
        //console.log(myViewModel.myLocations(i));

        var marker = new google.maps.Marker({
      
      position: myViewModel.myLocations()[i].position,
      map: map,
      name: myViewModel.myLocations()[i].name
      
      });
        myViewModel.myLocations()[i].marker = marker;
      


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
        this.filteredArray = ko.computed( function() {  
          var query = self.query().toLowerCase();  
          if (!query) {
            return self.myLocations()
          }
          else {
            return ko.utils.arrayFilter(self.myLocations(), function( location) {
              var isMatch = location.name.toLowerCase().indexOf(query) >=0;
              location.marker.setVisible(isMatch);
              return isMatch;
            })
          }

              
          // console.log("query: ", query);  
          
           
            }
            );
         //self.obsArray =
        //self.getYelp(query){


         
          
        };

        $.ajax(settings)
.done( function( data ) {
  var yelpAPI = "https://api.yelp.com/v2/search/?term=California Wine Merchant&location=San Francisco, CA&category_filter=wineries";
  var yelpLocations = data.businesses;
  yelpLocations.forEach( function(location){
     var loc = {};
     loc.name = location.name;
     loc.phone = location.display_phone;
     loc.lat = location.location.coordinate.latitude;
     loc.lng = location.location.coordinate.longitude;
     // etc.  -- add whatever data looks interesting
     // when done, push the location into the location array for the app
     locationsArray.push(appLocation)
  }
};



        var myViewModel = new viewModel();
        ko.applyBindings(myViewModel);

        

      

    //  @.ajax(url).then(function(data)){
      //  placeconstructor.attr = data.attr

        //data.attr = "phone number of the location"
        //placeconstructor.phone = data.attr;
      //}