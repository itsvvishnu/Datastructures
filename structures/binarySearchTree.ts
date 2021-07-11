class BSTNode {
    left:number | null
    right:number | null
    data:number  | null
    constructor(
        _data:number | null,
        _left:number | null = null,
        _right:number | null = null
    ){
        this.data = _data
        this.left = _left 
        this.right = _right
    }
}

class BST{
    root:BSTNode | null
    constructor(...data:number[]){
        this.root = null
        this.initialize = data
    }
    private set initialize(data:number[]){
        data.forEach(element => {
            this.insert(element)
        })
    }
    public insert(element:number){
        if(this.root == null){
            this.root = new BSTNode(element)
        }else{
            console.log(element)
        }
    }
}


let bst = new BST(1,2,3,4,8)

console.log(bst)