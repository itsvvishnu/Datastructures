import { LinkedList,Node } from '@s/linkedList'

let linked_list   = new LinkedList()

test('Test for add',() => {
    expect(linked_list.add(3) instanceof Node).toBe(true)
    expect(linked_list.add(3).next).toEqual(null)
    expect(linked_list.add(3).element).toEqual(3)
})

test('Test for merge.',() => {
    let list1 = new LinkedList(1,2,3)
    let list2 = new LinkedList(4,5)
    list1.merge(list2)
    
})