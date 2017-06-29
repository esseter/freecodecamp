/* Return the number of total permutations of the provided string
that don't have repeated consecutive letters. Assume that all characters
in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
don't have the same letter (in this case a) repeating.


Here are some helpful links:

Permutations
RegExp

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.
*/



function permAlone(str) {
  var re=/(.)\1/;
  function check(p,o){
    if(o.length){
      var sum=0;
      for(var i=0;i<p.length+1;i++){
        sum+=check(p.slice(0,i).concat(o[0]).concat(p.slice(i)),o.slice(1));
      }
      return sum;
    }
    else return !re.test(p.join(''));
  }
  return check([],str.split(''));
}


permAlone('aab');
