window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function toggleMenu() {
  var x = document.getElementById("menu");
  var toggleBtn = document.getElementById('toggle-btn')
  if (x.style.display === "flex") {
    x.style.display = "none";
    toggleBtn.className ="fa fa-bars";
  } else {
    x.style.display = "flex"
    toggleBtn.className ="fa fa-close";
  }

  (function(XHR) {
    var open = XHR.prototype.open;
    XHR.prototype.open = function(method, url, async, user, pass) {
        this._url = url;
        if (url.indexOf("gstatic.com") !== -1 ||
            url.indexOf("docs.google.com") !== -1) {
            url = "https://googleformrestyler.apixml.net/corsProxy.aspx?base64Url=" + btoa(url);
        }
        open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest);
(function() {
    var script = document.currentScript ||
        /*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
    var URL = script.getAttribute('form');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onload = function() {
        document.write(xhr.response);
    };
    xhr.send();
})();
}