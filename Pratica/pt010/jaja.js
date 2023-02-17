function transformação(Grau){
    const celsiusExist = Grau.toUpperCase().incluides('C')
    const fahrenheiExists = Grau.toUpperCase().incluides('F')

    if(!celsiusExist && !fahrenheiExists){
       throw new Error('Grau não identificado')
    }
}
try{
    transformação('50F')
    trans
}catch(error){

}