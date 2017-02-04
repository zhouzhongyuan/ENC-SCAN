node_xj = require("xls-to-json");
node_xj({
    // input: "百货_3l.xls",  // input xls
    // input: "生鲜_3l.xls",  // input xls
    input: "其他_3l.xls",  // input xls
    output: "output.json", // output json
    sheet: "Sheet1"  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});