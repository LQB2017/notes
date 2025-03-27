# 字典树（Trie）

字典树，也称前缀树，是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这种数据结构有很多应用，特别是在字符串检索和前缀匹配方面。

## 基本概念

### 特点
1. 根节点不包含字符
2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串
3. 每个节点的所有子节点包含的字符都不相同

## 基本实现

```java
public class Trie {
    private class TrieNode {
        private TrieNode[] children;
        private boolean isEndOfWord;
        
        public TrieNode() {
            children = new TrieNode[26]; // 假设只包含小写字母
            isEndOfWord = false;
        }
    }
    
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    // 插入单词
    public void insert(String word) {
        TrieNode current = root;
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
    }
    
    // 搜索单词
    public boolean search(String word) {
        TrieNode node = searchNode(word);
        return node != null && node.isEndOfWord;
    }
    
    // 检查前缀
    public boolean startsWith(String prefix) {
        return searchNode(prefix) != null;
    }
    
    private TrieNode searchNode(String str) {
        TrieNode current = root;
        
        for (char ch : str.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        
        return current;
    }
}
```

## 高级功能

### 1. 删除操作

```java
public boolean delete(String word) {
    return delete(root, word, 0);
}

private boolean delete(TrieNode current, String word, int index) {
    if (index == word.length()) {
        if (!current.isEndOfWord) {
            return false;
        }
        current.isEndOfWord = false;
        return isEmpty(current);
    }
    
    int charIndex = word.charAt(index) - 'a';
    TrieNode node = current.children[charIndex];
    if (node == null) {
        return false;
    }
    
    boolean shouldDeleteCurrentNode = delete(node, word, index + 1);
    
    if (shouldDeleteCurrentNode) {
        current.children[charIndex] = null;
        return isEmpty(current);
    }
    
    return false;
}

private boolean isEmpty(TrieNode node) {
    for (TrieNode child : node.children) {
        if (child != null) {
            return false;
        }
    }
    return true;
}
```

### 2. 统计前缀数量

```java
public class TrieWithCount {
    private class TrieNode {
        private TrieNode[] children;
        private boolean isEndOfWord;
        private int count;  // 经过该节点的单词数量
        
        public TrieNode() {
            children = new TrieNode[26];
            isEndOfWord = false;
            count = 0;
        }
    }
    
    private TrieNode root;
    
    public TrieWithCount() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
            current.count++;
        }
        
        current.isEndOfWord = true;
    }
    
    public int countWordsStartingWith(String prefix) {
        TrieNode node = searchNode(prefix);
        return node == null ? 0 : node.count;
    }
}
```

## 应用场景

1. **自动补全**：
   - 搜索引擎的查询建议
   - IDE的代码补全
   - 输入法的联想功能

2. **拼写检查**：
   - 文本编辑器的拼写检查
   - 搜索引擎的"你是不是要找..."

3. **IP路由**：
   - 路由表的最长前缀匹配

4. **字符串检索**：
   - 敏感词过滤
   - 关键词搜索

## 性能分析

### 时间复杂度
- 插入：O(m)，m为字符串长度
- 查找：O(m)，m为字符串长度
- 删除：O(m)，m为字符串长度
- 前缀匹配：O(p)，p为前缀长度

### 空间复杂度
- O(ALPHABET_SIZE * N * M)
  - ALPHABET_SIZE：字符集大小
  - N：字符串数量
  - M：平均字符串长度

## 优化建议

1. **内存优化**：
   - 使用Map代替数组存储子节点
   - 压缩前缀（合并单一路径）

2. **功能扩展**：
   - 添加模糊匹配
   - 支持通配符
   - 实现最长公共前缀查找

3. **实现考虑**：
   - 处理大小写敏感性
   - 支持特殊字符
   - 考虑并发访问