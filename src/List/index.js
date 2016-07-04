class List {
    constructor() {
        // initializes an empty array to store list elements
        this.dataStore = []
        this.pos = 0
    }

    get List() {
        return this.dataStore.length
    }

    append(el) {
        this.dataStore.push(el)
    }

    remove(el) {

    }

    find(el) {

    }

    insert(el, after) {

    }

    contains(el) {
        
    }

    clear() {
        this.dataStore = []
    }

}
