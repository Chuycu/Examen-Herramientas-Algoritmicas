function filtroNumero6(array){
    let mayores6= [];
    for(i=0; i<array.length;i++){
        if(array[i]==6  || array[i]>6){
            mayores6.push(array[i])
        }
    }
    console.log(mayores6);

}

array =[2,5,6,8,4,9,5,45,4,51,5,44]

filtroNumero6(array);