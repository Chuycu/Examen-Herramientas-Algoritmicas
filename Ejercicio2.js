function matrizCuadrada (matriz){
    let filas ;
    let validacion;
        for(i=0;i<matriz.length; i++){
        filas = matriz[i];
        for(k=0;k< matriz.length;k++){

            if(filas.length == matriz.length){
                validacion = true;
            }else{
                validacion = false
            }
        }
    }
    console.log(validacion);

}
matriz1=[
    [1,2,5],
    [5,2,5],
    [1,2,4]
]

matrizCuadrada(matriz1);