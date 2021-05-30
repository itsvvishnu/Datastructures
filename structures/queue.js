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


export class Queue{
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
    static middleIndex(size,head){
        if(size%2 ==0){
            return ( size/2 ) + head - 1
        }
        else{
            return ( ( size+1 ) / 2 ) - 1 + head
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
        return Object.assign({},this.elements)
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
        if(this.isEmpty) return
        let itemIndex = null
        let middle = Queue.middleIndex(this.size,this.head)
        for(let key in this.elements){
            if(this.elements[key] === item ){
                itemIndex = key 
                break;
            }
        }
        console.log(itemIndex)
        if(itemIndex === this.head){
            this.dequeue()
        }
        if(itemIndex == this.tail -1){
            delete this.elements[itemIndex]
            this.tail --
        }
        if(itemIndex <= middle && itemIndex!=null){
            //shift head
            this.shiftHead(itemIndex)
        }
        else if(itemIndex > middle){
            //shift tail
            this.shiftTail(itemIndex)
        }
        return item
    }
    shiftHead(index){
        for(let i = parseInt(index); i>= this.head; i--){
           this.elements[i] = this.elements[i - 1]
        }
        delete this.elements[this.head]
        this.head ++
    }
    shiftTail(index){
        for(let i=parseInt(index); i<this.size - 1; i++){
            this.elements[i] = this.elements[i + 1]
        }
        delete this.elements[this.size -1]
        this.tail --
    }
}
