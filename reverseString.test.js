const reverseString = require('./reverseString')


test("Return string reverse", ()=>{
    expect(reverseString("hello")).toMatch("olleh")
})