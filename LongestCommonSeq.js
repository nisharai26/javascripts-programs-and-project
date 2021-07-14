function run(n, m, a, b) {
	/*
	* Write your code below; return type and arguments should be according to the problem's requirements
	*/
	
	
	longest_common_subseq = a.reduce(function (r, _, i, a1) {
        b.forEach(function (__, j, b1) {
            var k = 0,
                temp = [];

            while ((i + k) in a1 && (j + k) in b1 && a1[i + k] === b1[j + k]) {
                temp.push(a1[i + k]);
                k++;
            }
            if (!r.length || temp.length > r[0].length) {
                r = [temp];
                return;
            }
            if (temp.length === r[0].length) {
                r.push(temp);
            }
        });
        return r;
    }, []);
 console.log(longest_common_subseq) ;
}
run(4,4,[3,2,7,10],[2,7,15,19]);