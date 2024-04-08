//Definir las funciones en el archivo JavaScript (script.js)
function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
    let eliminados = [];
    let agregados = [];

//Modificar el arreglo utilizando los métodos push(), unshift(), shift() y pop()
    mensajeInicial.pop();
    eliminados.push("C");
    mensajeInicial.shift();
    eliminados.push("Hola");
    mensajeInicial.unshift("Somos");
    agregados.push("Somos");
    mensajeInicial.push("del");
    agregados.push("del");
    mensajeInicial.push("mundo");
    agregados.push("mundo");

//Mostrar los resultados en una alerta
    alert("Arreglo inicial: " + mensajeInicial.join(", ") + "\nArreglo final: " + mensajeModificado.join(", ") + "\nValores eliminados: " + eliminados.join(", ") + "\nValores agregados: " + agregados.join(", "));
}

function operandoMetodos() {
    let numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100)); // Crear un arreglo con 10 números aleatorios
    let eliminados = [];
    let agregados = [];

//Modificar el arreglo utilizando los métodos push(), unshift(), shift() y pop()
    numeros.pop();
    eliminados.push("último elemento");
    numeros.shift();
    eliminados.push("primer elemento");
    numeros.unshift(999);
    agregados.push(999);
    numeros.push(888);
    agregados.push(888);

//Calcular la suma de todos los elementos
    let suma = numeros.reduce((total, num) => total + num, 0);

//Mostrar los resultados en una alerta
    alert("Arreglo inicial: " + numeros.join(", ") + "\nArreglo final: " + numeros.join(", ") + "\nValores eliminados: " + eliminados.join(", ") + "\nValores agregados: " + agregados.join(", ") + "\nSuma de todos los elementos: " + suma);
}
