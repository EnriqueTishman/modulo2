let cuentas = [
  { nombre: "Mali", saldo: 200, password: "claveMali" },
  { nombre: "Gera", saldo: 290, password: "claveGera" },
  { nombre: "Maui", saldo: 67, password: "claveMaui" }
];

let saldoMinimo = 10;
let saldoMaximo = 990;

let cuentaSeleccionada;
let saldo;

function iniciarSesion() {
  let seleccion = document.getElementById("cuentasDropdown").value;
  let passwordIngresado = document.getElementById("password").value;

  if (seleccion >= 0 && seleccion < cuentas.length) {
    if (passwordIngresado === cuentas[seleccion].password) {
      cuentaSeleccionada = cuentas[seleccion];
      saldo = cuentaSeleccionada.saldo;

      document.getElementById("opciones").style.display = "block";
      document.getElementById("resultado").innerHTML = "";
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
    }
  }
}

function agregarNumero(numero) {
  document.getElementById("password").value += numero;
}

function consultarSaldo() {
  document.getElementById("resultado").innerHTML = "Saldo actual: $" + saldo;
}

function ingresarMonto() {
  let monto = prompt("Ingresa el monto a ingresar:");
  monto = parseFloat(monto);

  if (!isNaN(monto) && monto +saldo <= saldoMaximo ) {
    saldo += monto;
    document.getElementById("resultado").innerHTML = "Ingresaste $" + monto + ". Nuevo saldo: $" + saldo;
  }else {
    alert("El saldo no puede ser menor a $10 y mayor a  $990.");
  }
} 

function retirarMonto() {
  let monto = prompt("Ingresa el monto a retirar:");
  monto = parseFloat(monto);

  if (!isNaN(monto) && monto > 0 && monto <= saldo && saldo - monto >= saldoMinimo) {
    saldo -= monto;
    document.getElementById("resultado").innerHTML = "Retiraste $" + monto + ". Nuevo saldo: $" + saldo;
  } else {
    alert("El saldo resultante no puede ser menor a $" + saldoMinimo + " ni mayor a $" + saldoMaximo);
  } 
}