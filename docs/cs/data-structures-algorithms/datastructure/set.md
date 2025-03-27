# 集合

## 定义
集合是一种存储不重复元素的数据结构，元素在集合中的顺序是无关紧要的。集合通常用于存储一组唯一的值，并支持成员检测等操作。

## 特点
1. 唯一性：集合中的元素不能重复
2. 无序性：元素在集合中的顺序不重要
3. 动态性：可以动态添加和删除元素
4. 快速查找：通常基于散列表实现，查找效率高

## 基本操作
1. 添加元素：向集合中添加新元素
2. 删除元素：从集合中移除元素
3. 查找元素：检查元素是否在集合中
4. 集合运算：并集、交集、差集等操作

## 代码示例
```java
// 使用HashSet实现集合
class CustomSet<E> {
    private HashSet<E> set;
    
    public CustomSet() {
        set = new HashSet<>();
    }
    
    // 添加元素
    public boolean add(E element) {
        return set.add(element);
    }
    
    // 删除元素
    public boolean remove(E element) {
        return set.remove(element);
    }
    
    // 检查元素是否存在
    public boolean contains(E element) {
        return set.contains(element);
    }
    
    // 获取集合大小
    public int size() {
        return set.size();
    }
    
    // 清空集合
    public void clear() {
        set.clear();
    }
    
    // 集合是否为空
    public boolean isEmpty() {
        return set.isEmpty();
    }
    
    // 并集操作
    public CustomSet<E> union(CustomSet<E> other) {
        CustomSet<E> result = new CustomSet<>();
        result.set.addAll(this.set);
        result.set.addAll(other.set);
        return result;
    }
    
    // 交集操作
    public CustomSet<E> intersection(CustomSet<E> other) {
        CustomSet<E> result = new CustomSet<>();
        for (E element : this.set) {
            if (other.contains(element)) {
                result.add(element);
            }
        }
        return result;
    }
    
    // 差集操作
    public CustomSet<E> difference(CustomSet<E> other) {
        CustomSet<E> result = new CustomSet<>();
        for (E element : this.set) {
            if (!other.contains(element)) {
                result.add(element);
            }
        }
        return result;
    }
}
```

## 应用场景
1. 去重：删除重复元素
2. 成员检测：快速判断元素是否存在
3. 数学运算：实现集合论中的各种运算
4. 数据分类：对数据进行分类和归类
5. 缓存实现：存储缓存的键或值

## 常见实现
1. 散列集（HashSet）：基于散列表实现
2. 树集（TreeSet）：基于红黑树实现，保持元素有序
3. 位集（BitSet）：使用位向量实现的特殊集合

## 性能分析
1. 添加元素：O(1)平均情况（使用散列实现）
2. 删除元素：O(1)平均情况
3. 查找元素：O(1)平均情况
4. 集合运算：O(n)，其中n为元素个数

## 注意事项
1. 选择合适的实现方式
2. 注意元素的可散列性
3. 处理并发访问
4. 考虑内存使用

## 优化方案
1. 选择合适的初始容量
2. 使用适当的负载因子
3. 实现自定义的散列函数
4. 考虑使用并发集合