class Node{
    constructor(_element){
        this.element = _element
        this.next = null
    }
}

export default class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    get size(){
        return this.length
    }
    add(element){
        let node = new Node(element)
        if(this.head == null ){
            this.head = node
            this.length ++ 
        }else{
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
            this.length++
        }
    }
}

let list = new LinkedList();
list.add(67)
list.add(6)
list.add(567)
console.log(list)


