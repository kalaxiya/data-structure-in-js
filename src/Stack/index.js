class Stack {
    constructor() {
        this.dataStore = []
    }

    get top() {
        return Math.max(this.dataStore.length, 0)
    }

    push(el) {
        this.dataStore.push(el)
    }

    pop() {
        this.dataStore.pop()
    }

    peek() {
        return this.dataStore[this.top - 1]
    }

    clear() {
        this.dataStore.length = 0
    }
}
