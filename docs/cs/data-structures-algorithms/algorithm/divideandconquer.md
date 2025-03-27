# 分治算法

分治算法是一种将复杂问题分解成多个相同或相似的子问题，直到子问题简单到可以直接求解，最后将子问题的解合并得到原问题的解的算法策略。

## 基本概念

分治算法的基本思想包括三个步骤：
1. **分解**：将原问题分解为若干个规模较小的子问题
2. **解决**：递归地求解各个子问题
3. **合并**：将子问题的解组合成原问题的解

## 分治算法的特征

1. 问题可以分解为若干个规模较小的相同问题
2. 子问题相互独立，子问题之间不包含公共的子子问题
3. 具有最优子结构性质

## 常见问题及实现

### 1. 归并排序

```java
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        
        for (i = 0; i < k; i++) {
            arr[left + i] = temp[i];
        }
    }
}
```

### 2. 快速排序

```java
public class QuickSort {
    public static void quickSort(int[] arr, int left, int right) {
        if (left < right) {
            int pivot = partition(arr, left, right);
            quickSort(arr, left, pivot - 1);
            quickSort(arr, pivot + 1, right);
        }
    }
    
    private static int partition(int[] arr, int left, int right) {
        int pivot = arr[right];
        int i = left - 1;
        
        for (int j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        swap(arr, i + 1, right);
        return i + 1;
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

### 3. 二分查找

```java
public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}
```

### 4. 最大子数组问题

```java
public class MaximumSubarray {
    public static int maxSubArray(int[] nums) {
        return findMaxSubArray(nums, 0, nums.length - 1);
    }
    
    private static int findMaxSubArray(int[] nums, int left, int right) {
        if (left == right) {
            return nums[left];
        }
        
        int mid = (left + right) / 2;
        
        int leftMax = findMaxSubArray(nums, left, mid);
        int rightMax = findMaxSubArray(nums, mid + 1, right);
        int crossMax = findMaxCrossingSubArray(nums, left, mid, right);
        
        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }
    
    private static int findMaxCrossingSubArray(int[] nums, int left, int mid, int right) {
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        return leftSum + rightSum;
    }
}
```

## 应用场景

1. **排序算法**：
   - 归并排序
   - 快速排序

2. **搜索算法**：
   - 二分查找
   - 最近点对问题

3. **矩阵运算**：
   - Strassen矩阵乘法
   - 矩阵快速幂

4. **傅里叶变换**：
   - 快速傅里叶变换(FFT)

## 分治算法的优缺点

### 优点
1. 分治法可以解决很多复杂的问题
2. 理解和设计比较简单
3. 易于并行实现

### 缺点
1. 递归调用会有额外的空间开销
2. 可能存在重复计算
3. 有些问题可能不适合使用分治法

## 实践建议

1. **问题分析**：
   - 确定问题是否可以分解
   - 子问题是否相互独立

2. **递归设计**：
   - 设计合适的递归终止条件
   - 保证子问题规模递减

3. **合并策略**：
   - 设计高效的合并算法
   - 注意边界条件处理

4. **优化考虑**：
   - 考虑是否存在重复计算
   - 考虑是否需要记忆化搜索
   - 考虑是否可以改为非递归实现