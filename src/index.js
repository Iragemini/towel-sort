
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    
    const result =  matrix.reduce((res, elem, index) => {
        if(index % 2 === 1){
            elem.reverse().forEach((item) => {
                res.push(item)
            })
        } else {
            elem.forEach((item) => {
                res.push(item)
            })
        }    
        return res
      }, [])
        
      return result;
}
