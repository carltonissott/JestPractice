function analyzeArray(array){


    let runningAverage = 0 
    array.forEach(element => {
        runningAverage = runningAverage + element
    });
    runningAverage = runningAverage/array.length

const average = runningAverage
const min = Math.min(...array)

const max = Math.max(...array)

const length = array.length

return {average,min,max,length}
}



module.exports = analyzeArray