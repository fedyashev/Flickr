var setUrl = function (word) {
  return "http://api.flickr.com/services/feeds/photos_public.gne?" +
    "tags=" + word + "&format=json&jsoncallback=?"
};

var clearContent = function () {
  $(".content").empty();
};

var main = function () {
  console.log("Hello, World!");
  //  var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
  //   "tags=woman&format=json&jsoncallback=?";
  // $.getJSON(url, function(flickrResponse) {
  //   var $list = $(".content");
  //   flickrResponse.items.forEach(function (photo) {
  //     var $img = $("<img src=\"" + photo.media.m + "\">");
  //     $list.append($img);
  //   });
  // });

  $("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      var $text = $("input").val();
      if ($text !== "") {
        clearContent();
          $.getJSON(setUrl($text), function(flickrResponse) {
            var $list = $(".content");
            flickrResponse.items.forEach(function (photo) {
              var $img = $("<img>");
              $img.hide();
              $img.attr("src", photo.media.m);
              $list.append($img);
              $img.fadeIn(1000);
            });
          });
        $("input").val("");
      }
    }
  });
};

$(document).ready(main);