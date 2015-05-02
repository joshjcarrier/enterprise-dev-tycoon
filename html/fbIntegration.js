$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '535181779902352',
      version: 'v2.0' // or v2.0, v2.1, v2.0
    });     
    /*FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else {
            FB.login();
        }
    });

    FB.login(function () {
        FB.api('/me/posts', function (response) {
            alert(reponse);
        });
    });*/
  });
  
});