const fs = require("fs");

/* Find and replace asset paths in html */
async function beforeAdd() {
  const fileName = "dist/index.html";

  fs.readFile(fileName, "utf8", function (err, text) {
    if (err) {
      return console.log(err);
    }

    var result = text.replaceAll("=/assets/", "=/donut-stones/assets/");
    fs.writeFile(fileName, text, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
}

module.exports = beforeAdd;
