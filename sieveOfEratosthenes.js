function getPrimes(max) {
  document.querySelector("#max").innerHTML = "";
  document.querySelector("#length").innerHTML = "";
  document.querySelector("#primes").innerHTML = "";
  //initialize variables
  var sieve = [], i, j, primes = [];
  //outerloop interates (inclusive) to max received from user
  // loop starts with 2, being the first prime number
  for (i = 2; i <= max; i++) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);

      /* 
      once i is greater than the square root of max,
      all factors will have been found; hence,
      the inner loop will only run up to that point
      */

      if (i <= Math.sqrt(max)) {
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
  document.querySelector("#max").innerHTML = '&nbsp;' + max;
  document.querySelector("#length").innerHTML = '&nbsp;' + primes.length;
  //display primes in a row
  for (let k = 0; k < primes.length; k++) {
    var thisPrime = document.createTextNode(" " + primes[k] + " ");
    document.querySelector('#primes').appendChild(thisPrime);
  }
  
}