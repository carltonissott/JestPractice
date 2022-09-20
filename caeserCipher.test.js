const caeserSipher = require("./caesarCipher")

test ("Caeser Sipher test",()=>{
    expect (caeserSipher("Defend the east wall xyZ z", 1)).toMatch("Efgfoe uif fbtu xbmm yzA a")
})