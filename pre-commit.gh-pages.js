/* Find and replace asset paths in html */

async function beforeAdd() {
  const fs = require("fs");
  const fileName = "dist/index.html";

  /* fs.readFile(fileName, "utf8", function (err, text) {
    if (err) {
      return console.log(err);
    }

    var result = text.replaceAll("/assets/", "/donut-stones/assets/");
    fs.writeFile(fileName, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  }); */
}

module.exports = beforeAdd;
