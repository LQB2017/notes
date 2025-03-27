# 贪心算法

贪心算法是一种在每一步选择中都采取当前状态下最好或最优的选择，从而希望导致结果是最好或最优的算法。

## 基本概念

贪心算法的基本思路是：
1. 建立数学模型来描述问题
2. 把求解的问题分成若干个子问题
3. 对每一子问题求解，得到子问题的局部最优解
4. 把子问题的解局部最优解合成原来问题的一个解

## 贪心算法的特点

1. 贪心选择性质：每一步都采取当前状态下最好或最优的选择，不考虑后面的情况
2. 最优子结构：原问题的最优解包含子问题的最优解
3. 无后效性：某个状态以后的过程不会影响以前的状态

## 常见问题及实现

### 1. 活动选择问题

在n个活动中选择最大数量的互不重叠的活动。

```java
public class ActivitySelection {
    public static void selectActivities(int[] start, int[] finish) {
        int n = start.length;
        System.out.println("选择的活动是：");
        
        // 选择第一个活动
        int i = 0;
        System.out.print(i + " ");
        
        // 依次选择不冲突的活动
        for (int j = 1; j < n; j++) {
            if (start[j] >= finish[i]) {
                System.out.print(j + " ");
                i = j;
            }
        }
    }
}
```

### 2. 分数背包问题

有一个背包，容量为W，有n个物品，每个物品有重量和价值，要求选择物品放入背包，使得背包中物品的总价值最大。

```java
public class FractionalKnapsack {
    public static double getMaxValue(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        double[] ratio = new double[n];
        
        // 计算每个物品的单位重量价值
        for (int i = 0; i < n; i++) {
            ratio[i] = (double)values[i] / weights[i];
        }
        
        // 按单位重量价值排序
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (ratio[i] < ratio[j]) {
                    // 交换比值
                    double temp = ratio[i];
                    ratio[i] = ratio[j];
                    ratio[j] = temp;
                    
                    // 交换重量
                    int temp1 = weights[i];
                    weights[i] = weights[j];
                    weights[j] = temp1;
                    
                    // 交换价值
                    int temp2 = values[i];
                    values[i] = values[j];
                    values[j] = temp2;
                }
            }
        }
        
        double totalValue = 0;
        int currentWeight = 0;
        
        // 贪心选择
        for (int i = 0; i < n; i++) {
            if (currentWeight + weights[i] <= capacity) {
                currentWeight += weights[i];
                totalValue += values[i];
            } else {
                int remainingWeight = capacity - currentWeight;
                totalValue += values[i] * ((double)remainingWeight / weights[i]);
                break;
            }
        }
        
        return totalValue;
    }
}
```

### 3. 哈夫曼编码

根据字符出现频率构建最优二叉树，用于数据压缩。

```java
class HuffmanNode {
    int data;
    char c;
    HuffmanNode left;
    HuffmanNode right;
}

public class HuffmanCode {
    public static HuffmanNode buildHuffmanTree(int[] charFreq, char[] chars) {
        PriorityQueue<HuffmanNode> queue = new PriorityQueue<>(
            (a, b) -> a.data - b.data
        );
        
        // 创建叶子节点
        for (int i = 0; i < charFreq.length; i++) {
            HuffmanNode node = new HuffmanNode();
            node.data = charFreq[i];
            node.c = chars[i];
            queue.offer(node);
        }
        
        // 构建哈夫曼树
        while (queue.size() > 1) {
            HuffmanNode x = queue.poll();
            HuffmanNode y = queue.poll();
            
            HuffmanNode sum = new HuffmanNode();
            sum.data = x.data + y.data;
            sum.left = x;
            sum.right = y;
            
            queue.offer(sum);
        }
        
        return queue.poll();
    }
}
```

## 应用场景

1. **最小生成树**：Prim算法和Kruskal算法
2. **单源最短路径**：Dijkstra算法
3. **任务调度**：作业调度、CPU调度
4. **数据压缩**：哈夫曼编码
5. **负载均衡**：服务器任务分配

## 贪心算法的优缺点

### 优点
1. 简单直观，容易实现
2. 运行效率高
3. 对某些问题可以得到最优解

### 缺点
1. 不能保证得到全局最优解
2. 不能用来解决所有问题
3. 可能得到次优解

## 使用贪心算法的注意事项

1. 仔细分析问题是否满足贪心选择性质
2. 证明贪心算法的正确性
3. 考虑是否存在反例
4. 注意贪心策略的选择