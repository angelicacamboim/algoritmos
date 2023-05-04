function parOuImpar(valorTotal){
    for(let i = 0; i < valorTotal; i++){
        if(i%2==1){
            console.log( i + " : número é impar" + " e resto da divisão é " + i%2)
        }
        else{
            console.log( i + " : número é par" + " e resto da divisão é " + i%2)
        }
    }
}

parOuImpar(5)