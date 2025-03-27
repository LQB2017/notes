# 字典

字典（Dictionary）是一种存储键值对的数据结构，也称为映射（Map）。每个键必须是唯一的，而值可以重复。字典提供了高效的键值对存储和检索机制。

## 基本概念

### 字典的特点
1. 键唯一性
2. 键值对应关系
3. 支持快速查找
4. 动态增长

## 基本实现

### 1. 基于哈希表的字典

```java
public class HashMap<K, V> {
    private static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Entry<K, V>[] table;
    private int size;
    private static final int DEFAULT_CAPACITY = 16;
    private static final float LOAD_FACTOR = 0.75f;
    
    @SuppressWarnings("unchecked")
    public HashMap() {
        table = (Entry<K, V>[]) new Entry[DEFAULT_CAPACITY];
    }
    
    public void put(K key, V value) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        if ((float) size / table.length >= LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        if (table[index] == null) {
            table[index] = new Entry<>(key, value);
            size++;
        } else {
            Entry<K, V> current = table[index];
            Entry<K, V> prev = null;
            
            while (current != null) {
                if (current.key.equals(key)) {
                    current.value = value;
                    return;
                }
                prev = current;
                current = current.next;
            }
            
            prev.next = new Entry<>(key, value);
            size++;
        }
    }
    
    public V get(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry<K, V> current = table[index];
        
        while (current != null) {
            if (current.key.equals(key)) {
                return current.value;
            }
            current = current.next;
        }
        
        return null;
    }
    
    public boolean remove(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry<K, V> current = table[index];
        Entry<K, V> prev = null;
        
        while (current != null) {
            if (current.key.equals(key)) {
                if (prev == null) {
                    table[index] = current.next;
                } else {
                    prev.next = current.next;
                }
                size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        
        return false;
    }
    
    private int hash(K key) {
        return Math.abs(key.hashCode() % table.length);
    }
    
    @SuppressWarnings("unchecked")
    private void resize() {
        Entry<K, V>[] oldTable = table;
        table = (Entry<K, V>[]) new Entry[oldTable.length * 2];
        size = 0;
        
        for (Entry<K, V> entry : oldTable) {
            while (entry != null) {
                put(entry.key, entry.value);
                entry = entry.next;
            }
        }
    }
}
```

### 2. 基于红黑树的字典

```java
public class TreeMap<K extends Comparable<K>, V> {
    private static class Node<K, V> {
        K key;
        V value;
        Node<K, V> left, right;
        boolean isRed;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.isRed = true;
        }
    }
    
    private Node<K, V> root;
    
    public void put(K key, V value) {
        root = put(root, key, value);
        root.isRed = false;
    }
    
    private Node<K, V> put(Node<K, V> node, K key, V value) {
        if (node == null) return new Node<>(key, value);
        
        int cmp = key.compareTo(node.key);
        if (cmp < 0) node.left = put(node.left, key, value);
        else if (cmp > 0) node.right = put(node.right, key, value);
        else node.value = value;
        
        // 红黑树平衡调整
        if (isRed(node.right) && !isRed(node.left)) node = rotateLeft(node);
        if (isRed(node.left) && isRed(node.left.left)) node = rotateRight(node);
        if (isRed(node.left) && isRed(node.right)) flipColors(node);
        
        return node;
    }
    
    private boolean isRed(Node<K, V> node) {
        if (node == null) return false;
        return node.isRed;
    }
    
    private Node<K, V> rotateLeft(Node<K, V> h) {
        Node<K, V> x = h.right;
        h.right = x.left;
        x.left = h;
        x.isRed = h.isRed;
        h.isRed = true;
        return x;
    }
    
    private Node<K, V> rotateRight(Node<K, V> h) {
        Node<K, V> x = h.left;
        h.left = x.right;
        x.right = h;
        x.isRed = h.isRed;
        h.isRed = true;
        return x;
    }
    
    private void flipColors(Node<K, V> h) {
        h.isRed = true;
        h.left.isRed = false;
        h.right.isRed = false;
    }
}
```

## 应用场景

1. **缓存实现**：
   - LRU缓存
   - 内存缓存

2. **配置管理**：
   - 系统配置
   - 用户设置

3. **计数统计**：
   - 词频统计
   - 访问计数

4. **索引存储**：
   - 数据库索引
   - 搜索引擎

## 性能分析

### HashMap
- 添加：平均O(1)，最坏O(n)
- 查找：平均O(1)，最坏O(n)
- 删除：平均O(1)，最坏O(n)
- 空间复杂度：O(n)

### TreeMap
- 添加：O(log n)
- 查找：O(log n)
- 删除：O(log n)
- 空间复杂度：O(n)

## 实践建议

1. **选择合适的实现**：
   - 需要排序用TreeMap
   - 不需要排序用HashMap

2. **性能优化**：
   - 合理设置初始容量
   - 选择适当的负载因子
   - 避免哈希冲突

3. **使用注意**：
   - 处理null值
   - 考虑线程安全
   - 选择合适的键类型