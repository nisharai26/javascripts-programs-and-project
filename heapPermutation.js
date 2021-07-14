function swap(list, pos1, pos2){
    const temp = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = temp;
  }
  
  function permute(list) {
  
    let out = [];

   
  list = typeof list === 'string' ? list.split('') : list;
    permuteList(list, list.length);
  
    function permuteList(list, n) {
      let i;
  
      if (n == 1) {
        out.push(list.join(''));
      } else {
        for (i = 0; i < n - 1; i++) {
          permuteList(list, n - 1);
          if (n % 2) {
            swap(list,0, n - 1);
          } else {
            swap(list,i, n - 1);
          }
        }
        permuteList(list, n - 1);
      }
    }
    return out;
  }

  
  console.log(permute('2 3 4'));
  console.log(permute('2 3 4').length);
