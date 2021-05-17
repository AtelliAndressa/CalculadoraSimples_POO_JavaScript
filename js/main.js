class Calculadora {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = Number(_operand1);
        this.operand2 = Number(_operand2);
        this.operation = _operation;
    }

    setOperador1(_operand1){
        this.operand1 = _operand1;
    }

    setOperador2(_operand2){
        this.operand2 = _operand2;
    }

    setOperation(_operation){
        this.operation = _operation;
    }

    getOperador1(){
        return this.operand1;
    }

    getOperador2(){
        return this.operand2;
    }

    getOperation(){
        return this.operation
    }

    getResult() {
        if (this.operation == "+"){
            return Number(this.operand1) + Number(this.operand2);
        }
        if (this.operation == "-"){
            return this.operand1 - this.operand2;
        }
        if (this.operation == "*"){
            return this.operand1 * this.operand2;
        }
        if (this.operation == "/"){
            return this.operand1 / this.operand2;
        }
    }

    clearCalculator() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = "";
    }

}

let calc = new Calculadora();
let visor = document.getElementById("visor");
let mostrar = document.getElementById("mostrar")

function inserir(num){
    document.getElementById("visor").innerHTML += num;
}



function calcular(operand1, operation){
    calc.setOperador1(operand1);
    calc.setOperation(operation);
    visor.innerHTML = "";
    mostrar.innerHTML = operand1 + operation;
}

function resultado(operand2){
    calc.setOperador2(operand2);
    mostrar.innerHTML += operand2 + " = ";
    visor.innerHTML = calc.getResult();
    console.log(calc.setOperador2(operand2))
}

function apagar(){
    document.getElementById("visor").innerHTML = "";
    document.getElementById("mostrar").innerHTML = "";
}
