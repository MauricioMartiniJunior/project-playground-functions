// Desafio 11
function generatePhoneNumber(array){
  let phone = '';
  const dict = {};
  if(array.length != 11){
    return "Array com tamanho incorreto.";
  };
  for(let i in array){
    dict[array[i]] = 0;
    for(let j in array){
      if(array[i] == array[i]){
        dict[array[i]] += 1;
        if(dict[array[i]] == 3){
          return 'não é possivel gerar um número de telefone com esses valores';
        };
      };
    
    if( array[i] < 0 || array[i] > 9 ){
      return 'não é possível gerar um número de telefone com esses valores';
    };
  }
  
  for(let i = 0; i < array.length; i += 1 ){  

    let num = array[i].toString();

    if(i == 1){
      phone = `(${array[i-1]}${array[i]}) `  ;
    }else if(i == 7){
      phone += `-${num}`
    }else{
      phone += (num);
    } 
  } 
  return phone;
}
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
