var array = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3],
    unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));

console.log(unique);