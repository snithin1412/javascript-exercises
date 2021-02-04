// GROUP EXERCISE
console.log("\n\ GROUP EXERCISE");


class Group {
    constructor() {
        this.store = [];
    }

    has(arg) {
        if (this.store.includes(arg)) return true;
        else return false;
    }

    add(arg) {
        if(!this.has(arg)) this.store.push(arg);
    }

    delete(arg) {
        if(this.has(arg)) {
            for( let i = 0; i < this.store.length; i++){ 
                if ( this.store[i] === arg) { 
                    this.store.splice(i, 1); 
                }
            }
        }
    }

    static from(value) {
        let newGroup = new Group();
        for (let i=0; i<value.length; i++) {
            newGroup.add(value[i]);
        }
        return newGroup;
    }


}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));