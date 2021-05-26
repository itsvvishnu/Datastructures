/**  
 * ARRAY  
 */

/**
 *Arrays are a collection of individual values separated by a comma each with its own index/location. 
 *This collection could be anything: numbers, objects, more arrays, etc. 
 *
 *In an array, the values, called elements, are stored in contiguous memory locations. 
 */

/**
 * The basic functions associated with array are:
 * 
 * 1.Traverse 
 * 2.Insertion
 * 3.Deletion
 * 4.Search 
 * 5.Update
 */

function Array(){
    this.elements = {}
    this.size = 0

    this.traverse = function(){
        /**traverse description.
         * @return {Any} return all the array elements.
         */
        if(this.size == 0) return null
        return(
            Object.keys(this.elements).map(function(key){
                this.size++
                return this.elements[key]
            }.bind(this))
        )
    }
    this.push = function(...items){
        /**
         * push description.
         * @param {Any} items 
         * inserts items to the array.
         * @return {Any} all items.
         */
        for(let i=0; i<items.length;i++){
            this.size++
            this.elements[i] = items[i]
        }
        return this.elements
    }
    this.delete = function(index){
        /**
         * delete description.
         * Deletes an element at the given index.
         * @param {Number} index.
         * @return {Any} removed item
         */
        
        if(index > this.size - 1 || index < 0 ) return null
        let item = this.elements[index]
        delete this.elements[index];
        this.shift(index)
        return item
    }
    this.shift = function(index){
        for(let i=index; i<this.size; i++){
            this.elements[i] = this.elements[i+1]
        }
        delete this.elements[this.size -1 ]
        this.size --
    }
}

// const array = new Array();
// console.log(array.traverse());
// console.log(array.push(1,2,3,4));
// console.log(array.delete(3));
// console.log(array)


