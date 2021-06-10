$(document).ready(function () {
  $.getJSON("data.json", function (data) {
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
          // console.log(output);
        }
      }
    }
    const update = document.querySelector(".social");
    update.innerHTML = output;
  }); //jquery json
}); //ready jquery
