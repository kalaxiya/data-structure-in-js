class List {
    constructor() {
        // initializes an empty array to store list elements
        this.dataStore = []

        // current position
        this.pos = 0
    }

    get size() {
        return this.dataStore.length
    }

    get currPos() {
        return this.pos
    }

    append(el) {
        this.dataStore.push(el)
    }

    prepend(el) {
        this.dataStore.unshift(el)
    }

    remove(el) {
        const foundIndex = this.findIndex(el)
        if (foundIndex > -1) {
            this.dataStore.splice(foundIndex, 1)
            return true
        }

        return false
    }

    findIndex(el) {
        return this.dataStore.indexOf(el)
    }

    insert(el, after) {
        const insertedPos = this.findIndex(el)
        if (insertedPos > -1) {
            this.dataStore.splice(insertedPos, 0, el)
        }
    }

    contains(el) {
        return this.dataStore.indexOf(el) > -1
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.size - 1
    }

    next() {
        if (this.pos < this.size - 1) {
            ++this.pos
        }
    }

    prev() {
        if (this.pos > 0) {
            --this.pos
        }
    }

    moveTo(pos) {
        this.pos = pos
    }

    getElement() {
        return this.dataStore[this.pos]
    }

    clear() {
        this.dataStore.length = 0
    }
}
