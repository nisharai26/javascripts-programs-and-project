const excluding = (index) => (xs) =>
[...xs.slice(0, index), ...xs.slice(index + 1)];

console.log(excluding("abc"))