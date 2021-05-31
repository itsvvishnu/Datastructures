import Array from '@s/array'
import ArrayHelper from '@h/array'

let array = new Array()
//Add elements to array
let pushed = array.push(1,2,6,89)

test('Test for pushed items', () => {
    expect(pushed).toEqual({0:1,1:2,2:6,3:89});
});

test('Test for array size',() => {
    expect(array.size).toBe(4)
});

test('Test for displaying array elements', () => {
    expect(array.traverse()).toEqual([1,2,6,89])
})

test('Test for deletion', () => {
    expect(array.delete(1)).toBe(2)
})

test('Test for elements after deletion', () => {
    expect(array.elements).toEqual({0:1,1:6,2:89})
})


