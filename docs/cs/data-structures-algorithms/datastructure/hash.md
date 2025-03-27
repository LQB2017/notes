# 散列表

## 定义
散列表（Hash Table）是一种基于数组实现的数据结构，它通过散列函数将键映射到数组的索引上，实现快速的数据存储和检索。

## 特点
1. 快速访问：理想情况下，查找、插入和删除操作的时间复杂度为O(1)
2. 无序存储：元素在散列表中的位置由散列函数决定
3. 空间换时间：通过额外的空间开销换取时间效率
4. 可能存在冲突：不同的键可能被映射到相同的位置

## 基本概念
1. 散列函数：将键转换为数组索引的函数
2. 冲突解决：处理不同键映射到相同位置的方法
3. 负载因子：散列表中元素个数与表大小的比值
4. 再散列：当负载因子过大时，扩展散列表的大小

## 冲突解决方法
1. 链地址法（拉链法）
   - 将映射到同一位置的元素用链表连接
   - 适用于负载因子较大的情况
2. 开放地址法
   - 线性探测：冲突发生时，查找下一个空位
   - 二次探测：冲突发生时，按二次函数步长查找
   - 双重散列：使用第二个散列函数计算步长

## 代码示例
```java
// 使用链地址法实现散列表
class HashTable<K, V> {
    private class Node {
        K key;
        V value;
        Node next;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Node[] table;
    private int size;
    private static final int INITIAL_CAPACITY = 16;
    private static final double LOAD_FACTOR = 0.75;
    
    @SuppressWarnings("unchecked")
    public HashTable() {
        table = (Node[]) new HashTable.Node[INITIAL_CAPACITY];
    }
    
    // 计算散列值
    private int hash(K key) {
        return Math.abs(key.hashCode() % table.length);
    }
    
    // 插入键值对
    public void put(K key, V value) {
        if (size >= table.length * LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        Node node = table[index];
        
        // 检查是否已存在该键
        while (node != null) {
            if (node.key.equals(key)) {
                node.value = value;
                return;
            }
            node = node.next;
        }
        
        // 在链表头部插入新节点
        Node newNode = new Node(key, value);
        newNode.next = table[index];
        table[index] = newNode;
        size++;
    }
    
    // 获取键对应的值
    public V get(K key) {
        int index = hash(key);
        Node node = table[index];
        
        while (node != null) {
            if (node.key.equals(key)) {
                return node.value;
            }
            node = node.next;
        }
        
        return null;
    }
    
    // 删除键值对
    public V remove(K key) {
        int index = hash(key);
        Node node = table[index];
        Node prev = null;
        
        while (node != null) {
            if (node.key.equals(key)) {
                if (prev == null) {
                    table[index] = node.next;
                } else {
                    prev.next = node.next;
                }
                size--;
                return node.value;
            }
            prev = node;
            node = node.next;
        }
        
        return null;
    }
    
    // 扩展散列表
    @SuppressWarnings("unchecked")
    private void resize() {
        Node[] oldTable = table;
        table = (Node[]) new HashTable.Node[oldTable.length * 2];
        size = 0;
        
        for (Node node : oldTable) {
            while (node != null) {
                put(node.key, node.value);
                node = node.next;
            }
        }
    }
}
```

## 应用场景
1. 缓存实现：存储频繁访问的数据
2. 数据库索引：快速查找记录
3. 字符串匹配：存储模式串的哈希值
4. 集合实现：判断元素是否存在
5. 符号表：编译器中的符号表实现

## 性能分析
1. 时间复杂度
   - 平均情况：O(1)
   - 最坏情况：O(n)（所有键都映射到同一位置）
2. 空间复杂度：O(n)

## 优化方案
1. 选择合适的散列函数
2. 动态调整表大小
3. 选择合适的冲突解决方法
4. 控制负载因子

## 注意事项
1. 选择合适的散列函数
2. 处理冲突情况
3. 考虑负载因子
4. 注意扩容时机
5. 处理空值情况