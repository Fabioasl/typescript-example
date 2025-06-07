export function arrayUm(arr : number[]): number[]{
    let array = arr;
    let arrayQuadrado: number[] = [];
    for (let i = 0; i < arr.length; i++){
        arrayQuadrado[i] = array[i] ** 2;
    }
    return  arrayQuadrado
} 

export function arrayUmFE(arr : number[]): number[]{
    let array = arr;
    let arrayQuadrado: number[] = [];
    array.forEach((value) => {
        arrayQuadrado.push(value ** 2);
    })
    return arrayQuadrado;

}