# 图算法

图是一种由顶点和边组成的非线性数据结构。图算法是用于处理图结构的一系列算法，包括图的遍历、最短路径、最小生成树等。

## 基本概念

### 图的类型
1. 有向图：边有方向
2. 无向图：边无方向
3. 加权图：边有权重
4. 连通图：任意两个顶点之间都有路径

### 基本表示

```java
// 邻接矩阵表示
public class AdjacencyMatrix {
    private int[][] matrix;
    private int vertices;
    
    public AdjacencyMatrix(int vertices) {
        this.vertices = vertices;
        matrix = new int[vertices][vertices];
    }
    
    public void addEdge(int source, int destination) {
        matrix[source][destination] = 1;
        matrix[destination][source] = 1; // 无向图
    }
}

// 邻接表表示
public class AdjacencyList {
    private ArrayList<ArrayList<Integer>> adjList;
    
    public AdjacencyList(int vertices) {
        adjList = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int source, int destination) {
        adjList.get(source).add(destination);
        adjList.get(destination).add(source); // 无向图
    }
}
```

## 图的遍历

### 1. 深度优先搜索（DFS）

```java
public class DFS {
    private boolean[] visited;
    private ArrayList<ArrayList<Integer>> adjList;
    
    public DFS(int vertices) {
        visited = new boolean[vertices];
        adjList = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void dfs(int vertex) {
        visited[vertex] = true;
        System.out.print(vertex + " ");
        
        for (int neighbor : adjList.get(vertex)) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
}
```

### 2. 广度优先搜索（BFS）

```java
public class BFS {
    private ArrayList<ArrayList<Integer>> adjList;
    
    public BFS(int vertices) {
        adjList = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void bfs(int start) {
        boolean[] visited = new boolean[adjList.size()];
        Queue<Integer> queue = new LinkedList<>();
        
        visited[start] = true;
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            int vertex = queue.poll();
            System.out.print(vertex + " ");
            
            for (int neighbor : adjList.get(vertex)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }
}
```

## 最短路径算法

### 1. Dijkstra算法

```java
public class Dijkstra {
    public static void dijkstra(int[][] graph, int source) {
        int vertices = graph.length;
        int[] distance = new int[vertices];
        boolean[] visited = new boolean[vertices];
        
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[source] = 0;
        
        for (int count = 0; count < vertices - 1; count++) {
            int u = minDistance(distance, visited);
            visited[u] = true;
            
            for (int v = 0; v < vertices; v++) {
                if (!visited[v] && graph[u][v] != 0 &&
                    distance[u] != Integer.MAX_VALUE &&
                    distance[u] + graph[u][v] < distance[v]) {
                    distance[v] = distance[u] + graph[u][v];
                }
            }
        }
    }
    
    private static int minDistance(int[] distance, boolean[] visited) {
        int min = Integer.MAX_VALUE;
        int minIndex = -1;
        
        for (int v = 0; v < distance.length; v++) {
            if (!visited[v] && distance[v] <= min) {
                min = distance[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}
```

### 2. Floyd-Warshall算法

```java
public class FloydWarshall {
    public static void floydWarshall(int[][] graph) {
        int vertices = graph.length;
        int[][] distance = new int[vertices][vertices];
        
        // 初始化距离矩阵
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                distance[i][j] = graph[i][j];
            }
        }
        
        // 计算最短路径
        for (int k = 0; k < vertices; k++) {
            for (int i = 0; i < vertices; i++) {
                for (int j = 0; j < vertices; j++) {
                    if (distance[i][k] != Integer.MAX_VALUE &&
                        distance[k][j] != Integer.MAX_VALUE &&
                        distance[i][k] + distance[k][j] < distance[i][j]) {
                        distance[i][j] = distance[i][k] + distance[k][j];
                    }
                }
            }
        }
    }
}
```

## 最小生成树算法

### 1. Kruskal算法

```java
public class Kruskal {
    static class Edge implements Comparable<Edge> {
        int src, dest, weight;
        
        public int compareTo(Edge other) {
            return this.weight - other.weight;
        }
    }
    
    static class DisjointSet {
        int[] parent, rank;
        
        DisjointSet(int vertices) {
            parent = new int[vertices];
            rank = new int[vertices];
            for (int i = 0; i < vertices; i++) {
                parent[i] = i;
            }
        }
        
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        void union(int x, int y) {
            int xRoot = find(x);
            int yRoot = find(y);
            
            if (rank[xRoot] < rank[yRoot]) {
                parent[xRoot] = yRoot;
            } else if (rank[xRoot] > rank[yRoot]) {
                parent[yRoot] = xRoot;
            } else {
                parent[yRoot] = xRoot;
                rank[xRoot]++;
            }
        }
    }
    
    public static void kruskalMST(ArrayList<Edge> edges, int vertices) {
        Collections.sort(edges);
        DisjointSet ds = new DisjointSet(vertices);
        ArrayList<Edge> result = new ArrayList<>();
        
        for (Edge edge : edges) {
            int x = ds.find(edge.src);
            int y = ds.find(edge.dest);
            
            if (x != y) {
                result.add(edge);
                ds.union(x, y);
            }
        }
    }
}
```

## 应用场景

1. **网络路由**：
   - 最短路径算法
   - 网络流算法

2. **社交网络**：
   - 好友推荐
   - 社区发现

3. **地图导航**：
   - 路径规划
   - 交通流量分析

4. **资源调度**：
   - 任务分配
   - 资源优化

## 性能优化

1. **时间优化**：
   - 选择合适的图表示方式
   - 使用高效的数据结构
   - 优化遍历策略

2. **空间优化**：
   - 压缩图的存储
   - 使用邻接表代替邻接矩阵

## 实践建议

1. **图的表示**：
   - 根据图的特点选择表示方式
   - 考虑空间和时间的平衡

2. **算法选择**：
   - 根据问题特点选择算法
   - 考虑图的规模和密度

3. **实现注意**：
   - 处理边界情况
   - 注意环的处理
   - 考虑连通性