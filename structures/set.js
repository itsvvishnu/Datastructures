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
 * 4.delete() 
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
    this.elements = elements.reduce( ( accumulator, entry) =>{
        if( accumulator.indexOf(entry) === -1){
            accumulator.push(entry)
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
     * @return {Any} item.
     * returns the added item.
     */
    this.add = function(item){
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
}
let set3 = new Set()
let set = new Set([1,2,3,4,3])
let set2 =  new Set([5,3,2,2])
console.log(set)
console.log(set.add(1))
console.log(set.add(3))
console.log(set.add(1))
console.log(set.size())
console.log(set)
console.log(set.union(set2))
console.log(set)
console.log(set3)

