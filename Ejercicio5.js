function sumaArreglos(arreglo1,arreglo2,arreglo3){
    let longitud;
    if(arreglo1.length != arreglo2.length){
        if(arreglo1.length > arreglo2.length){
            longitud= arreglo1.length -arreglo2.length;
            for(l=0; l<longitud;l++){
                arreglo2.push(0);
            }
        }else{
            longitud= arreglo2.length -arreglo1.length;
            for(l=0; l<longitud;l++){
                arreglo1.push(0);
            }
        }
    }

    for(i=0; i<arreglo1.length; i++){
        arreglo3.push(arreglo1[i]+arreglo2[i])
    }
    return arreglo3;
}

let arreglo1=[1,1,1,1,1];
let arreglo2=[1,1,1,1,1,1];
let arreglo3=[];

arreglo3= sumaArreglos(arreglo1,arreglo2,arreglo3);
console.log(arreglo3);