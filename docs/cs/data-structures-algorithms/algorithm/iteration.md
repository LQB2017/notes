# 迭代算法

迭代算法是一种通过重复执行特定操作来解决问题的方法。与递归不同，迭代使用循环结构来重复执行操作，直到达到特定条件。

## 基本概念

迭代算法的基本要素：
1. **初始状态**：迭代开始的起点
2. **迭代条件**：继续迭代的条件
3. **迭代体**：每次迭代执行的操作
4. **终止条件**：迭代结束的条件

## 常见问题及实现

### 1. 斐波那契数列（迭代实现）

```java
public class FibonacciIterative {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        
        int prev = 0, curr = 1;
        for (int i = 2; i <= n; i++) {
            int next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
    }
}
```

### 2. 二分查找（迭代实现）

```java
public class BinarySearchIterative {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}
```

### 3. 树的层序遍历

```java
public class LevelOrderTraversal {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    }
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.val);
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            
            result.add(currentLevel);
        }
        
        return result;
    }
}
```

### 4. 最大公约数（迭代实现）

```java
public class GCDIterative {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
```

## 迭代与递归的比较

### 迭代的优点
1. 空间效率高（不需要调用栈）
2. 执行速度快
3. 没有栈溢出风险

### 迭代的缺点
1. 代码可能较复杂
2. 某些问题不易用迭代实现
3. 状态管理可能复杂

## 应用场景

1. **数值计算**：
   - 数列计算
   - 近似值计算
   - 方程求解

2. **数据结构操作**：
   - 链表遍历
   - 树的层序遍历
   - 图的广度优先搜索

3. **搜索和排序**：
   - 二分查找
   - 冒泡排序
   - 选择排序

4. **优化算法**：
   - 梯度下降
   - 牛顿迭代法
   - 二分法求根

## 实践建议

1. **算法设计**：
   - 明确迭代条件
   - 确保终止条件可达
   - 注意边界情况

2. **性能优化**：
   - 减少不必要的计算
   - 优化循环条件
   - 合理使用变量

3. **代码实现**：
   - 使用清晰的变量命名
   - 添加适当的注释
   - 处理异常情况

4. **调试技巧**：
   - 打印中间状态
   - 验证循环条件
   - 检查边界情况