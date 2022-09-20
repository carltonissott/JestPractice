const capitalize = require('./capitalize')

test ("capitalizes first letter of string", ()=>{
    expect(capitalize("caRlton")).toMatch("Carlton")
})