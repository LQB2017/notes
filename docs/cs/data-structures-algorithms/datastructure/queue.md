# 队列

## 定义
队列是一种线性数据结构，遵循先进先出（FIFO，First In First Out）的原则。只能在一端（队尾）进行插入操作，在另一端（队头）进行删除操作。

## 特点
1. 先进先出：最先入队的元素最先出队
2. 操作受限：只能在队尾插入，在队头删除
3. 可以用数组或链表实现
4. 没有随机访问的能力

## 基本操作
1. 入队（enqueue）：将元素添加到队尾，时间复杂度O(1)
2. 出队（dequeue）：移除并返回队头元素，时间复杂度O(1)
3. 查看队头（peek/front）：返回队头元素但不移除，时间复杂度O(1)
4. 判空（isEmpty）：判断队列是否为空，时间复杂度O(1)

## 队列类型
1. 普通队列：基本的FIFO队列
2. 循环队列：首尾相连的队列，可以更有效地利用空间
3. 双端队列：可以在两端进行插入和删除操作
4. 优先队列：元素按优先级出队，而不是按照先进先出的顺序

## 应用场景
1. 任务调度：处理需要按照先来先服务原则的任务
2. 缓冲区管理：管理数据流的缓冲
3. 广度优先搜索：实现图的层次遍历
4. 打印机队列：管理打印任务
5. 消息队列：实现异步处理

## 代码示例
```java
// 使用数组实现队列
class ArrayQueue {
    private int[] array;
    private int front;
    private int rear;
    private int capacity;
    private int size;
    
    public ArrayQueue(int capacity) {
        this.capacity = capacity;
        array = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    // 入队
    public void enqueue(int value) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        array[rear] = value;
        size++;
    }
    
    // 出队
    public int dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        int value = array[front];
        front = (front + 1) % capacity;
        size--;
        return value;
    }
    
    // 查看队头元素
    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return array[front];
    }
    
    // 判断队列是否为空
    public boolean isEmpty() {
        return size == 0;
    }
    
    // 判断队列是否已满
    public boolean isFull() {
        return size == capacity;
    }
}

// 使用链表实现队列
class LinkedQueue {
    private class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
        }
    }
    
    private Node front;
    private Node rear;
    
    // 入队
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (isEmpty()) {
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }
    
    // 出队
    public int dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        int data = front.data;
        front = front.next;
        if (front == null) {
            rear = null;
        }
        return data;
    }
    
    // 查看队头元素
    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return front.data;
    }
    
    // 判断队列是否为空
    public boolean isEmpty() {
        return front == null;
    }
}
```

## 常见问题
1. 队列溢出：超出队列的容量限制
2. 假溢出：循环队列中的假溢出问题
3. 空间浪费：固定大小的数组实现可能造成空间浪费

## 优化方案
1. 使用循环队列避免假溢出
2. 使用链表实现避免固定大小限制
3. 使用双端队列增加灵活性
4. 使用优先队列处理优先级任务

## 相关算法
1. 广度优先搜索
2. 层次遍历
3. 滑动窗口
4. 任务调度

## 注意事项
1. 注意队列溢出和队空检查
2. 选择合适的实现方式
3. 考虑并发安全性
4. 注意内存管理