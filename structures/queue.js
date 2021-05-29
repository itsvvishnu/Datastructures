/**
 * QUEUE
 */

/**
 * Queue is linear data structure, which models
 * real world queues by having two primary operations, namely
 * enqueue and dequeue.
 */

/**
 * 1. Enqueue - O(1)
 * 2. Dequeue - O(1)
 * 3. Peek - O(1)
 * 4. Contains - O(n)
 * 5. Remove - O(n)
 * 6. IsEmpty - O(1)
 */


class Queue{
    /**
     * @param {Number} _MAX maximum size of the queue.
     * @param {Array} _elements elements to enqueue.
     */
    constructor(_elements,_MAX){
        this.MAX = _MAX ?? 10
        this.head = this.tail = -1
        this.elements = {}
        this.initialize = _elements
    }
    static error(e = 'f'){
        switch(e){
            case 'f':console.error('Maximum queue size exceeded!')
            break;
            case 'e':console.error('Queue is empty!')
            break;
            default:console.log('An unknown error occured.!')
            break;
        }
        
    }
    set initialize(elements){
        if(elements.length == 0 ) return;
        this.head = 0
        this.tail = 0
        for( let i=0; i<elements.length; i++){
            if(this.size < this.MAX){
                this.enqueue(elements[i])
            }
            else{
                Queue.error()
                break;
            }
        }
    }
    set resetPointers(value){
        this.head = this.tail = value
    }
    get size(){
        return Object.keys(this.elements).length
    }
    get isEmpty(){
        return this.size == 0
    }
    get peek(){
        return this.elements[this.head]
    }
    enqueue(item){
        if(this.MAX == this.size) {
            Queue.error();
            return this.elements
        }
        if(this.head == -1 &&  this.tail == -1){
            this.resetPointers = 0
        }
        this.elements[this.tail] = item
        this.tail ++
        return this.elements
    }
    display(){
        let array = []
        for(let key in this.elements){
            array.push(this.elements[key])
        }
        return array
    }
    dequeue(){
        if(this.size == 0){
            Queue.error('e');
            this.resetPointers = -1
            return this.elements
        }
        delete this.elements[this.head]
        this.head ++
        if(this.head === this.tail){
            this.resetPointers = 0
        }
        return this.elements
    }
    contains(item){
        for(let key in this.elements){
            if(this.elements[key] === item){
                return true
            }
        }
        return false
    }
    remove(item){
        let itemIndex = null
        for(let key in this.elements){
            if(this.elements[key] === item ){
                itemIndex = key 
                break;
            }
        }
        if(itemIndex === this.head){
            this.dequeue()
        }

    }
}

let q = new Queue([1,3,42,52,3,3,323],5)
console.log(q)
console.log(q.display())
console.log(q.contains(3))
console.log(q.enqueue(5))
console.log(q.peek)
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log('enqueue',q.enqueue(5))
console.log('enqueue',q.enqueue(78))
console.log(q.display())
console.log(q.dequeue())
console.log(q.display())
console.log(q.dequeue())
console.log(q.display())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log('enqueue',q.enqueue(78))
console.log(q)




