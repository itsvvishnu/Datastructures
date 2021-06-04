class Node{
    constructor(_element){
        this.element = _element
        this.next = null
    }
}

class LinkedList{
    constructor(..._elements){
        this.head = null
        this.length = 0
        this.initalize = _elements
    }
    set initalize(elements){
        if(!elements) return null
        for( let i=0; i<elements.length; i++){
            this.length ++
            this.add(elements[i])
        }
        return this.head
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
        return node
    }
    delete(element){
        let currentNode = this.head
        if(element == this.head.element){
            this.head = this.head.next
            this.length --
        }
        while(currentNode.next){
            let prevNode = currentNode
            currentNode = currentNode.next
            if(currentNode.element == element){
                prevNode.next = currentNode.next
                this.length --
            }
        }
        return element
    }
    search(element){
        let currentNode = this.head
        if(!currentNode) return false
        while(currentNode.next){
            if(currentNode.element === element){
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }
    update(element,value){
        let currentNode = this.head
        if(!currentNode) return
        while(currentNode.next){
            if(currentNode.element == element){
                currentNode.element = value
                return currentNode
            }
        }
    }
    merge(list){
        let currentNode = this.head
        if(this.head == null){
            this.head = list
            return list
        }
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = list.head
        return this.head
    }
}

export { LinkedList, Node }

let list = new LinkedList();
list.add(67)
list.add(6)
list.add(623)
list.add(6424)
list.add(62256)
list.add(567)
list.delete(0)
console.log(list.search(6))
console.log(list)
console.log(list.update(67,8))
let list1 = new LinkedList(1,2,3)
let list2 = new LinkedList(4,5)
list1.merge(list2)
console.log(list1)

