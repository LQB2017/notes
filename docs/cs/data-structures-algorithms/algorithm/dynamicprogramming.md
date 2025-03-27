# 动态规划

动态规划（Dynamic Programming，简称DP）是一种通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。它的核心思想是：将复杂问题分解成简单子问题，并存储子问题的解以避免重复计算。

## 基本概念

1. **最优子结构**：问题的最优解包含子问题的最优解
2. **重叠子问题**：在递归过程中，同一个子问题会被多次计算
3. **状态转移方程**：定义子问题之间的递推关系

## 动态规划的步骤

1. 确定状态（定义dp数组的含义）
2. 找到状态转移方程
3. 确定初始条件和边界条件
4. 确定计算顺序（自底向上或自顶向下）

## 常见问题及实现

### 1. 斐波那契数列

```java
public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
    }
}
```

### 2. 最长递增子序列（LIS）

```java
public class LongestIncreasingSubsequence {
    public static int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        int maxLen = 1;
        
        for (int i = 1; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
        
        return maxLen;
    }
}
```

### 3. 背包问题

#### 0-1背包

```java
public class KnapsackProblem {
    public static int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i-1] <= w) {
                    dp[i][w] = Math.max(
                        values[i-1] + dp[i-1][w-weights[i-1]],
                        dp[i-1][w]
                    );
                } else {
                    dp[i][w] = dp[i-1][w];
                }
            }
        }
        
        return dp[n][capacity];
    }
}
```

### 4. 编辑距离

```java
public class EditDistance {
    public static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // 初始化
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        // 填充dp数组
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i-1][j-1], // 替换
                        Math.min(
                            dp[i-1][j],   // 删除
                            dp[i][j-1]    // 插入
                        )
                    ) + 1;
                }
            }
        }
        
        return dp[m][n];
    }
}
```

## 动态规划的优化

1. **空间优化**：
   - 使用滚动数组
   - 使用一维数组代替二维数组

2. **时间优化**：
   - 合理设计状态转移方程
   - 利用问题特性进行剪枝

## 应用场景

1. **字符串问题**：
   - 最长公共子序列
   - 最长回文子串
   - 编辑距离

2. **序列问题**：
   - 最长递增子序列
   - 最大子数组和
   - 股票买卖问题

3. **背包问题**：
   - 0-1背包
   - 完全背包
   - 多重背包

4. **矩阵问题**：
   - 最小路径和
   - 最大正方形
   - 矩阵链乘法

## 实践建议

1. **问题分析**：
   - 确定是否具有最优子结构
   - 识别重叠子问题

2. **状态设计**：
   - 明确dp数组的含义
   - 设计合适的状态表示

3. **代码实现**：
   - 注意边界条件处理
   - 考虑空间优化可能性
   - 进行必要的测试验证