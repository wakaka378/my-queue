class Queue {
  constructor() {
    this.queueList = []
  }
  /**
   * 入队
   * @param {*} el 
   */
  dequeue(el) {
    this.queueList.push(el)
  }

  /**
   * 出队
   * @returns 
   */
  enqueue() {
    return this.queueList.shift()
  }
  
  /**
   * 获取队列长度
   * @returns 队列长队
   */
  size() {
    return this.queueList.length
  }

  /**
   * 清空队列
   */
  clear() {
    this.queueList = []
  }

  /**
   * 判断队列是否为空
   * @returns 是否为空
   */
  isEmpty() {
    return this.queueList.length === 0
  }
}


const queue = new Queue()
queue.dequeue(1)
queue.dequeue(2)
queue.dequeue(false)

console.log(queue.enqueue(), queue.isEmpty())



