# 散列表算法

散列表（Hash Table）是一种基于数组的数据结构，它通过散列函数将键映射到数组的索引上，实现快速的数据存取。

## 基本概念

### 1. 散列函数
散列函数是将键转换为数组索引的函数。一个好的散列函数应该：
- 计算简单快速
- 尽可能均匀分布
- 减少冲突

### 2. 冲突处理
当不同的键映射到相同的索引时，就会发生冲突。常见的冲突解决方法：
- 链地址法（拉链法）
- 开放地址法（线性探测、二次探测、双重散列）

## 实现示例

### 1. 基于链地址法的散列表

```java
public class HashTable<K, V> {
    private static class Node<K, V> {
        K key;
        V value;
        Node<K, V> next;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Node<K, V>[] table;
    private int size;
    private static final int DEFAULT_CAPACITY = 16;
    private static final float LOAD_FACTOR = 0.75f;
    
    @SuppressWarnings("unchecked")
    public HashTable() {
        table = (Node<K, V>[]) new Node[DEFAULT_CAPACITY];
    }
    
    private int hash(K key) {
        return Math.abs(key.hashCode() % table.length);
    }
    
    public void put(K key, V value) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        if ((float) size / table.length >= LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        Node<K, V> node = table[index];
        
        while (node != null) {
            if (node.key.equals(key)) {
                node.value = value;
                return;
            }
            node = node.next;
        }
        
        Node<K, V> newNode = new Node<>(key, value);
        newNode.next = table[index];
        table[index] = newNode;
        size++;
    }
    
    public V get(K key) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        int index = hash(key);
        Node<K, V> node = table[index];
        
        while (node != null) {
            if (node.key.equals(key)) {
                return node.value;
            }
            node = node.next;
        }
        
        return null;
    }
    
    public void remove(K key) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        int index = hash(key);
        Node<K, V> node = table[index];
        Node<K, V> prev = null;
        
        while (node != null) {
            if (node.key.equals(key)) {
                if (prev == null) {
                    table[index] = node.next;
                } else {
                    prev.next = node.next;
                }
                size--;
                return;
            }
            prev = node;
            node = node.next;
        }
    }
    
    @SuppressWarnings("unchecked")
    private void resize() {
        Node<K, V>[] oldTable = table;
        table = (Node<K, V>[]) new Node[oldTable.length * 2];
        size = 0;
        
        for (Node<K, V> node : oldTable) {
            while (node != null) {
                put(node.key, node.value);
                node = node.next;
            }
        }
    }
}
```

### 2. 基于开放地址法的散列表

```java
public class OpenAddressingHashTable<K, V> {
    private static class Entry<K, V> {
        K key;
        V value;
        boolean isDeleted;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Entry<K, V>[] table;
    private int size;
    private static final int DEFAULT_CAPACITY = 16;
    private static final float LOAD_FACTOR = 0.5f;
    
    @SuppressWarnings("unchecked")
    public OpenAddressingHashTable() {
        table = (Entry<K, V>[]) new Entry[DEFAULT_CAPACITY];
    }
    
    private int hash(K key, int probe) {
        int h = key.hashCode();
        return Math.abs((h + probe) % table.length);
    }
    
    public void put(K key, V value) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        if ((float) size / table.length >= LOAD_FACTOR) {
            resize();
        }
        
        int probe = 0;
        int index;
        
        do {
            index = hash(key, probe);
            
            if (table[index] == null || table[index].isDeleted) {
                table[index] = new Entry<>(key, value);
                size++;
                return;
            } else if (table[index].key.equals(key)) {
                table[index].value = value;
                return;
            }
            
            probe++;
        } while (probe < table.length);
        
        throw new IllegalStateException("Hash table is full");
    }
    
    public V get(K key) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        int probe = 0;
        int index;
        
        do {
            index = hash(key, probe);
            
            if (table[index] == null) return null;
            if (!table[index].isDeleted && table[index].key.equals(key)) {
                return table[index].value;
            }
            
            probe++;
        } while (probe < table.length && table[index] != null);
        
        return null;
    }
    
    public void remove(K key) {
        if (key == null) throw new IllegalArgumentException("Key cannot be null");
        
        int probe = 0;
        int index;
        
        do {
            index = hash(key, probe);
            
            if (table[index] == null) return;
            if (!table[index].isDeleted && table[index].key.equals(key)) {
                table[index].isDeleted = true;
                size--;
                return;
            }
            
            probe++;
        } while (probe < table.length && table[index] != null);
    }
    
    @SuppressWarnings("unchecked")
    private void resize() {
        Entry<K, V>[] oldTable = table;
        table = (Entry<K, V>[]) new Entry[oldTable.length * 2];
        size = 0;
        
        for (Entry<K, V> entry : oldTable) {
            if (entry != null && !entry.isDeleted) {
                put(entry.key, entry.value);
            }
        }
    }
}
```

## 应用场景

1. **数据库索引**：
   - 快速查找记录
   - 优化查询性能

2. **缓存系统**：
   - 内存缓存
   - 分布式缓存

3. **符号表**：
   - 编译器符号表
   - 变量查找

4. **去重**：
   - 数据去重
   - 判断重复

## 性能分析

### 时间复杂度
- 平均情况：O(1)
- 最坏情况：O(n)

### 影响因素
1. 散列函数的质量
2. 负载因子的选择
3. 冲突解决方法

## 实践建议

1. **散列函数设计**：
   - 选择合适的散列函数
   - 考虑数据分布特点

2. **冲突处理**：
   - 根据应用场景选择冲突解决方法
   - 监控冲突率

3. **性能优化**：
   - 合理设置初始容量
   - 及时调整负载因子
   - 定期维护性能