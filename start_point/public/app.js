var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
      makeRequest(url, requestComplete);
    }

    var populateList = function(albums){
      console.log(albums[2].name);
      var display = document.getElementById('albums');

      albums.forEach(function(album){
        display.innerText +=  "\n" + album.name;
      });
    }

    var makeRequest = function(url, callback){
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.addEventListener('load', callback);
      request.send();
    }

    var requestComplete = function(){
        if(this.status !== 200) return;
        var jsonString = this.responseText;
        var albums = JSON.parse(jsonString);

        populateList(albums.albums.items);
      }  





window.addEventListener('load', app);


// obj.albums.items