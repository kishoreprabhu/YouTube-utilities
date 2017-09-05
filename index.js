/**
 * retrieve unique identifier from url
 * @param {string} url 
 */
var getYoutubeId = ( url ) => {
    if ( !url ) {
        throw new TypeError("expected url as parameter");
    }
    var REG_EXP = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var _match = url.match(REG_EXP);
    if ( _match && _match[7] ) {
        return _match[7];
    }
    return null;
}

/**
 * constructs embed video link using youtube url
 * @param { string } url 
 * @param { string } style 
 */
var getVideoEmbedLink = ( url, style ) => {
    var _videoId = "",
        style = style ? style : "";
    if ( !url ) {
       throw new TypeError("expected url as parameter");
    }
    _videoId = getYoutubeId(url).trim();
    if ( !_videoId ) {
        throw new TypeError("url parameter doesn't contain any identifier");
    }
    if ( !_videoId ) return null;
    return '<iframe src="https://youtube.com/embed/'+_videoId+'?rel=0&controls=2&enablejsapi=1&amp;yt:stretch=16:9&amp;version=3&amp;autoplay=0&amp;autohide=1&amp;playerapiid=ytplayer&theme=dark" frameborder="0" width="100%" height="300px" style="'+style+'" frameborder="0"  allowfullscreen></iframe>';
}

/**
 * retrieves the thumbnail of youtube video
 * @param { string } url 
 */
var getYoutubeImage = ( url ) => {
    var _videoId = "";
    if ( !url ) {
       throw new TypeError("expected url as parameter");
    }
    _videoId = getYoutubeId(url).trim();
    if ( !_videoId ) {
        throw new TypeError("url parameter doesn't contain any unique identifier");
    }
    return {
        'default': {
            url: 'http://img.youtube.com/vi/' + _videoId + '/default.jpg',
            width: 120,
            height: 90
        },
        'medium': {
            url: 'http://img.youtube.com/vi/' + _videoId + '/mqdefault.jpg',
            width: 320,
            height: 180
        },
        'high': {
            url: 'http://img.youtube.com/vi/' + _videoId + '/hqdefault.jpg',
            width: 480,
            height: 360
        }
    }
}

module.exports = {
    "getYoutubeId": getYoutubeId,
    "getVideoEmbedLink": getVideoEmbedLink,
    "getYoutubeImage": getYoutubeImage
};