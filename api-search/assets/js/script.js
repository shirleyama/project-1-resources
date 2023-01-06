/* 
I investigated the ZenQuotes API but got a CORS error, so though it was wise to abandon it. This is because resources list we were given avoided API's that used CORS. https://coding-boot-camp.github.io/full-stack/apis/api-resources

So I found another quotes API, which happened to have other API's too. You can view in console which each returns. The QR code unfortunately can't be viwed in console, but can be tested at this address:
https://api-ninjas.com/api/qrcode
I typed in Shirley and it created a QR code. I read the QR image created with the camera on my phone and it said "Shirley". 

I chose 3 so we have options, yet we can choose any others from the list.
*/

//quotes/////////
//https://api-ninjas.com/api/quotes
var category = "happiness";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
  headers: { "X-Api-Key": "ZdYI+Lj/vMMSzi+ktewh/w==89dSZH02W3eHyFfr" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

//riddles/////////
//https://api-ninjas.com/api/riddles//
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/riddles",
  headers: { "X-Api-Key": "ZdYI+Lj/vMMSzi+ktewh/w==89dSZH02W3eHyFfr" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

/////qr-code  //
//https://api-ninjas.com/api/qrcode////
var data = "https://api-ninjas.com";
var fmt = "jpg";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/qrcode?data=" + data + "&format=" + fmt,
  headers: {
    "X-Api-Key": "ZdYI+Lj/vMMSzi+ktewh/w==89dSZH02W3eHyFfr",
    Accept: "image/png",
  },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});
