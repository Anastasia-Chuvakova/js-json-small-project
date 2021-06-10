// function dataHandler(data) {
//   let template = $("#carimagestemplate").html();

//   let html = Mustache.to_html(template, data);

//   $(".carimages").html(html);

//   $(".carimages").cycle({
//     fx: "fade",
//     pause: 1,
//     next: "#next",
//     prev: "#prev",
//     speed: 1000,
//     timeout: 1000,
//   });
// }
$(function () {
  $.getJSON("data.json", function (data) {
    let template = $("#carimagestemplate").html();
    let html = Mustache.to_html(template, data);

    $(".carimages").html(html);
    $(".carimages").cycle({
      fx: "fade",
      pause: 1,
      next: "#next",
      prev: "#prev",
      speed: 1000,
      timedout: 1000,
    });
  });
});
