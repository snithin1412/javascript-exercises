// DEEP COMPARISON OBJECTS
console.log("\n\ DEEP COMPARISON OBJECTS");


function deepEqual(obj1, obj2) {
    if (!(typeof obj1 == "object" && obj1!=null) && (typeof obj2 == "object" && obj2!=null)) {
        return false;
    }
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
        return false;
    }
    
    for (key in obj1) {
        if (typeof obj1[key] == "object") {
            return deepEqual(obj1[key], obj2[key]);
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
        
    }
    return true;
    
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));