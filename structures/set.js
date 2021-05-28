/**
 * SET
 */

/**
 * A set is an abstract data type that can store unique values, 
 * without any particular order.
 */

/**
 * The functions associated with stack are:
 * 1.empty() 
 * 2.size() 
 * 3.add(item) 
 * 4.delete(item) 
 * 5.full()
 * 6.union()
 * 7.intersection()
 * 8.difference()
 * 9.subset()
 */

/**
 * 
 * @param {Array} elements.
 * Array of elements to be added to the set. 
 * @param {Number} MAX 
 * Maximum size of the set.
 */

function Set(elements = new Array(),MAX = 100){
    this.MAX = MAX
    this.elements = elements.reduce( ( accumulator, entry,index = 0) =>{
        if( accumulator.indexOf(entry) === -1){
            let indexPointer =  index;
            if(indexPointer >= MAX){
                console.error('Maximum size exceeded!.')
                return accumulator;
            }
            accumulator.push(entry)
            indexPointer ++
        }
        return accumulator;
    },[])
    /**
     * @return {Boolean} empty.
     * returns if the set is empty or not.
     */
    this.empty = function(){
        return this.elements.length >=0
    }
    /**
     * @return {Number} size.
     * returns the size of the set.
     */
    this.size = function(){
        return this.elements.length
    }
    /**
     * 
     * @returns {Boolean} true if the set reached maximum capacity.
     */
    this.full = function(){
        return this.size() >= this.MAX
    }
    /**
     * @return {Any} item.
     * returns the added item.
     */
    this.add = function(item){
        if(this.full()){
            console.error('Maximum size exceeded!.')
            return this.elements
        }
        if(this.has(item)) {
            this.elements.push(item)
            return item
        }
        else return item
    }
    /**
     * @param {Any} item
     * The element to be checked if it already exists.
     * @return {Boolean} has item.
     * returns whether or not the set contains the item.
     */
    this.has = function(item){
        return  this.elements.indexOf(item) == -1
    }
    /**
     * @param {Set} set
     * The set to perform union operation with current set.
     * @return {Array} 
     * returns union of sets
     */
    this.union = function(set){
        let unionSet = new Set(set.elements.concat(this.elements))
        return unionSet.elements
    }
    /**
     * @param {Set} set
     * Set to perform intersection operation with current set.
     * @return {Array}
     * Intersection of sets.
     */
    this.intersection = function(set){
        let setToLoop = [] , setToPeek = []
        /**
         * Loop through the array which is shorter
         */
        set.elements.length >= this.size() 
        ? (setToLoop = this.elements , setToPeek = set.elements ) 
        : (setToLoop = set.elements, setToPeek = this.elements)
        return setToLoop.reduce( (accumulator,setEntry) =>{
            /**
             * if the element exists on larger array,
             * this element exists on both sets.
             */
            if(setToPeek.indexOf(setEntry) !== -1){
                accumulator.push(setEntry)
            }
            return accumulator;
        },[])
    }
    /**
     * 
     * @param {Any} item to be removed.
     * @param {Boolean} mutate
     * whether or not to mutate set.
     * @param {Array} copy 
     * Keeps a copy of elements after performing delete 
     * operation on current set.
     * @returns {Any} removed item.
     * @returns {Array} if mutate is set to false, an array of remaining 
     * elements are returned.
     */
    this.delete = function(item,mutate=true,copy = [...this.elements]){
        if(!this.has(item)){
            if(mutate){
                this.elements.splice(this.elements.indexOf(item),1)
                return item;
            }
            else{
                copy.splice(this.elements.indexOf(item),1)
                return copy
            }
        }else return null
    }
    /**
     * 
     * @param {Set} set.
     * @return {Array} difference elements. 
     */
    this.difference = function(set){
        let intersection = this.intersection(set)
        let diff 
        for( let i=0; i<intersection.length; i++){
            diff = this.delete(intersection[i],false,diff)
        }
        return diff
    }
    this.subset = function(set){
        /**
         * If length is greater than current set,
         * there will be one extra item in the set passed in.
         * there for it cannot be a subset.
         */
        if(set.size() > this.size()){
            return false
        }
        let isSubset = true
        for( let i =0; i<set.size(); i++){
            if(this.has(set.elements[i])){
                isSubset = false
                break;
            }
        }
        return isSubset
    }
}
let set3 = new Set()
let set = new Set([1,2,3,4,3])
let set2 =  new Set([5,3,2,2])
// console.log(set)
// console.log(set.add(1))
// console.log(set.add(3))
// console.log(set.add(1))
// console.log(set.size())
// console.log(set)
console.log(set2.intersection(set))
console.log(set)
console.log(set2)

let dyArray = []
for (let i=0; i< 10; i++){
  dyArray.push(i)
}

let set4 = new Set(dyArray)
console.log(set4.difference(set2))
console.log('set 4',set4.full())
console.log('set 2',set2)
console.log(set.subset(set3))



