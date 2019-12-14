let $ = require("jquery");
let fs = require("fs");
let filename = "links";
let sno = 0;

$("#add-to-list").on("click", () => {
  let link = $("#Link").val();

  fs.appendFile("links", "127.0.0.1" + " " + link + "\n");

  addEntry(link);
});

function addEntry(link) {
  if (link) {
    sno++;
    let updateString = "<tr><td>" + sno + "</td><td>" + link + "</td></tr>";
    $("#link-table").append(updateString);
  }
}

function loadAndDisplayLinks() {
  //Check if file exists
  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, "utf8").split("\n");

    data.forEach(index => {
      addEntry(link);
    });
  } else {
    console.log("File Doesn't Exist. Creating new file.");
    fs.writeFile(filename, "", err => {
      if (err) console.log(err);
    });
  }
}

loadAndDisplayLinks();
