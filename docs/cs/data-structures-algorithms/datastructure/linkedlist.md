# 链表

## 定义
链表是一种线性数据结构，由一系列节点组成，每个节点包含数据和指向下一个节点的指针。链表中的节点在内存中不是连续存储的，而是通过指针连接。

## 特点
1. 动态大小：链表可以根据需要动态增长或缩小
2. 非连续存储：节点在内存中不需要连续存储
3. 插入删除效率高：只需要修改指针，不需要移动其他元素
4. 随机访问效率低：必须从头节点开始遍历才能访问特定位置的节点

## 基本操作
1. 插入节点：在指定位置插入新节点，时间复杂度O(1)（不考虑查找时间）
2. 删除节点：删除指定位置的节点，时间复杂度O(1)（不考虑查找时间）
3. 查找节点：从头节点开始遍历查找，时间复杂度O(n)
4. 修改节点：修改指定位置节点的值，时间复杂度O(n)

## 链表类型
1. 单向链表：每个节点只有一个指向下一个节点的指针
2. 双向链表：每个节点有两个指针，分别指向前一个和后一个节点
3. 循环链表：最后一个节点指向第一个节点，形成一个环

## 应用场景
1. 需要频繁插入删除操作的场景
2. 数据量不确定，需要动态扩展的场景
3. 实现其他数据结构（如栈、队列等）
4. 内存管理中的空闲链表

## 代码示例
```java
// 定义链表节点
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
    }
}

// 链表操作
class LinkedList {
    ListNode head;
    
    // 在头部插入节点
    public void addFirst(int val) {
        ListNode newNode = new ListNode(val);
        newNode.next = head;
        head = newNode;
    }
    
    // 删除第一个值为val的节点
    public void delete(int val) {
        if (head == null) return;
        
        if (head.val == val) {
            head = head.next;
            return;
        }
        
        ListNode current = head;
        while (current.next != null && current.next.val != val) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
    
    // 打印链表
    public void print() {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
```

## 常见问题
1. 环检测：判断链表中是否存在环
2. 链表反转：将链表节点顺序反转
3. 中间节点：查找链表的中间节点
4. 合并链表：合并两个有序链表

## 优化方案
1. 使用双向链表优化反向查找
2. 使用快慢指针解决环检测和中间节点查找
3. 使用哨兵节点简化边界条件处理

## 注意事项
1. 注意空指针异常
2. 注意更新指针时的顺序
3. 注意边界条件的处理
4. 注意内存泄漏问题