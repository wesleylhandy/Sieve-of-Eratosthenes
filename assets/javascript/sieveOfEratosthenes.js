document.addEventListener("DOMContentLoaded", function(){
  //set date
  document.getElementById("year").innerHTML = new Date().getFullYear();

  const maxInput = document.getElementById('max');
  const numInput = document.getElementById("num")
  const lengthOfOutput = document.getElementById('length')
  const primesOutput = document.getElementById('primes');

  function reset() {
    maxInput.innerHTML = "";
    lengthOfOutput.innerHTML = "";
    primesOutput.innerHTML = "";
  }


  function getPrimes(max) {
    //reset any previous results
    reset();
    //display user entry
    maxInput.innerHTML = '&nbsp;' + max;
    //initialize variables
    let sieve = [], i, j, primes = [], thisPrime;
    /*
    outerloop interates (inclusive) to max received from user
    loop starts with 2, being the first prime number
    */
    const innerMax = Math.sqrt(max) + 1;

    for (i = 2; i <= max; i++) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);

        /* 
        once i is greater than the square root of max,
        all factors will have been found; hence,
        the inner loop will only run up to that point
        */

        if (i < innerMax) {
          for (j = i << 1; j <= max; j += i) {
            /*
            The operator << does work in binary, adding zeros 
            to the right in effect doubling the number. For 
            example 01 (ie. 1) becomes 10 (ie. 2) becomes 100
            (ie. 4), etc, etc. The inner loop iterates by the 
            value of i up to the max, and pushes the boolean
            true at the index of sieve for j. Thus, first all
            multiples of 2, then 3, then the next prime, etc
            will be eliminated and only primes pushed into the
            primes array
            */
            sieve[j] = true;
          }
        }
      }
    }
    //display results
    lengthOfOutput.innerHTML = '&nbsp;' + primes.length;
    //display primes in a row
    primesOutput.innerHTML = primes.join(" | ");   
  }

  document.getElementById("submit").addEventListener("click", function(e){
      e.preventDefault();
      if (numInput.checkValidity()) {
        const val = numInput.value;
        getPrimes(val);
      }
  })

  document.getElementById("reset").addEventListener("click", function(e){
      reset();
  });

});