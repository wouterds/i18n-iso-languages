var library = require("./index");

var locales = [
  require("./langs/br.json"),
  require("./langs/cs.json"),
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/fr.json"),
  require("./langs/hu.json"),
  require("./langs/is.json"),
  require("./langs/lv.json"),
  require("./langs/lt.json"),
  require("./langs/sv.json"),
  require("./langs/pl.json"),
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
