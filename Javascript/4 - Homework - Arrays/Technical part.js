function filterBy(arr, type) {
    let newArr = arr.filter((item => {
        return typeof(item) !== type ? true : false;
    }))

    return newArr;
}


let tmp = ['hello', 'world', 23, '23', null];

console.log(filterBy(tmp,"string"));

