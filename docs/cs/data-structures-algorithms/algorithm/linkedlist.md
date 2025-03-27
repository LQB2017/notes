# 链表算法

链表是一种线性数据结构，其中的每个元素都是一个节点，包含数据和指向下一个节点的指针。链表算法包括对链表进行的各种操作和处理方法。

## 基本概念

### 链表的类型
1. 单向链表：每个节点只有一个指向下一个节点的指针
2. 双向链表：每个节点有两个指针，分别指向前一个和后一个节点
3. 循环链表：最后一个节点指向第一个节点

### 基本结构

```java
// 单向链表节点
public class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
    }
}

// 双向链表节点
public class DoublyListNode {
    int val;
    DoublyListNode prev;
    DoublyListNode next;
    
    DoublyListNode(int val) {
        this.val = val;
    }
}
```

## 基本操作

### 1. 链表遍历

```java
public class LinkedListTraversal {
    public static void traverse(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
    }
    
    public static void recursiveTraverse(ListNode head) {
        if (head == null) return;
        System.out.print(head.val + " ");
        recursiveTraverse(head.next);
    }
}
```

### 2. 插入节点

```java
public class LinkedListInsertion {
    // 在头部插入
    public static ListNode insertAtHead(ListNode head, int val) {
        ListNode newNode = new ListNode(val);
        newNode.next = head;
        return newNode;
    }
    
    // 在尾部插入
    public static ListNode insertAtTail(ListNode head, int val) {
        if (head == null) return new ListNode(val);
        
        ListNode current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new ListNode(val);
        return head;
    }
    
    // 在指定位置插入
    public static ListNode insertAtPosition(ListNode head, int val, int position) {
        if (position == 0) return insertAtHead(head, val);
        
        ListNode current = head;
        for (int i = 0; i < position - 1 && current != null; i++) {
            current = current.next;
        }
        
        if (current == null) return head;
        
        ListNode newNode = new ListNode(val);
        newNode.next = current.next;
        current.next = newNode;
        return head;
    }
}
```

### 3. 删除节点

```java
public class LinkedListDeletion {
    // 删除头节点
    public static ListNode deleteHead(ListNode head) {
        if (head == null) return null;
        return head.next;
    }
    
    // 删除尾节点
    public static ListNode deleteTail(ListNode head) {
        if (head == null || head.next == null) return null;
        
        ListNode current = head;
        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null;
        return head;
    }
    
    // 删除指定值的节点
    public static ListNode deleteValue(ListNode head, int val) {
        if (head == null) return null;
        if (head.val == val) return head.next;
        
        ListNode current = head;
        while (current.next != null && current.next.val != val) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
        }
        return head;
    }
}
```

## 常见算法

### 1. 反转链表

```java
public class LinkedListReverse {
    // 迭代方式
    public static ListNode reverse(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }
    
    // 递归方式
    public static ListNode reverseRecursive(ListNode head) {
        if (head == null || head.next == null) return head;
        
        ListNode rest = reverseRecursive(head.next);
        head.next.next = head;
        head.next = null;
        return rest;
    }
}
```

### 2. 检测环

```java
public class LinkedListCycle {
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
    
    public static ListNode findCycleStart(ListNode head) {
        if (head == null || head.next == null) return null;
        
        ListNode slow = head;
        ListNode fast = head;
        boolean hasCycle = false;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        
        if (!hasCycle) return null;
        
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}
```

## 应用场景

1. **内存管理**：
   - 动态内存分配
   - 垃圾回收

2. **系统设计**：
   - LRU缓存
   - 文件系统

3. **算法问题**：
   - 多项式运算
   - 大数运算

## 性能优化

1. **时间优化**：
   - 使用快慢指针
   - 使用哨兵节点
   - 避免重复遍历

2. **空间优化**：
   - 原地算法
   - 递归转迭代

## 实践建议

1. **代码实现**：
   - 处理边界情况
   - 注意空指针
   - 保持代码简洁

2. **调试技巧**：
   - 画图分析
   - 单步调试
   - 打印中间状态

3. **测试验证**：
   - 边界测试
   - 特殊情况
   - 性能测试