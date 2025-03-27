# 字符串算法

字符串算法是处理字符串的一系列算法，包括字符串匹配、字符串搜索、字符串编辑等操作。这些算法在文本处理、编译器设计、生物信息学等领域有广泛应用。

## 基本概念

1. **字符串匹配**：在文本中查找模式串的过程
2. **字符串编辑**：计算两个字符串之间的相似度或转换距离
3. **字符串压缩**：减少字符串存储空间的方法

## 常见算法及实现

### 1. KMP算法（字符串匹配）

```java
public class KMP {
    public static int[] getNext(String pattern) {
        int[] next = new int[pattern.length()];
        next[0] = -1;
        int j = -1;
        
        for (int i = 1; i < pattern.length(); i++) {
            while (j != -1 && pattern.charAt(j + 1) != pattern.charAt(i)) {
                j = next[j];
            }
            if (pattern.charAt(j + 1) == pattern.charAt(i)) {
                j++;
            }
            next[i] = j;
        }
        return next;
    }
    
    public static int search(String text, String pattern) {
        if (pattern.isEmpty()) return 0;
        
        int[] next = getNext(pattern);
        int j = -1;
        
        for (int i = 0; i < text.length(); i++) {
            while (j != -1 && pattern.charAt(j + 1) != text.charAt(i)) {
                j = next[j];
            }
            if (pattern.charAt(j + 1) == text.charAt(i)) {
                j++;
            }
            if (j == pattern.length() - 1) {
                return i - j;
            }
        }
        return -1;
    }
}
```

### 2. 最长公共子序列（LCS）

```java
public class LCS {
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
}
```

### 3. 字符串编辑距离

```java
public class EditDistance {
    public static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1], // 替换
                        Math.min(
                            dp[i - 1][j],   // 删除
                            dp[i][j - 1]    // 插入
                        )
                    ) + 1;
                }
            }
        }
        
        return dp[m][n];
    }
}
```

### 4. 字符串压缩

```java
public class StringCompression {
    public static String compress(String str) {
        if (str == null || str.isEmpty()) return str;
        
        StringBuilder sb = new StringBuilder();
        int count = 1;
        char current = str.charAt(0);
        
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == current) {
                count++;
            } else {
                sb.append(current).append(count);
                current = str.charAt(i);
                count = 1;
            }
        }
        
        sb.append(current).append(count);
        String result = sb.toString();
        return result.length() < str.length() ? result : str;
    }
}
```

## 应用场景

1. **文本处理**：
   - 文本搜索
   - 文本编辑器
   - 拼写检查

2. **生物信息学**：
   - DNA序列比对
   - 蛋白质序列分析

3. **编译器设计**：
   - 词法分析
   - 语法分析

4. **信息安全**：
   - 模式匹配
   - 数据加密

## 性能优化

1. **时间优化**：
   - 使用高效的匹配算法
   - 避免不必要的字符串操作

2. **空间优化**：
   - 使用适当的数据结构
   - 及时释放不需要的内存

## 实践建议

1. **算法选择**：
   - 根据具体场景选择合适的算法
   - 考虑时间和空间复杂度

2. **代码实现**：
   - 注意边界条件处理
   - 添加适当的注释
   - 进行充分的测试

3. **性能考虑**：
   - 使用StringBuilder进行字符串拼接
   - 避免频繁的字符串修改
   - 合理使用字符串池