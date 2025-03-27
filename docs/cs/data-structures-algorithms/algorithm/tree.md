# 树算法

树是一种非线性的数据结构，由节点和边组成，没有环路。树算法包括对树进行的各种操作和处理方法。

## 基本概念

### 树的类型
1. 二叉树：每个节点最多有两个子节点
2. 二叉搜索树：左子树的所有节点值小于根节点，右子树的所有节点值大于根节点
3. 平衡树：任意节点的左右子树高度差不超过1
4. 完全二叉树：除最后一层外，其他层的节点数达到最大值，且最后一层的节点靠左排列

### 基本结构

```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}
```

## 基本操作

### 1. 树的遍历

```java
public class TreeTraversal {
    // 前序遍历
    public static void preorder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }
    
    // 中序遍历
    public static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
    
    // 后序遍历
    public static void postorder(TreeNode root) {
        if (root == null) return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val + " ");
    }
    
    // 层序遍历
    public static void levelOrder(TreeNode root) {
        if (root == null) return;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            System.out.print(node.val + " ");
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
}
```

### 2. 树的构建

```java
public class TreeConstruction {
    // 从前序和中序遍历构建二叉树
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        return buildTreeHelper(preorder, 0, preorder.length - 1,
                             inorder, 0, inorder.length - 1);
    }
    
    private static TreeNode buildTreeHelper(int[] preorder, int preStart, int preEnd,
                                          int[] inorder, int inStart, int inEnd) {
        if (preStart > preEnd) return null;
        
        TreeNode root = new TreeNode(preorder[preStart]);
        int rootIndex = 0;
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == root.val) {
                rootIndex = i;
                break;
            }
        }
        
        int leftSubtreeSize = rootIndex - inStart;
        
        root.left = buildTreeHelper(preorder, preStart + 1, preStart + leftSubtreeSize,
                                   inorder, inStart, rootIndex - 1);
        root.right = buildTreeHelper(preorder, preStart + leftSubtreeSize + 1, preEnd,
                                    inorder, rootIndex + 1, inEnd);
        
        return root;
    }
}
```

### 3. 二叉搜索树操作

```java
public class BSTOperations {
    // 插入节点
    public static TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        
        if (val < root.val) {
            root.left = insert(root.left, val);
        } else if (val > root.val) {
            root.right = insert(root.right, val);
        }
        
        return root;
    }
    
    // 查找节点
    public static TreeNode search(TreeNode root, int val) {
        if (root == null || root.val == val) return root;
        
        if (val < root.val) {
            return search(root.left, val);
        } else {
            return search(root.right, val);
        }
    }
    
    // 删除节点
    public static TreeNode delete(TreeNode root, int val) {
        if (root == null) return null;
        
        if (val < root.val) {
            root.left = delete(root.left, val);
        } else if (val > root.val) {
            root.right = delete(root.right, val);
        } else {
            // 叶子节点
            if (root.left == null && root.right == null) {
                return null;
            }
            // 只有一个子节点
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            
            // 有两个子节点
            TreeNode minNode = findMin(root.right);
            root.val = minNode.val;
            root.right = delete(root.right, minNode.val);
        }
        return root;
    }
    
    private static TreeNode findMin(TreeNode root) {
        while (root.left != null) {
            root = root.left;
        }
        return root;
    }
}
```

## 高级操作

### 1. 树的平衡

```java
public class AVLTree {
    static class Node {
        int val;
        Node left, right;
        int height;
        
        Node(int val) {
            this.val = val;
            height = 1;
        }
    }
    
    private static int height(Node node) {
        return node == null ? 0 : node.height;
    }
    
    private static int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    private static Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        
        return x;
    }
    
    private static Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        
        return y;
    }
}
```

## 应用场景

1. **数据存储**：
   - 文件系统
   - 数据库索引

2. **编译器**：
   - 语法分析树
   - 表达式树

3. **算法应用**：
   - 决策树
   - 游戏AI

## 性能优化

1. **时间优化**：
   - 选择合适的树结构
   - 保持树的平衡
   - 优化遍历方式

2. **空间优化**：
   - 合理设计节点结构
   - 避免冗余存储

## 实践建议

1. **树的选择**：
   - 根据需求选择合适的树结构
   - 考虑数据特点和操作特点

2. **实现注意**：
   - 处理边界情况
   - 注意空指针
   - 维护树的特性

3. **调试技巧**：
   - 可视化树结构
   - 单步调试
   - 验证树的性质