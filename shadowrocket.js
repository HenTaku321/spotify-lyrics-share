var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (contentType && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    $notification.post(
        "🐱💡检测到访问Spotify歌词分享", 
        "点击查看图片", 
        url,
        url
    );
} 

$done({});
