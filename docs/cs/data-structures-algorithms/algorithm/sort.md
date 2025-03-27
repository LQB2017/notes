# 排序算法

排序算法是将一组数据按照特定顺序（如升序或降序）重新排列的方法。不同的排序算法有不同的时间复杂度和空间复杂度，适用于不同的场景。

## 常见排序算法

### 冒泡排序

冒泡排序是最简单的排序算法之一，它重复地遍历要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。

- 时间复杂度：O(n²)
- 空间复杂度：O(1)
- 稳定性：稳定

```java
public void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

### 选择排序

选择排序是一种简单直观的排序算法，它的工作原理是每次从待排序的数据中选出最小（或最大）的元素，存放在序列的起始位置。

- 时间复杂度：O(n²)
- 空间复杂度：O(1)
- 稳定性：不稳定

```java
public void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```

### 插入排序

插入排序是一种简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

- 时间复杂度：O(n²)
- 空间复杂度：O(1)
- 稳定性：稳定

```java
public void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### 快速排序

快速排序是一种分治的排序算法，它通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序。

- 时间复杂度：平均O(nlogn)，最坏O(n²)
- 空间复杂度：O(logn)
- 稳定性：不稳定

```java
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
```

### 归并排序

归并排序是一种分治算法，其基本思想是将两个已经排序的序列合并成一个序列的操作。

- 时间复杂度：O(nlogn)
- 空间复杂度：O(n)
- 稳定性：稳定

```java
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    
    for (i = 0; i < k; i++) {
        arr[left + i] = temp[i];
    }
}
```

## 排序算法的选择

在选择排序算法时，需要考虑以下因素：

1. 数据规模：对于小规模数据，简单的排序算法（如插入排序）可能更快；对于大规模数据，应选择时间复杂度为O(nlogn)的算法。

2. 数据特征：
   - 对于近乎有序的数据，插入排序效率较高
   - 对于随机数据，快速排序通常是最好的选择
   - 对于重复元素较多的数据，三路快排更有优势

3. 稳定性要求：如果需要保持相同元素的相对位置，应选择稳定的排序算法。

4. 空间复杂度：在内存受限的情况下，应选择原地排序算法。

## 应用场景

1. 数据库索引：通常使用B树或B+树实现，其中涉及到排序操作
2. 文件排序：大文件排序通常使用外部排序算法
3. 数组排序：编程语言的标准库中的排序函数
4. 网页排序：搜索引擎结果排序
5. 电商平台：商品按价格、销量等指标排序