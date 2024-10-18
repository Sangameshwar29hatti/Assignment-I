class Node {
    constructor(type, value = null) {
        this.type = type; // "operator" or "operand"
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

module.exports = Node;
