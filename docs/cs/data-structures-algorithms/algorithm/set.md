# 集合

集合是一种存储不重复元素的数据结构，它是最基本的数据结构之一。集合支持添加、删除、查找等基本操作，并且可以进行交集、并集、差集等集合运算。

## 基本概念

### 集合的特点
1. 元素不重复
2. 元素无序
3. 支持快速查找
4. 支持集合运算

## 基本实现

### 1. 基于哈希表的集合

```java
public class HashSet<E> {
    private HashMap<E, Object> map;
    private static final Object PRESENT = new Object();
    
    public HashSet() {
        map = new HashMap<>();
    }
    
    public boolean add(E e) {
        return map.put(e, PRESENT) == null;
    }
    
    public boolean remove(Object o) {
        return map.remove(o) == PRESENT;
    }
    
    public boolean contains(Object o) {
        return map.containsKey(o);
    }
    
    public int size() {
        return map.size();
    }
    
    public boolean isEmpty() {
        return map.isEmpty();
    }
    
    public void clear() {
        map.clear();
    }
}
```

### 2. 基于树的集合

```java
public class TreeSet<E extends Comparable<E>> {
    private TreeMap<E, Object> map;
    private static final Object PRESENT = new Object();
    
    public TreeSet() {
        map = new TreeMap<>();
    }
    
    public boolean add(E e) {
        return map.put(e, PRESENT) == null;
    }
    
    public boolean remove(Object o) {
        return map.remove(o) == PRESENT;
    }
    
    public boolean contains(Object o) {
        return map.containsKey(o);
    }
    
    public E first() {
        return map.firstKey();
    }
    
    public E last() {
        return map.lastKey();
    }
    
    public E lower(E e) {
        return map.lowerKey(e);
    }
    
    public E higher(E e) {
        return map.higherKey(e);
    }
}
```

## 集合运算

```java
public class SetOperations<E> {
    // 并集
    public Set<E> union(Set<E> set1, Set<E> set2) {
        Set<E> result = new HashSet<>(set1);
        result.addAll(set2);
        return result;
    }
    
    // 交集
    public Set<E> intersection(Set<E> set1, Set<E> set2) {
        Set<E> result = new HashSet<>(set1);
        result.retainAll(set2);
        return result;
    }
    
    // 差集
    public Set<E> difference(Set<E> set1, Set<E> set2) {
        Set<E> result = new HashSet<>(set1);
        result.removeAll(set2);
        return result;
    }
    
    // 对称差
    public Set<E> symmetricDifference(Set<E> set1, Set<E> set2) {
        Set<E> union = union(set1, set2);
        Set<E> intersection = intersection(set1, set2);
        return difference(union, intersection);
    }
}
```

## 应用场景

1. **数据去重**：
   - 去除重复元素
   - 唯一性检查

2. **集合运算**：
   - 求交集
   - 求并集
   - 求差集

3. **成员资格测试**：
   - 快速查找
   - 存在性判断

4. **数据比较**：
   - 共同元素分析
   - 差异元素分析

## 性能分析

### HashSet
- 添加：O(1)
- 删除：O(1)
- 查找：O(1)
- 空间复杂度：O(n)

### TreeSet
- 添加：O(log n)
- 删除：O(log n)
- 查找：O(log n)
- 空间复杂度：O(n)

## 实践建议

1. **选择合适的实现**：
   - 需要排序用TreeSet
   - 不需要排序用HashSet

2. **性能优化**：
   - 合理设置初始容量
   - 选择适当的负载因子

3. **使用注意**：
   - 处理null元素
   - 考虑线程安全
   - 注意元素可比较性