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

export default function Array(){
    this.elements = {}
    this.size = 0

    /*
     * traverse description.
     * @return {Any} return all the array elements.
     */
    this.traverse = function(){
        if(this.size == 0) return null
        return(
            Object.keys(this.elements).map(function(key){
                return this.elements[key]
            }.bind(this))
        )
    }
    /**
     * push description.
     * @param {Any} items 
     * inserts items to the array.
     * @return {Any} all items.
     */
    this.push = function(...items){
        for(let i=0; i<items.length;i++){
            this.size++
            this.elements[i] = items[i]
        }
        return this.elements
    }
    /**
     * delete description.
     * @param {Number} index
     * Deletes an element at the given index.
     * @return {Any} removed item
     */
    this.delete = function(index){
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


