# YouTube-utilities
A module for ease access of YouTube unique identifier, video thumbnail and embedded markup.

# installation
```
npm install youtube-utilities
```

# usage
```javascript 
var utility = require("youtube-utilities");

// To get unique identifier from youtube url 
var url = "https://www.youtube.com/watch?v=XL9Ri8pO68w";
var id = utility.getYoutubeId(url);
console.log(id);
// output -> XL9Ri8pO68w

// To get embedded markup from youtube url
var url = "https://www.youtube.com/watch?v=XL9Ri8pO68w";
var markup = utility.getVideoEmbedLink(url);  
console.log(markup);
// output -> <iframe src="https://youtube.com/embed/XL9Ri8pO68w?rel=0&controls=2&enablejsapi=1&amp;yt:stretch=16:9&amp;version=3&amp;autoplay=0&amp;autohide=1&amp;playerapiid=ytplayer&theme=dark" frameborder="0" width="100%" height="300px" style="" frameborder="0"  allowfullscreen></iframe>

// To get thumbnail image from youtube url
var url = "https://www.youtube.com/watch?v=XL9Ri8pO68w";
var images = utility.getYoutubeImage(url);
// output -> {"default":{"url":"http://img.youtube.com/vi/XL9Ri8pO68w/default.jpg","width":120,"height":90},"medium":{"url":"http://img.youtube.com/vi/XL9Ri8pO68w/mqdefault.jpg","width":320,"height":180},"high":{"url":"http://img.youtube.com/vi/XL9Ri8pO68w/hqdefault.jpg","width":480,"height":360}}
```

# API
```javascript
getYoutubeId(url);

getVideoEmbedLink(url);

getYoutubeImage(url);
```
