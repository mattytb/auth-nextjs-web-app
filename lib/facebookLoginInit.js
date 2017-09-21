import Settings from '../settings'

export default (callback) => {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : Settings.fbAppId,
            cookie     : true,  
            xfbml      : true,  
            version    : 'v2.1' 
        });
        FB.getLoginStatus(function(response) {
            callback(response);
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement('script'); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'style', 'facebook-jssdk'));
}