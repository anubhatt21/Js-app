function changeColors() {
  setTimeout(function() {
    document.querySelector("#first").style["color"] = "red";
    setTimeout(function() {
      document.querySelector("#second").style["color"] = "blue";
      setTimeout(function() {
        document.querySelector("#third").style["color"] = "green";
        setTimeout(function() {
          document.querySelector("foruth").style["color"] = "purple";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}


$.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json"), function(data) {
  document.querySelector("#data").innerHTML = data;
});