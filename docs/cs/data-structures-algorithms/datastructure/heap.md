# 堆

## 定义
堆是一种特殊的完全二叉树，分为最大堆和最小堆。在最大堆中，父节点的值总是大于或等于子节点的值；在最小堆中，父节点的值总是小于或等于子节点的值。

## 特点
1. 完全二叉树：除了最后一层，其他层的节点都是满的
2. 堆序性质：父节点与子节点之间的大小关系固定
3. 可以用数组实现：利用完全二叉树的性质
4. 插入和删除操作的时间复杂度为O(log n)

## 基本操作
1. 插入元素：将新元素添加到堆的末尾，然后上浮调整
2. 删除堆顶：移除堆顶元素，将最后一个元素移到堆顶，然后下沉调整
3. 获取堆顶：返回堆中的最大值（最大堆）或最小值（最小堆）
4. 堆化：将一个无序数组转换为堆

## 代码示例
```java
// 最大堆实现
class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;
    
    public MaxHeap(int capacity) {
        this.capacity = capacity;
        heap = new int[capacity];
        size = 0;
    }
    
    // 获取父节点索引
    private int parent(int i) {
        return (i - 1) / 2;
    }
    
    // 获取左子节点索引
    private int leftChild(int i) {
        return 2 * i + 1;
    }
    
    // 获取右子节点索引
    private int rightChild(int i) {
        return 2 * i + 2;
    }
    
    // 交换两个节点
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
    
    // 插入元素
    public void insert(int key) {
        if (size >= capacity) {
            throw new IllegalStateException("Heap is full");
        }
        
        // 将新元素插入到末尾
        heap[size] = key;
        int current = size;
        size++;
        
        // 上浮操作
        while (current > 0 && heap[current] > heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }
    
    // 下沉操作
    private void heapify(int i) {
        int largest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if (left < size && heap[left] > heap[largest]) {
            largest = left;
        }
        
        if (right < size && heap[right] > heap[largest]) {
            largest = right;
        }
        
        if (largest != i) {
            swap(i, largest);
            heapify(largest);
        }
    }
    
    // 删除堆顶元素
    public int extractMax() {
        if (size <= 0) {
            throw new IllegalStateException("Heap is empty");
        }
        
        if (size == 1) {
            size--;
            return heap[0];
        }
        
        int max = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapify(0);
        
        return max;
    }
    
    // 获取堆顶元素
    public int getMax() {
        if (size <= 0) {
            throw new IllegalStateException("Heap is empty");
        }
        return heap[0];
    }
}
```

## 应用场景
1. 优先队列：实现任务调度
2. 堆排序：对数据进行排序
3. 获取最大/最小值：快速获取数据集中的极值
4. 中位数计算：使用大小堆配合计算中位数
5. TOP-K问题：查找最大或最小的K个元素

## 常见问题
1. 堆的平衡性：保持完全二叉树的性质
2. 堆的扩容：当堆满时需要扩容
3. 建堆时间：将无序数组转换为堆的时间复杂度

## 优化方案
1. 使用动态数组实现可扩展堆
2. 批量建堆时使用自底向上的堆化
3. 懒惰删除：标记删除而不是实际删除

## 注意事项
1. 注意数组越界
2. 保持堆的性质
3. 考虑并发安全性
4. 合理设置初始容量