function transformação(Grau){
    const celsiusExist = Grau.toUpperCase().incluides('C')
    const fahrenheiExists = Grau.toUpperCase().incluides('F')

    if(!celsiusExist && !fahrenheiExists){
       throw new Error('Grau não identificado')
    }
     let updatedDegree = Number(Grau.toUpperCase().replace("F", ""));
     let formula = fahrenhei => (fahrenhei - 32) * 5/9;
     let degreeSign = "C"

     return formula(updatedDegree) + degreeSign
}
try{
    console.log(transformação('50Z'))
}catch(error){
    console.log(error)
}