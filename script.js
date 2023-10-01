const unidades = ["centímetros", "metros", "kilos", "gramos"]
const tasasConversion = [0.01, 100, 1000, 1, 0.001, 1024];

const conversion = (unidadOrigen, unidadFinal, valor) =>{

        const unidadOrigenLower = unidadOrigen.toLowerCase();
        const unidadFinalLower = unidadFinal.toLowerCase();

        const indiceOrigen = unidades.indexOf(unidadOrigenLower)
        const indiceFinal = unidades.indexOf(unidadFinalLower)

        if(isNaN(valor)){
            console.warn("Ingresa un valor numérico")
            return;
        }

        if(indiceOrigen === -1 || indiceFinal === -1){
            console.error("No ingresaste una unidad válida")
            return;
        }

        if(indiceOrigen === 0 && indiceFinal !== 1 || indiceOrigen === 2 && indiceFinal !== 3 || indiceOrigen === 1 && indiceFinal !== 0 || indiceOrigen === 3 && indiceFinal !== 2){
            console.error("Los tipos de medida elegidas no valen lo mismo")
            return;
        }

        const tasaConversion = tasasConversion[indiceOrigen] / tasasConversion[indiceFinal]
        const resultado = valor * tasaConversion
        
        console.log(`${valor} ${unidadOrigen} son ${resultado} ${unidadFinal}`)

        
    

    
}

let continuar = true

while (continuar) {
    const valor = parseFloat(prompt("Ingrese el valor a convertir"))
    const entrada = prompt("Indique la unidad de entrada (centímetros, metros, kilos, gramos)")
    const salida = prompt("Indique la unidad de salida (centímetros, metros, kilos, gramos)")

    conversion(entrada, salida, valor);

    const respuesta = prompt("¿Desea realizar otra conversión? (Si/No)").toLowerCase()
    if (respuesta !== "si") {
        continuar = false
    }
}

console.log("Programa finalizado")