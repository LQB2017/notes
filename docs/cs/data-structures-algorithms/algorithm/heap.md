# 堆

堆是一种特殊的完全二叉树，分为最大堆和最小堆。在最大堆中，父节点的值总是大于或等于子节点的值；在最小堆中，父节点的值总是小于或等于子节点的值。

## 基本概念

### 堆的特性
1. 结构性：堆是完全二叉树
2. 有序性：父节点与子节点之间满足特定的大小关系
3. 可以用数组表示：对于索引i的节点，其左子节点索引为2i+1，右子节点索引为2i+2，父节点索引为(i-1)/2

## 基本操作

### 1. 最大堆实现

```java
public class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;
    
    public MaxHeap(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        heap = new int[capacity];
    }
    
    private int parent(int i) {
        return (i - 1) / 2;
    }
    
    private int leftChild(int i) {
        return 2 * i + 1;
    }
    
    private int rightChild(int i) {
        return 2 * i + 2;
    }
    
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
    
    public void insert(int key) {
        if (size >= capacity) {
            throw new IllegalStateException("Heap is full");
        }
        
        // 在末尾插入新元素
        heap[size] = key;
        int current = size;
        size++;
        
        // 上浮操作
        while (current > 0 && heap[current] > heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }
    
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
        
        // 下沉操作
        heapify(0);
        
        return max;
    }
    
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
}
```

### 2. 优先队列实现

```java
public class PriorityQueue<T extends Comparable<T>> {
    private T[] heap;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public PriorityQueue(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        heap = (T[]) new Comparable[capacity];
    }
    
    public void enqueue(T item) {
        if (size >= capacity) {
            throw new IllegalStateException("Queue is full");
        }
        
        heap[size] = item;
        siftUp(size);
        size++;
    }
    
    public T dequeue() {
        if (size <= 0) {
            throw new IllegalStateException("Queue is empty");
        }
        
        T result = heap[0];
        size--;
        heap[0] = heap[size];
        heap[size] = null;
        
        if (size > 0) {
            siftDown(0);
        }
        
        return result;
    }
    
    private void siftUp(int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            if (heap[index].compareTo(heap[parentIndex]) <= 0) {
                break;
            }
            swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    private void siftDown(int index) {
        while (true) {
            int largest = index;
            int left = 2 * index + 1;
            int right = 2 * index + 2;
            
            if (left < size && heap[left].compareTo(heap[largest]) > 0) {
                largest = left;
            }
            
            if (right < size && heap[right].compareTo(heap[largest]) > 0) {
                largest = right;
            }
            
            if (largest == index) {
                break;
            }
            
            swap(index, largest);
            index = largest;
        }
    }
    
    private void swap(int i, int j) {
        T temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
}
```

## 应用场景

1. **优先队列**：
   - 任务调度
   - 事件处理
   - 消息队列

2. **堆排序**：
   - 数组排序
   - Top-K问题

3. **图算法**：
   - Dijkstra最短路径
   - Prim最小生成树

4. **系统应用**：
   - 内存管理
   - 进程调度

## 性能分析

### 时间复杂度
- 插入：O(log n)
- 删除最大/最小元素：O(log n)
- 获取最大/最小元素：O(1)
- 建堆：O(n)

### 空间复杂度
- O(n)，其中n为堆中元素个数

## 实践建议

1. **选择合适的实现**：
   - 根据需求选择最大堆或最小堆
   - 考虑是否需要支持优先级更新

2. **性能优化**：
   - 预估容量，避免频繁扩容
   - 合理设置初始大小

3. **使用场景**：
   - 需要频繁获取最大/最小值
   - 需要维护动态有序序列
   - 需要实现优先级调度