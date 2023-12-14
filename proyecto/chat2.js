var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
];

var saldoMinimo = 10;
var saldoMaximo = 990;

var cuentaSeleccionada = null;

function iniciarSesion() {
  var cuentaIndex = document.getElementById("cuentas").value;
  var password = document.getElementById("password").value;

  if (password === "1234") { // Password de ejemplo, puedes cambiarlo
    cuentaSeleccionada = cuentas[cuentaIndex];
    document.getElementById("operaciones").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

function consultarSaldo() {
  mostrarResultado("Saldo actual: $" + cuentaSeleccionada.saldo);
}

function ingresarMonto() {
  var monto = prompt("Ingrese el monto a ingresar:");

  if (monto !== null) {
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0) {
      cuentaSeleccionada.saldo += monto;
      mostrarResultado("Monto ingresado: $" + monto + "<br>Saldo actual: $" + cuentaSeleccionada.saldo);
    } else {
      alert("Por favor, ingresa un monto válido.");
    }
  }
}

function retirarMonto() {
  var monto = prompt("Ingrese el monto a retirar:");

  if (monto !== null) {
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0) {
      if (cuentaSeleccionada.saldo - monto >= saldoMinimo && cuentaSeleccionada.saldo - monto <= saldoMaximo) {
        cuentaSeleccionada.saldo -= monto;
        mostrarResultado("Monto retirado: $" + monto + "<br>Saldo actual: $" + cuentaSeleccionada.saldo);
      } else {
        alert("El saldo resultante no puede ser menor a $" + saldoMinimo + " ni mayor a $" + saldoMaximo);
      }
    } else {
      alert("Por favor, ingresa un monto válido.");
    }
  }
}

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML = mensaje;
}
