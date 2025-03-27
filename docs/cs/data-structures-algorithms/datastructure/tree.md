# 树

## 定义
树是一种非线性数据结构，由节点和边组成，每个节点可以有多个子节点，但只能有一个父节点（根节点除外）。树形结构模拟了具有层次关系的数据集合。

## 特点
1. 层次结构：节点之间具有层次关系，形成父子关系
2. 非线性：一个节点可以有多个后继节点
3. 递归性：每个节点的子树也是一棵树
4. 无环：节点之间不存在环路

## 基本概念
1. 根节点：树的顶层节点，没有父节点
2. 叶节点：没有子节点的节点
3. 父节点：有子节点的节点
4. 子节点：有父节点的节点
5. 兄弟节点：具有相同父节点的节点
6. 节点的度：节点的子节点个数
7. 树的深度：从根节点到最远叶节点的路径长度

## 树的类型
1. 二叉树：每个节点最多有两个子节点
2. 二叉搜索树：左子树的值小于父节点，右子树的值大于父节点
3. 平衡二叉树：任意节点的左右子树高度差不超过1
4. B树：多路搜索树，常用于数据库和文件系统
5. 红黑树：自平衡的二叉搜索树
6. 字典树：用于高效地存储和检索字符串

## 基本操作
1. 插入节点：在树中插入新节点
2. 删除节点：从树中删除指定节点
3. 查找节点：在树中查找指定值的节点
4. 遍历：按特定顺序访问树中的所有节点
   - 前序遍历：根-左-右
   - 中序遍历：左-根-右
   - 后序遍历：左-右-根
   - 层序遍历：按层访问节点

## 代码示例
```java
// 二叉树节点定义
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}

// 二叉树操作
class BinaryTree {
    TreeNode root;
    
    // 插入节点
    public void insert(int val) {
        root = insertRec(root, val);
    }
    
    private TreeNode insertRec(TreeNode node, int val) {
        if (node == null) {
            return new TreeNode(val);
        }
        
        if (val < node.val) {
            node.left = insertRec(node.left, val);
        } else if (val > node.val) {
            node.right = insertRec(node.right, val);
        }
        
        return node;
    }
    
    // 中序遍历
    public void inorderTraversal(TreeNode node) {
        if (node != null) {
            inorderTraversal(node.left);
            System.out.print(node.val + " ");
            inorderTraversal(node.right);
        }
    }
}
```

## 应用场景
1. 文件系统：目录结构
2. 数据库索引：B树和B+树
3. 编译器：语法分析树
4. 搜索引擎：字典树用于前缀搜索
5. 路由算法：最短路径树

## 常见问题
1. 树的平衡性：不平衡可能导致性能下降
2. 树的遍历：选择合适的遍历方式
3. 节点的删除：需要保持树的结构特性

## 优化方案
1. 使用平衡树结构（如AVL树、红黑树）
2. 选择合适的树类型满足具体需求
3. 使用迭代替代递归减少栈空间使用

## 注意事项
1. 选择合适的树类型
2. 注意树的平衡性
3. 处理好边界情况
4. 考虑空间和时间效率