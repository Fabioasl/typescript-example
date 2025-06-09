function pares(num : number){
    return num % 2 == 0;
}

export function arrayCinco(arr: number[]) : number[]{
    let array = arr;
    return array.filter(pares);
};