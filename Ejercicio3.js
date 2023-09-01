function filaMasLarga(matriz){
    let largo;
    let filaLarga;
    for(i=0;i<matriz.length;i++){
        largo=matriz.length
        if(matriz[i].length>largo){
            filaLarga=matriz[i];
        }
    }
    console.log(filaLarga);
}

let matriz1=[
    [1,2,5],
    [5,2,5,5,4],
    [1,2,4]
];

filaMasLarga(matriz1);