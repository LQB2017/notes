# 数组算法

数组是最基本的数据结构之一，它是由相同类型的元素按顺序存储在连续内存空间中的数据结构。数组算法包括对数组进行的各种操作和处理方法。

## 基本操作

### 1. 数组的遍历

```java
public class ArrayTraversal {
    // 正向遍历
    public static void traverse(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
    
    // 反向遍历
    public static void reverseTraverse(int[] arr) {
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}
```

### 2. 数组的查找

```java
public class ArraySearch {
    // 线性查找
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    
    // 二分查找（要求数组有序）
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}
```

## 常见算法

### 1. 数组反转

```java
public class ArrayReverse {
    public static void reverse(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            // 交换元素
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
```

### 2. 数组旋转

```java
public class ArrayRotation {
    // 向右旋转k步
    public static void rotate(int[] arr, int k) {
        k %= arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
    }
    
    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
```

### 3. 子数组问题

```java
public class SubarrayProblems {
    // 最大子数组和
    public static int maxSubArray(int[] arr) {
        int maxSum = arr[0];
        int currentSum = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    // 连续子数组的最大乘积
    public static int maxProduct(int[] arr) {
        int max = arr[0];
        int currentMax = arr[0];
        int currentMin = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            int temp = currentMax;
            currentMax = Math.max(Math.max(arr[i], currentMax * arr[i]), currentMin * arr[i]);
            currentMin = Math.min(Math.min(arr[i], temp * arr[i]), currentMin * arr[i]);
            max = Math.max(max, currentMax);
        }
        
        return max;
    }
}
```

## 高级技巧

### 1. 双指针技巧

```java
public class TwoPointerTechnique {
    // 移除数组中的重复元素
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        
        int i = 0;
        for (int j = 1; j < arr.length; j++) {
            if (arr[j] != arr[i]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }
    
    // 移动零到数组末尾
    public static void moveZeroes(int[] arr) {
        int nonZeroIndex = 0;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                int temp = arr[nonZeroIndex];
                arr[nonZeroIndex] = arr[i];
                arr[i] = temp;
                nonZeroIndex++;
            }
        }
    }
}
```

### 2. 滑动窗口

```java
public class SlidingWindow {
    // 固定大小窗口的最大和
    public static int maxSumFixedWindow(int[] arr, int k) {
        int maxSum = 0;
        int windowSum = 0;
        
        // 计算第一个窗口的和
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;
        
        // 滑动窗口
        for (int i = k; i < arr.length; i++) {
            windowSum = windowSum - arr[i - k] + arr[i];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
}
```

## 应用场景

1. **数据处理**：
   - 数据统计
   - 数据过滤
   - 数据转换

2. **算法问题**：
   - 排序
   - 查找
   - 动态规划

3. **实际应用**：
   - 图像处理
   - 信号处理
   - 金融分析

## 性能优化

1. **时间优化**：
   - 选择合适的算法
   - 使用高效的数据结构
   - 避免重复计算

2. **空间优化**：
   - 原地算法
   - 空间复用
   - 内存管理

## 实践建议

1. **算法选择**：
   - 考虑数据规模
   - 考虑时间复杂度
   - 考虑空间复杂度

2. **代码实现**：
   - 注意边界条件
   - 处理特殊情况
   - 保持代码清晰

3. **测试验证**：
   - 单元测试
   - 边界测试
   - 性能测试