class Store {
    constructor(nameStore, owner) {
        this.nameStore = nameStore;
        this.owner = owner;
    }
    product(...arg) {
        const items = [];
        let x;
        for (x of arg) {
            items.push(x);
        }
        return items;
    }
}

class Customer {
    constructor(name, buyItem) {
        this.name = name;
        this.order = buyItem;
    }
}


export { Store, Customer };