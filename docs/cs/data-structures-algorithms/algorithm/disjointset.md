# 并查集

并查集（Disjoint Set）是一种数据结构，用于处理一些不相交集合的合并及查询问题。主要支持两种操作：合并（Union）和查找（Find）。

## 基本概念

### 基本操作
1. Find：确定元素属于哪一个子集
2. Union：将两个子集合并成一个集合

### 优化方法
1. 路径压缩：在查找时将节点直接连接到根节点
2. 按秩合并：总是将更小的树连接到更大的树上

## 基本实现

```java
public class DisjointSet {
    private int[] parent;
    private int[] rank;  // 用于按秩合并
    
    public DisjointSet(int size) {
        parent = new int[size];
        rank = new int[size];
        
        // 初始化，每个元素的父节点是自己
        for (int i = 0; i < size; i++) {
            parent[i] = i;
        }
    }
    
    // 查找操作（带路径压缩）
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // 路径压缩
        }
        return parent[x];
    }
    
    // 合并操作（按秩合并）
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
    
    // 判断两个元素是否属于同一个集合
    public boolean isConnected(int x, int y) {
        return find(x) == find(y);
    }
}
```

## 高级实现

### 1. 带权并查集

```java
public class WeightedDisjointSet {
    private int[] parent;
    private int[] rank;
    private double[] weight;  // 存储权重
    
    public WeightedDisjointSet(int size) {
        parent = new int[size];
        rank = new int[size];
        weight = new double[size];
        
        for (int i = 0; i < size; i++) {
            parent[i] = i;
            weight[i] = 1.0;
        }
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            int oldParent = parent[x];
            parent[x] = find(parent[x]);
            weight[x] *= weight[oldParent];
        }
        return parent[x];
    }
    
    public void union(int x, int y, double value) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
                weight[rootX] = value * weight[y] / weight[x];
            } else {
                parent[rootY] = rootX;
                weight[rootY] = 1.0 / value * weight[x] / weight[y];
                if (rank[rootX] == rank[rootY]) {
                    rank[rootX]++;
                }
            }
        }
    }
    
    public double getWeight(int x, int y) {
        if (find(x) != find(y)) return -1.0;
        return weight[x] / weight[y];
    }
}
```

## 应用场景

1. **网络连接**：
   - 判断网络中节点的连通性
   - 维护动态连接关系

2. **图算法**：
   - Kruskal最小生成树算法
   - 检测图中的环

3. **集合操作**：
   - 动态维护不相交集合
   - 合并集合

4. **等价类问题**：
   - 传递关系的处理
   - 等价类的合并

## 性能分析

### 时间复杂度
- 初始化：O(n)
- Find操作（无路径压缩）：O(logn)
- Find操作（有路径压缩）：接近O(1)
- Union操作：O(1)

### 优化效果
1. **路径压缩**：
   - 显著减少树的高度
   - 提高后续操作效率

2. **按秩合并**：
   - 控制树的增长
   - 保持树的平衡

## 实践建议

1. **实现选择**：
   - 一般情况下使用基本实现
   - 需要权重关系时使用带权实现

2. **优化使用**：
   - 总是使用路径压缩
   - 结合按秩合并获得最佳性能

3. **注意事项**：
   - 处理越界检查
   - 考虑并发访问
   - 维护额外信息时注意同步更新