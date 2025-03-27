# 栈

## 定义
栈是一种线性数据结构，遵循后进先出（LIFO，Last In First Out）的原则。只能在一端（栈顶）进行插入和删除操作。

## 特点
1. 后进先出：最后入栈的元素最先出栈
2. 操作受限：只能在栈顶进行插入和删除操作
3. 可以用数组或链表实现
4. 没有随机访问的能力

## 基本操作
1. 入栈（push）：将元素添加到栈顶，时间复杂度O(1)
2. 出栈（pop）：移除并返回栈顶元素，时间复杂度O(1)
3. 查看栈顶（peek/top）：返回栈顶元素但不移除，时间复杂度O(1)
4. 判空（isEmpty）：判断栈是否为空，时间复杂度O(1)

## 应用场景
1. 函数调用栈：管理函数的调用和返回
2. 表达式求值：处理中缀、后缀表达式
3. 括号匹配：检查括号是否匹配
4. 撤销操作：实现撤销功能
5. 深度优先搜索：实现递归算法

## 代码示例
```java
// 使用数组实现栈
class ArrayStack {
    private int[] array;
    private int top;
    private int capacity;
    
    public ArrayStack(int capacity) {
        this.capacity = capacity;
        array = new int[capacity];
        top = -1;
    }
    
    // 入栈
    public void push(int value) {
        if (isFull()) {
            throw new IllegalStateException("Stack is full");
        }
        array[++top] = value;
    }
    
    // 出栈
    public int pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return array[top--];
    }
    
    // 查看栈顶元素
    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return array[top];
    }
    
    // 判断栈是否为空
    public boolean isEmpty() {
        return top == -1;
    }
    
    // 判断栈是否已满
    public boolean isFull() {
        return top == capacity - 1;
    }
}

// 使用链表实现栈
class LinkedStack {
    private class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
        }
    }
    
    private Node top;
    
    // 入栈
    public void push(int data) {
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
    }
    
    // 出栈
    public int pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        int data = top.data;
        top = top.next;
        return data;
    }
    
    // 查看栈顶元素
    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return top.data;
    }
    
    // 判断栈是否为空
    public boolean isEmpty() {
        return top == null;
    }
}
```

## 常见问题
1. 栈溢出：超出栈的容量限制
2. 栈空间浪费：固定大小的数组实现可能造成空间浪费
3. 表达式求值：中缀转后缀表达式

## 优化方案
1. 使用动态数组实现可扩展栈
2. 使用链表实现避免固定大小限制
3. 使用双栈优化特定问题

## 相关算法
1. 表达式求值
2. 括号匹配
3. 深度优先搜索
4. 单调栈

## 注意事项
1. 注意栈溢出和栈空检查
2. 选择合适的实现方式
3. 考虑并发安全性
4. 注意内存管理