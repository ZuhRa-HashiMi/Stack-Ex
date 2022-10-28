// Optionally: start with your code from LinkedList challenge.


class Stack {
  constructor() {
    this.item = []
    this.count =0
  }
  push(number) {
    // your code here
    this.item[this.count] = number
    this.count +=1
    return this.count - 1
  }
  
  pop() {
    // your code here
    if (this.count == 0) return undefined
    let deleteItem = this.item[this.count - 1]
    this.count -= 1
    return deleteItem
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
