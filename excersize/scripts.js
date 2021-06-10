let r;

if (window.XMLHttpRequest) {
  r = new XMLHttpRequest();
} else {
  r = new ActiveXObject("Microsoft.XMLHTTP");
}

r.open("GET", "data.json");

r.onreadystatechange = function () {
  if (r.status === 200 && r.readyState === 4) {
    let data = JSON.parse(r.responseText);
    let output = "";

    for (let i = 0; i <= data.courses.length; i++) {
      for (key in data.courses[i]) {
        if (data.courses[i].hasOwnProperty(key)) {
          output +=
            "<li>" +
            '<a href="' +
            data.courses[i][key] +
            '">' +
            key +
            "</a>" +
            "</li>";
          console.log(output);
        }
      }
    }
    const update = document.querySelector(".social");
    update.innerHTML = output.toUpperCase(update);
  }
};
