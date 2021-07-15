// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  //volume = 4/3 PI radius^3

  let volume = (4 / 3) * PI * Math.pow(radius, 3);

return volume; 

}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // volume = PI r^2 (height / 3)
let volume = PI * (radius ** 2) * (height / 3);

return volume; 

}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  //
  let volume = (height * width) * depth; 

  return volume; 
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {

volumeToFill = 0;

for (let i = 0; i < solids.length; i++) {
  if (solids[i].type === "sphere") {
    volumeToFill += sphereVolume(solids[i].radius);
  } else if (solids[i].type === "cone") {
    volumeToFill += coneVolume(solids[i].radius, solids[i].height);
  } else if (solids[i].type === "prism") {
    volumeToFill += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
  }
}
return volumeToFill;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);