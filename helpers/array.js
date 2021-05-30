class ArrayHelper{
    static equals(array1,array2){
        if(array1.length !== array2.length) return false
        else {
            for(let i=0; i< array1.length; i++){
                if(array2.indexOf(array1[i]) === -1){
                    return false
                }
            }
        }
        return true
    }
}

export default ArrayHelper