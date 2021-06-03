import { LinkedList,Node } from '@s/linkedList'

let linked_list   = new LinkedList()

test('Test for add',() => {
    expect(linked_list.add(3) instanceof Node).toBe(true)
})