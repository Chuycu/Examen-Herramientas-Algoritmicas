function numeroMayorMatriz4x4(matriz){
    let numMayor= 0;
    for(i=0;i<matriz.length;i++){
        for(k=0;k < matriz.length;k++){
            if(matriz[i][k]>numMayor){
                numMayor =  matriz[i][k];
            }
        }
    }
    console.log(numMayor)
}

let matriz =[
[1,2,4,2],
[6,8,5,5],
[5,8,4,5],
[5,8,5,54]   
]
numeroMayorMatriz4x4(matriz);
