/**
 * STACK 
 */
   
/**
 * A stack is a linear data structure that stores items in a Last-In/First-Out (LIFO) 
 * or First-In/Last-Out (FILO) manner.
 * 
 * In stack, a new element is added at one end and an element is removed from that end only.
 * The insert and delete operations are often called push and pop.
 * 
 */

/**
 * The functions associated with stack are:
 * 1.empty() 
 * 2.size() 
 * 3.top() or peek() 
 * 4.push(item) 
 * 5.pop() 
 * 6.full()
 */



function Stack(MAX = 100) {
    // initial stack count and elements
    this.count = 0;
    this.elements = {}
    this.MAX = MAX
    /** 
     * @return {Boolean} whether the stack is empty.
     * Time Complexity : O(1).
     */
    this.empty = function(){
        return this.count <=0
    }
    /**
     * @return {Number} the size of the stack.
     * Time Complexity : O(1).
     */
    this.size = function(){
        return this.count
    }
    /** 
     * @return {Object} a reference to the top most element of the stack.
     * Time Complexity : O(1).
     */
    this.top = function(){
        return this.elements[this.count-1]
    }
    /** 
     * @param {Any} item
     * @return {Any} Adds the element ‘item’ at the top of the stack.
     * Time Complexity : O(1).
     */
    this.push = function(item){
        if(this.full()){
            console.error('Stack size exceeded.')
            return;
        }
        this.elements[this.count] = item
        this.count ++
        return item
    }
    /**
     * @return {Any} item
     * Deletes the top most element of the stack.
     * Time Complexity : O(1)
     */
    this.pop = function(){
        if (this.count <=0 ) return null;
        let item = this.elements[this.count - 1]
        delete this.elements[this.count - 1]
        this.count --
        return item
    }
    /**
     * @return {Boolean} full
     * Checks if the stack is full or not
     */
    this.full = function(){
        return (this.count == this.MAX)
    }
} 

// let stack = new Stack();
// stack.push(12);
// stack.push(123);
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.empty())
// console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack)
// stack.push(12233);
// console.log(stack)
// console.log(stack.size())
// console.log(stack.empty())

// for(let i=0; i< 13; i++){
//     console.log(stack.push(i))
//     console.log(stack)
//     console.log(stack.full())
// }


