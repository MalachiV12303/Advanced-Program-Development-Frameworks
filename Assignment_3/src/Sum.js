class Sum {
    constructor({ total = null } = {}) {
        this.total = total;
    }
    add(val) { 
        this.total += val;
    }
    getValue() { 
        return this.total;
    }
    reset() { 
        this.total = 0;
    }
}