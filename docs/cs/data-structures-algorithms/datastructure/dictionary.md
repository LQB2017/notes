# 字典

## 定义
字典（Dictionary）是一种存储键值对的数据结构，也称为映射（Map）。每个键都是唯一的，可以通过键快速访问对应的值。

## 特点
1. 键值对存储：每个元素包含键和值两部分
2. 键的唯一性：不允许重复的键
3. 快速访问：通过键可以快速访问值
4. 动态特性：可以动态添加和删除键值对

## 基本操作
1. 插入键值对：添加新的键值对
2. 删除键值对：根据键删除对应的键值对
3. 查找值：根据键查找对应的值
4. 修改值：更新键对应的值
5. 获取所有键或值：遍历字典中的所有键或值

## 代码示例
```java
// 使用散列表实现字典
class Dictionary<K, V> {
    private class Entry {
        K key;
        V value;
        Entry next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Entry[] table;
    private int size;
    private static final int INITIAL_CAPACITY = 16;
    private static final double LOAD_FACTOR = 0.75;
    
    @SuppressWarnings("unchecked")
    public Dictionary() {
        table = (Entry[]) new Dictionary.Entry[INITIAL_CAPACITY];
        size = 0;
    }
    
    // 计算散列值
    private int hash(K key) {
        return Math.abs(key.hashCode() % table.length);
    }
    
    // 插入键值对
    public void put(K key, V value) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        if (size >= table.length * LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        Entry entry = table[index];
        
        // 检查是否存在相同的键
        while (entry != null) {
            if (entry.key.equals(key)) {
                entry.value = value;
                return;
            }
            entry = entry.next;
        }
        
        // 添加新的键值对
        Entry newEntry = new Entry(key, value);
        newEntry.next = table[index];
        table[index] = newEntry;
        size++;
    }
    
    // 获取值
    public V get(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry entry = table[index];
        
        while (entry != null) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
            entry = entry.next;
        }
        
        return null;
    }
    
    // 删除键值对
    public V remove(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry entry = table[index];
        Entry prev = null;
        
        while (entry != null) {
            if (entry.key.equals(key)) {
                if (prev == null) {
                    table[index] = entry.next;
                } else {
                    prev.next = entry.next;
                }
                size--;
                return entry.value;
            }
            prev = entry;
            entry = entry.next;
        }
        
        return null;
    }
    
    // 判断是否包含键
    public boolean containsKey(K key) {
        return get(key) != null;
    }
    
    // 获取大小
    public int size() {
        return size;
    }
    
    // 判断是否为空
    public boolean isEmpty() {
        return size == 0;
    }
    
    // 扩展字典
    @SuppressWarnings("unchecked")
    private void resize() {
        Entry[] oldTable = table;
        table = (Entry[]) new Dictionary.Entry[oldTable.length * 2];
        size = 0;
        
        for (Entry entry : oldTable) {
            while (entry != null) {
                put(entry.key, entry.value);
                entry = entry.next;
            }
        }
    }
}
```

## 应用场景
1. 缓存系统：存储键值对形式的缓存数据
2. 配置管理：存储配置项和对应的值
3. 符号表：编译器中存储标识符和其属性
4. 计数统计：统计元素出现次数
5. 数据索引：建立索引与数据的映射关系

## 常见实现
1. 散列表（HashMap）：使用散列函数实现
2. 树映射（TreeMap）：使用红黑树实现，保持键的顺序
3. 链式散列表：使用链表解决冲突

## 性能分析
1. 插入操作：平均O(1)，最坏O(n)
2. 删除操作：平均O(1)，最坏O(n)
3. 查找操作：平均O(1)，最坏O(n)
4. 空间复杂度：O(n)

## 注意事项
1. 键的选择：确保键是唯一的
2. 散列函数：选择合适的散列函数
3. 冲突处理：处理散列冲突
4. 扩容机制：合理设置负载因子

## 优化方案
1. 选择合适的初始容量
2. 实现高效的散列函数
3. 使用合适的冲突解决方法
4. 考虑并发安全性