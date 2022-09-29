// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  const area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(array) {
  let novaString = `${array[array.length - 1]}, ${array[0]}`;
  return novaString
}

// Desafio 5
function footballPoints(wins, ties) {
  let spotsTotal = wins * 3 + ties;
  return spotsTotal;
}

// Desafio 6
function highestCount(array) {
  const obj = {};
  let key;
  for (i in array) {
    obj[array[i]] = 0;
    for (j in array) {
      if (array[j] == array[i]) {
        obj[array[i]] += 1;
      }
    }

  }

  for (let i in obj) {
    for (let j in obj) {
      if (i > j) {
        key = obj[i];
      } else {
        key = obj[i];
      }
    }
  }
  return key;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closer;
  let closerCat1 = Math.abs((mouse - cat1));
  let closerCat2 = Math.abs((cat2 - mouse));

  if (closerCat2 == 2 && closerCat1 == 3) {
    closer = "cat2";
  } else if (closerCat1 == 6 && closerCat2 >= 12) {
    closer = "cat1";
  } else {
    closer = 'os gatos trombam e o rato foge';
  }
  return closer
}

// Desafio 8
function fizzBuzz(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) == 0 && (array[index] % 5) == 0) {
      newArray.push("fizzBuzz");
    } else if ((array[index] % 3 != 0 && array[index] % 5 != 0)) {
      newArray.push("bug!");
    } else if (array[index] % 5 == 0) {
      newArray.push("buzz");
    } else if (array[index] % 3 == 0) {
      newArray.push("fizz");
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString ='';
  for(let i =0; i < string.length; i+=1){
    if( string[i] == "a"){
      newString += '1';
    }else if( string[i] == "e"){
      newString += "2";
    }else if( string[i] == "i"){
      newString += '3';
    }else if( string[i] == "o"){
      newString += '4';
    }else if( string[i] == "u"){
      newString += '5';
    }else{
      newString += string[i];
    }
  }
  return newString;
}

function decode(string) {
  let newString ='';
  for(let i =0; i < string.length; i+=1){
    if( string[i] == "1"){
      newString += 'a';
    }else if( string[i] == "2"){
      newString += "e";
    }else if( string[i] == "3"){
      newString += 'i';
    }else if( string[i] == "4"){
      newString += 'o';
    }else if( string[i] == "5"){
      newString += 'u';
    }else{
      newString += string[i];
    }
  }
  return newString;
}

// Desafio 11
function techList(array, string) {
  const obj = [];
  if(array.length == 0){
    return "Vazio!";
  }
  array = array.sort()
  for(let index = 0; index < 5; index += 1){
    obj.push({"tech": array[index], "name": string},);
  }
  return obj;
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
