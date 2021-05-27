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
 * @param {Array} elements 
 * @param {Number} MAX 
 * 
 */

function Set(elements = new Array(),MAX = 100){
    this.MAX = MAX
    this.elements = elements.reduce( ( accumulator, entry) =>{
        if( accumulator.indexOf(entry) === -1){
            accumulator.push(entry)
        }
        return accumulator;
    },[])
    this.empty = function(){
        /**
         * @return {Boolean} empty.
         * returns if the set is empty or not.
         */
        return this.elements.length >=0
    }
    this.size = function(){
        /**
         * @return {Number} size.
         * returns the size of the set.
         */
        return this.elements.length
    }
    this.add = function(item){
        /**
         * @return {Any} item.
         * returns the added item.
         */

        if(this.has(item)) {
            this.elements.push(item)
            return item
        }
        else return item
    }
    this.has = function(item){
        /**
         * @param {Any} item
         * @return {Boolean} has item.
         * returns whether or not the set contains the item.
         */

        return  this.elements.indexOf(item) == -1
    }
    this.union = function(set){
        /**
         * @param {Set} set.
         * @return {Array} 
         * returns union of sets
         */
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


