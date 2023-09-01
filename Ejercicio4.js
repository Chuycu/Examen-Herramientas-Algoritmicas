function cantidadElementosX (x,elementos2){
    for(i=0; i<x.length;i++){
        for(k=0; k<x.length; k++){
            if(x[i][k]=='2'){

                elementos2 ++;
            }
        }
    }
    return elementos2;
}

let x=[
    ['2','1','1','2'],
    ['2','2','2'],
    ['1','2','1'],
    ['2','2','2','1']
];
elementos2=0;
elementos2 =cantidadElementosX(x,elementos2);
console.log(elementos2)