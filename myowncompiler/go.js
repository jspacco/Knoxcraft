var pegjava = require("pegjs-java");
var fs = require('fs');

//console.log("Hello");

try {
    var code = fs.readFileSync('Test.java', 'utf8');
    //console.log(code);
} catch(e) {
    console.log('Error:', e.stack);
}

var result = pegjava.parse(code);
console.log(result);
//console.log(typeof result);
//console.log(result['CompilationUnit']);
//console.log(result.node);
console.log(typeof result.types[0].bodyDeclarations);
console.log(result.types[0].bodyDeclarations);
console.log(result.types[0].bodyDeclarations[0].body.statements);
//console.log(result);
