# 并查集

## 定义
并查集（Disjoint Set）是一种树形的数据结构，用于处理一些不交集的合并及查询问题。每个集合用一棵树来表示，树根就是集合的代表元素。

## 特点
1. 快速合并：可以快速合并两个集合
2. 快速查找：可以快速判断两个元素是否属于同一集合
3. 动态维护：支持动态添加新的集合
4. 空间效率高：使用树形结构节省空间

## 基本操作
1. 初始化（MakeSet）：建立一个新的并查集
2. 合并（Union）：合并两个集合
3. 查找（Find）：查找元素所在的集合
4. 判断连通性：判断两个元素是否属于同一集合

## 代码示例
```java
class DisjointSet {
    private int[] parent;
    private int[] rank;  // 用于按秩合并
    
    public DisjointSet(int size) {
        parent = new int[size];
        rank = new int[size];
        
        // 初始化，每个元素的父节点是自己
        for (int i = 0; i < size; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }
    
    // 查找元素所在的集合（路径压缩）
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // 路径压缩
        }
        return parent[x];
    }
    
    // 合并两个集合（按秩合并）
    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
    
    // 判断两个元素是否属于同一集合
    public boolean isConnected(int x, int y) {
        return find(x) == find(y);
    }
}
```

## 优化技术
1. 路径压缩：在查找时将路径上的所有节点直接连接到根节点
2. 按秩合并：合并时将高度较小的树连接到高度较大的树下
3. 启发式合并：根据集合大小或树的高度来决定如何合并

## 应用场景
1. 网络连接问题：判断网络中的节点是否连通
2. 最小生成树：Kruskal算法中使用
3. 等价类问题：维护元素之间的等价关系
4. 动态连通性：维护图的连通性
5. 集合划分：将元素划分为不相交的集合

## 时间复杂度
1. 初始化：O(n)
2. 查找：O(α(n))，其中α是阿克曼函数的反函数，实际上近似于O(1)
3. 合并：O(α(n))

## 注意事项
1. 选择合适的优化策略
2. 处理好路径压缩
3. 考虑并发安全性
4. 注意集合大小的限制

## 扩展应用
1. 带权并查集：在边上附加权值
2. 可持久化并查集：支持回退操作
3. 离线并查集：处理离线查询
4. 种类并查集：维护多个种类之间的关系