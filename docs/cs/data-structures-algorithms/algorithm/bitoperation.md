# 位运算

位运算是直接对二进制位进行操作的运算，它具有执行效率高、节省内存的特点。在某些特定场景下，使用位运算可以大大提高程序的性能。

## 基本操作

### 1. 基本运算符

- `&`：按位与
- `|`：按位或
- `^`：按位异或
- `~`：按位取反
- `<<`：左移
- `>>`：右移
- `>>>`：无符号右移

## 常见位运算技巧

### 1. 判断奇偶性

```java
public boolean isOdd(int n) {
    return (n & 1) == 1;
}
```

### 2. 获取最低位的1

```java
public int getLowestOneBit(int n) {
    return n & (-n);
}
```

### 3. 统计二进制中1的个数

```java
public int countOnes(int n) {
    int count = 0;
    while (n != 0) {
        n = n & (n - 1);  // 清除最低位的1
        count++;
    }
    return count;
}
```

### 4. 判断是否是2的幂

```java
public boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
```

### 5. 交换两个数

```java
public void swap(int[] arr, int i, int j) {
    if (i != j) {
        arr[i] ^= arr[j];
        arr[j] ^= arr[i];
        arr[i] ^= arr[j];
    }
}
```

## 实际应用

### 1. 权限控制

```java
public class Permission {
    private static final int READ = 1;     // 001
    private static final int WRITE = 2;    // 010
    private static final int EXECUTE = 4;  // 100
    
    private int permission = 0;
    
    // 添加权限
    public void addPermission(int perm) {
        permission |= perm;
    }
    
    // 移除权限
    public void removePermission(int perm) {
        permission &= ~perm;
    }
    
    // 检查权限
    public boolean hasPermission(int perm) {
        return (permission & perm) == perm;
    }
}
```

### 2. 集合运算

```java
public class BitSet {
    private long[] bits;
    
    public BitSet(int size) {
        bits = new long[(size + 63) / 64];
    }
    
    public void add(int x) {
        bits[x / 64] |= 1L << (x % 64);
    }
    
    public void remove(int x) {
        bits[x / 64] &= ~(1L << (x % 64));
    }
    
    public boolean contains(int x) {
        return (bits[x / 64] & (1L << (x % 64))) != 0;
    }
}
```

## 性能优化

1. **内存优化**：
   - 使用位图代替布尔数组
   - 压缩数据存储

2. **计算优化**：
   - 使用位运算代替乘除运算
   - 使用位运算实现快速计算

## 应用场景

1. **数据压缩**：
   - 位图
   - 布隆过滤器

2. **性能优化**：
   - 快速计算
   - 内存节省

3. **状态表示**：
   - 权限控制
   - 标志位管理

4. **加密算法**：
   - 散列函数
   - 加密运算

## 注意事项

1. **可读性**：
   - 位运算代码往往不直观
   - 需要添加适当注释

2. **边界情况**：
   - 注意处理负数
   - 考虑整数溢出

3. **调试难度**：
   - 位运算错误难以调试
   - 建议单元测试

4. **维护成本**：
   - 代码可维护性较差
   - 需要权衡使用场景