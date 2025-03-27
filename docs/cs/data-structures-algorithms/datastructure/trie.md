# 字典树

## 定义
字典树（Trie树）是一种树形数据结构，用于高效地存储和检索字符串。每个节点表示一个字符，从根节点到某一节点的路径表示一个字符串。

## 特点
1. 以空间换时间：使用额外的空间来提高检索效率
2. 共享前缀：相同前缀的字符串共享存储空间
3. 查找效率高：查找时间与字符串长度相关，而与字典树中的字符串数量无关
4. 适合前缀匹配：可以快速找到具有相同前缀的所有字符串

## 基本操作
1. 插入字符串：将字符串逐字符插入字典树
2. 查找字符串：判断字符串是否在字典树中
3. 删除字符串：从字典树中删除字符串
4. 前缀匹配：查找具有指定前缀的所有字符串

## 代码示例
```java
class TrieNode {
    private TrieNode[] children;
    private boolean isEndOfWord;
    
    public TrieNode() {
        children = new TrieNode[26]; // 假设只包含小写字母
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    // 插入字符串
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
    
    // 查找字符串
    public boolean search(String word) {
        TrieNode node = searchNode(word);
        return node != null && node.isEndOfWord;
    }
    
    // 查找前缀
    public boolean startsWith(String prefix) {
        return searchNode(prefix) != null;
    }
    
    // 查找节点
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
    
    // 删除字符串
    public void delete(String word) {
        delete(root, word, 0);
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
}
```

## 应用场景
1. 自动补全：输入提示系统
2. 拼写检查：检查单词拼写是否正确
3. IP路由表：网络中的路由查找
4. 字符串检索：快速查找字符串
5. 前缀匹配：查找具有相同前缀的字符串

## 优化方案
1. 压缩字典树：合并只有一个子节点的节点
2. 使用散列表代替数组存储子节点
3. 使用位图优化存储空间
4. 批量构建优化

## 注意事项
1. 内存占用：注意节点的存储效率
2. 字符集大小：根据实际需求选择合适的字符集
3. 删除操作：需要考虑节点共享问题
4. 并发访问：需要考虑线程安全