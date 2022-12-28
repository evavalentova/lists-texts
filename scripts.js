let names = ["Eva", "Andrej", "Lucie", "Vojta", "Ester"];

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!",
};

names.forEach((name) => {
  $("ul").append("<li>" + name + "</li>");
});

$("li:nth-child(4)").css("font-weight", "bold");

$("head").append("<title>" + additionalBlock.title + "</title>");

$("main").append("<p>" + additionalBlock.text + "</p>");
