const path = require("path");

//console.log(path.dirname('C:/Users/GAURAV/backend/osmodules/pathmodule/path.js'));
//console.log(path.extname('C:/Users/GAURAV/backend/osmodules/pathmodule/path.js'));
//console.log(path.basename('C:/Users/GAURAV/backend/osmodules/pathmodule/path.js'));
//console.log(path.parse('C:/Users/GAURAV/backend/osmodules/pathmodule/path.js'));
const myPath = path.parse('C:/Users/GAURAV/backend/osmodules/pathmodule/path.js');
console.log(myPath.name);