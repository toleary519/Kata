function nbYear(p0, percent, aug, p) {
  // your code

// first year = p 
// percent = (percent / 100)

// p is the population target 

// aug is the influx of people 

let i = 0;
let year = 0;
while (p0[i] < p) {
  p0 += (p0 * (percent / 2)) + aug; 
  year = year +1;
  i++;
}
return year;
};



