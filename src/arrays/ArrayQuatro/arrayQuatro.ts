export function arrayQuatro(arr : number[]) : number[] {
    if(arr.length < 2){
        throw new Error("Tamanho do array deve ser no mínimo 2.");
    }    
    let array = arr.slice(0,2);
    return array;

}
