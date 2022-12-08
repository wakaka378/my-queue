class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class MyQueue {
  constructor() {
    // 当前队列长度
    this.size = 0 
    // 头部指针
    this.head = null 
    // 尾部指针
    this.tail = null 
  }

  /**
   * 入队
   * @param {*} value 入队属性
   * @returns 
   */
  enqueue(value) {
    if (!value) return false

    // 创建节点
    const node = new Node(value)    

    // 判断队列是否为空
    if (this.isEmpty()) {
      // 队列为空 将节点元素添加到头部
      this.head = node
    } else {
      // 队列不为空 将队尾的 next 指向新元素
      const currentNode = this.tail  // 做一下缓存 避免影响到后面
      currentNode.next = node
    }

    // 设置新的队尾
    this.tail = node
    // 修改长度
    this.size++

    console.log('enqueue element', value)
  }

  /**
   * 出队 最先进入的最先出去
   * @returns 
   */
  dequeue(){
    // 判断是否为空
    if (this.isEmpty()) {
      return
    }

    const currentHead = this.head // 缓存head
    // 将头部指针指向下一个元素
    this.head = currentHead.next

    // 修改长度
    this.size--

    // 清空尾部
    this.tail = null

    return currentHead.element
  }

  /**
   * 清空队列
   */
  clear() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  /**
   * 获取队列长度
   * @returns queue size
   */
  getSize(){
    return this.size
  }

  /**
   * 队列是否为空
   * @returns 队列是否为空
   */
  isEmpty() {
    return this.size === 0 && this.head === null
  }

  /**
   * 打印队列
   * @returns 队列字符串
   */
  print() {
    let queueStr = ''
    if (!this.isEmpty()) { // 不为空

      let tempNode = this.head // 缓存 head  避免修改影响到队列

      // 循环头部
      while(tempNode) {
        // 获取 element
        queueStr += tempNode.element +( tempNode.next ? '--->' :'')

        // 修改 tempNode 进入下一次循环
        tempNode = tempNode.next
      }

    }
    return queueStr
  }
}


const testQueue = new MyQueue();
testQueue.enqueue('vue')
testQueue.enqueue('react')
// testQueue.enqueue('angular')
console.log(testQueue.dequeue(), '---dequeue1')
console.log(testQueue.dequeue(), '---dequeue2')
// console.log(testQueue.clear(), '---clear');
console.log(testQueue.dequeue(), '---dequeue3')
testQueue.enqueue('angular')
console.log(testQueue.dequeue(), '---dequeue4')

// console.log(testQueue.getSize(), '---getSize')
// console.log(testQueue.isEmpty(), '---isEmpty')
// console.log(testQueue.print(), '---print')
