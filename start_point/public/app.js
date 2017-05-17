var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
      makeRequest(url, requestComplete);
    }

    var populateList = function(albums){
      console.log(albums[2]);
      var display = document.getElementById('albums');
      var ul = document.querySelector("ul");
      display.appendChild(ul);

      albums.forEach(function(album){
        var li = document.createElement('li');

        li.innerHTML +=  
        album.name + "<br>" + 
        album.artists[0].name +
        "<img src=" + album.images[0].url + " />"; 
        
        ul.appendChild(li);

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