// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
// PARSE_APP_ID: 2ef3d2c5e858caa0f408245343948b1473cac982
// PARSE_API_KEY: c4585920fd5f002e861bcb48a7f9a61f8893ee43
// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'PARSE_APP_ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'PARSE_API_KEY');
});

// Put your campus prefix here
window.CAMPUS = 'hrr';
