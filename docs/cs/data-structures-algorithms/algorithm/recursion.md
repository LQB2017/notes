# 递归算法

递归算法是一种通过函数调用自身来解决问题的方法。它将一个复杂的问题分解成相同形式的子问题，直到问题简单到可以直接求解。

## 基本概念

递归算法包含两个主要部分：
1. **基本情况**：不需要递归就能直接解决的简单情况
2. **递归情况**：通过调用自身来解决的情况

## 递归的特点

1. 问题可以分解为子问题
2. 子问题与原问题形式相同，只是规模更小
3. 存在基本情况（递归出口）

## 常见问题及实现

### 1. 阶乘计算

```java
public class Factorial {
    public static int factorial(int n) {
        // 基本情况
        if (n == 0 || n == 1) {
            return 1;
        }
        // 递归情况
        return n * factorial(n - 1);
    }
}
```

### 2. 斐波那契数列

```java
public class Fibonacci {
    public static int fibonacci(int n) {
        // 基本情况
        if (n <= 1) {
            return n;
        }
        // 递归情况
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

### 3. 二叉树遍历

```java
public class BinaryTreeTraversal {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }
    
    // 前序遍历
    public void preorder(TreeNode root) {
        if (root == null) return;
        
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }
    
    // 中序遍历
    public void inorder(TreeNode root) {
        if (root == null) return;
        
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
    
    // 后序遍历
    public void postorder(TreeNode root) {
        if (root == null) return;
        
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val + " ");
    }
}
```

### 4. 汉诺塔问题

```java
public class HanoiTower {
    public static void hanoi(int n, char from, char auxiliary, char to) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + from + " to " + to);
            return;
        }
        
        hanoi(n - 1, from, to, auxiliary);
        System.out.println("Move disk " + n + " from " + from + " to " + to);
        hanoi(n - 1, auxiliary, from, to);
    }
}
```

## 递归的优化

1. **尾递归优化**：
   - 将递归调用作为函数的最后一个操作
   - 可以被编译器优化为循环

2. **记忆化递归**：
   - 存储已计算过的结果
   - 避免重复计算

```java
public class OptimizedFibonacci {
    private static Map<Integer, Integer> memo = new HashMap<>();
    
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        int result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.put(n, result);
        return result;
    }
}
```

## 应用场景

1. **数学计算**：
   - 阶乘
   - 幂运算
   - 组合数计算

2. **数据结构操作**：
   - 树的遍历
   - 图的深度优先搜索
   - 链表操作

3. **问题求解**：
   - 汉诺塔
   - 八皇后
   - 迷宫问题

4. **算法设计**：
   - 分治算法
   - 回溯算法
   - 动态规划

## 递归的优缺点

### 优点
1. 代码简洁清晰
2. 问题解决思路自然
3. 适合树形结构问题

### 缺点
1. 空间开销大（调用栈）
2. 可能重复计算
3. 栈溢出风险

## 实践建议

1. **递归设计**：
   - 明确基本情况
   - 确保递归会终止
   - 保证子问题规模减小

2. **性能优化**：
   - 考虑使用尾递归
   - 使用记忆化技术
   - 必要时改用迭代

3. **调试技巧**：
   - 打印递归层级
   - 验证基本情况
   - 跟踪递归过程