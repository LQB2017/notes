# 搜索算法

搜索算法是在数据集中查找特定元素的方法。不同的搜索算法适用于不同的数据结构和场景。

## 常见搜索算法

### 线性搜索

线性搜索（顺序搜索）是最简单的搜索算法，它按顺序检查数组中的每个元素，直到找到目标值或搜索完整个数组。

- 时间复杂度：O(n)
- 空间复杂度：O(1)
- 适用场景：小规模数据、无序数据

```java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

### 二分搜索

二分搜索是一种效率较高的搜索算法，但要求数组必须是有序的。它通过将搜索区间分成两半，不断缩小搜索范围。

- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 适用场景：有序数据

```java
public int binarySearch(int[] arr, int target) {
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
```

### 跳跃搜索

跳跃搜索是对线性搜索的改进，它通过跳过一些元素来加快搜索速度。适用于有序数组。

- 时间复杂度：O(√n)
- 空间复杂度：O(1)
- 适用场景：有序数据、大型数据集

```java
public int jumpSearch(int[] arr, int target) {
    int n = arr.length;
    int step = (int) Math.sqrt(n);
    
    int prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += (int) Math.sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }
    
    while (arr[prev] < target) {
        prev++;
        if (prev == Math.min(step, n)) {
            return -1;
        }
    }
    
    if (arr[prev] == target) {
        return prev;
    }
    
    return -1;
}
```

### 插值搜索

插值搜索是对二分搜索的改进，它根据要搜索的键值来确定下一次搜索的位置。

- 时间复杂度：平均O(log log n)，最坏O(n)
- 空间复杂度：O(1)
- 适用场景：均匀分布的有序数据

```java
public int interpolationSearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) {
                return low;
            }
            return -1;
        }
        
        int pos = low + (((high - low) * (target - arr[low])) / (arr[high] - arr[low]));
        
        if (arr[pos] == target) {
            return pos;
        }
        
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    
    return -1;
}
```

### 哈希搜索

哈希搜索通过哈希函数将搜索键映射到数组索引，实现快速搜索。

- 时间复杂度：平均O(1)，最坏O(n)
- 空间复杂度：O(n)
- 适用场景：需要快速查找、内存充足

```java
public class HashSearch {
    private int[] table;
    private int size;
    
    public HashSearch(int size) {
        this.size = size;
        table = new int[size];
        Arrays.fill(table, -1);
    }
    
    private int hash(int key) {
        return key % size;
    }
    
    public void insert(int key) {
        int index = hash(key);
        while (table[index] != -1) {
            index = (index + 1) % size;
        }
        table[index] = key;
    }
    
    public int search(int key) {
        int index = hash(key);
        while (table[index] != -1) {
            if (table[index] == key) {
                return index;
            }
            index = (index + 1) % size;
        }
        return -1;
    }
}
```

## 搜索算法的选择

在选择搜索算法时，需要考虑以下因素：

1. 数据规模：对于小规模数据，线性搜索可能更快；对于大规模数据，应选择更高效的算法。

2. 数据结构：
   - 有序数组：可以使用二分搜索、跳跃搜索或插值搜索
   - 无序数组：可以使用线性搜索或哈希搜索
   - 链表：通常使用线性搜索

3. 时间和空间要求：
   - 对时间要求高：选择哈希搜索或二分搜索
   - 对空间要求高：选择不需要额外空间的算法

4. 数据分布：
   - 均匀分布：插值搜索效果好
   - 随机分布：二分搜索更稳定

## 应用场景

1. 数据库查询：使用索引（如B树）进行快速搜索
2. 文本搜索：使用字符串匹配算法
3. 网络路由：使用路由表进行快速查找
4. 人工智能：在搜索空间中寻找解决方案
5. 操作系统：在内存中查找进程和资源