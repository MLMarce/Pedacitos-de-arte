function pedazoCarne(carne) {
    if (carne < 100 && carne > 0) {
        return "Hay 2 pedazos de carne";
    } else if (carne >= 100) {
        return "Hay un pedazo de carne";
    } else {
        return "No hay carne";
    }
}


function carneBuena (cant, estado) {
    if (estado === "buena" && cant > 0 && cant < 100) {
        return pedazoCarne(cant) + " buenos";
    } else if (estado === "buena" && cant >= 100) {
        return pedazoCarne(cant) + " bueno";
    } else if (estado !== "buena" && cant > 0) {
        return "Hay carne, pero no es buena";
    } else {
        return "No hay carne";
    }
}

let cant = prompt("cantidad de carne");
let estado = prompt("estado de la carne");

let resultado = carneBuena(cant, estado);

document.write(resultado);