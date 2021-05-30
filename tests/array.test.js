import Array from '@s/array'
import ArrayHelper from '@h/array'

let array = new Array()
console.log(array)
console.log(ArrayHelper.equals([1,2],[2,1,0]))

test('adds 1 + 2 to equal 3', () => {
    expect(ArrayHelper.equals([], [])).toBe(true);
});
