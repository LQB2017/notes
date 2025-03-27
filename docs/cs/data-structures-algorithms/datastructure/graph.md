# 图

## 定义
图是一种非线性数据结构，由顶点（节点）和边组成。边表示顶点之间的关系或连接。图可以表示多对多的关系，是一种更加灵活的数据结构。

## 特点
1. 非线性结构：节点之间可以有多个连接
2. 可以表示复杂关系：支持多对多的关系表示
3. 可以是有向或无向：边可以有方向性
4. 可以带权重：边可以具有权重值

## 基本概念
1. 顶点（Vertex）：图中的节点
2. 边（Edge）：连接顶点的线
3. 度（Degree）：与顶点相连的边的数量
4. 路径（Path）：从一个顶点到另一个顶点的顶点序列
5. 环（Cycle）：起点和终点相同的路径

## 图的表示方式
1. 邻接矩阵：使用二维数组表示顶点间的连接关系
2. 邻接表：使用链表数组表示每个顶点的相邻顶点
3. 边集数组：直接存储图的边

## 基本操作
1. 添加顶点：向图中添加新的顶点
2. 添加边：在两个顶点之间添加边
3. 删除顶点：从图中删除顶点及其相关的边
4. 删除边：删除两个顶点之间的边
5. 图的遍历：访问图中的所有顶点
   - 深度优先搜索（DFS）
   - 广度优先搜索（BFS）

## 代码示例
```java
// 使用邻接表表示的图
class Graph {
    private int V; // 顶点数
    private LinkedList<Integer>[] adj; // 邻接表
    
    @SuppressWarnings("unchecked")
    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i) {
            adj[i] = new LinkedList<>();
        }
    }
    
    // 添加边
    void addEdge(int v, int w) {
        adj[v].add(w);
    }
    
    // 深度优先搜索
    void DFS(int v, boolean[] visited) {
        visited[v] = true;
        System.out.print(v + " ");
        
        for (int n : adj[v]) {
            if (!visited[n]) {
                DFS(n, visited);
            }
        }
    }
    
    // 广度优先搜索
    void BFS(int s) {
        boolean[] visited = new boolean[V];
        LinkedList<Integer> queue = new LinkedList<>();
        
        visited[s] = true;
        queue.add(s);
        
        while (!queue.isEmpty()) {
            s = queue.poll();
            System.out.print(s + " ");
            
            for (int n : adj[s]) {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }
}
```

## 应用场景
1. 社交网络：表示用户之间的关系
2. 地图导航：表示地点之间的连接
3. 网络拓扑：表示网络设备之间的连接
4. 任务调度：表示任务之间的依赖关系

## 常见算法
1. 最短路径算法
   - Dijkstra算法
   - Floyd-Warshall算法
2. 最小生成树
   - Prim算法
   - Kruskal算法
3. 拓扑排序
4. 强连通分量

## 注意事项
1. 选择合适的图表示方式
2. 处理环和重复边
3. 考虑图的连通性
4. 注意遍历时的访问标记

## 优化方案
1. 使用合适的数据结构优化存储
2. 选择适当的算法降低时间复杂度
3. 考虑空间和时间的平衡
4. 使用缓存优化频繁访问的路径