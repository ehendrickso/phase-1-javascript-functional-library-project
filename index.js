

function myEach(collection, alert) {
   let arr = Object.values(collection)
   arr.forEach(element => alert(element))
   
   return collection
}

function myMap(collection, callback) {

    let arr = Object.values(collection)
    let newArr = []
    for(let element of arr) {
        newArr.push(callback(element))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for (i; i< arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
        
    }
    return newAcc
}

function myFind(collection, predicate)  {
    let arr = Object.values(collection)
    let num = 0;
    for( let i =0; i < arr.length; i++) {
        num = arr[i];
        if (predicate(num)) {
            return num;
        }
    }
    return undefined;
    }
    myFind(collection, num => num % 2 === 0);
    

function myFilter(collection, predicate) {
    let arr = Object.values(collection)
    return arr.filter(predicate)
}
myFilter()

function mySize(collection) {
    let arr = Object.values(collection)
    return arr.length
}

function myFirst(array, n) {
    let arr = Object.values(array)
    if(arr == null)
    return void 0;
    if (n == null)
    return array[0];
    if (n < 0)
    return [];
    return(arr.slice(0, n));
}

function myLast(array, n) {
    let arr = Object.values(array)
    if(arr == null)
    return void 0;
    if (n == null)
    return array[arr.length -1];
    if (n > 0)
    return(arr.slice(-n));
    
}
function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}


