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
         

         this.listClick = function(location) {
      console.log(location);
    } 
        };

        

     function nonce_generate() {
  return (Math.floor(Math.random() * 1e12).toString());
};

var YELP_BASE_URL = "http://api.yelp.com/v2/search";
var yelp_url = YELP_BASE_URL;
var YELP_KEY_SECRET = 'VkPLkNT6aJ6pVkLYhlzrYbjbqQQ';
var YELP_TOKEN_SECRET = 'p17i1pe9qahC-_vaOEegCM81BcM';
var parameters = {
    oauth_consumer_key: "jm06CzZZen_oNkv_p8thnA",
    oauth_token: "g7zqOkvW1IIFBcTHiQGG3QnHWTGakuj-",
    oauth_nonce: nonce_generate(),
    oauth_timestamp: Math.floor(Date.now() / 1000),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0',
    callback: 'cb',
    term: 'William Cross Wine Merchants',
    location: 'San Francisco',
    limit: 1
  };


//var yelp_url = YELP_BASE_URL + '/business/' + self.selected_place().Yelp.business_id;
 var settings = {
      url: yelp_url,
      data: parameters,
      cache: true,                // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
      dataType: 'jsonp',
       success: function(results) {
        console.log('it worked');
        // Do stuff with results
        console.log(results);
    },
    fail: function() {
        console.log('it failed');
        // Do stuff on fail
    }
    };

    var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, YELP_KEY_SECRET, YELP_TOKEN_SECRET);
parameters.oauth_signature = encodedSignature;

$.ajax(settings);

/*$.ajax(settings).done(function(data) {
  




     


   

    // Send AJAX query via jQuery library.
    

  var yelpLocations = data.businesses;
  yelpLocations.forEach(function(location) {
    var loc = {};
    loc.name = location.name;
    loc.phone = location.display_phone;
    loc.lat = location.location.coordinate.latitude;
    loc.lng = location.location.coordinate.longitude;
    // etc.  -- add whatever data looks interesting
    // when done, push the location into the location array for the app
    locationsArray.push(appLocation)
  });
});
*/



        var myViewModel = new viewModel();
        ko.applyBindings(myViewModel);

        

      

    //  @.ajax(url).then(function(data)){
      //  placeconstructor.attr = data.attr

        //data.attr = "phone number of the location"
        //placeconstructor.phone = data.attr;
      //}