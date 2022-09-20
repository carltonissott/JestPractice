const calculator = require("./calculator")

const fiveandtwo = new calculator(5,2)
test("5+2 = 7",  () =>{
    expect(fiveandtwo.add()).toEqual(7)
})

test("5*2 = 10",  () =>{
    expect(fiveandtwo.multiply()).toEqual(10)
})

test("5-2 = 3",  () =>{
    expect(fiveandtwo.subtract()).toEqual(3)
})

test("5/2 = 2.5",  () =>{
    expect(fiveandtwo.divide()).toEqual(2.5)
})