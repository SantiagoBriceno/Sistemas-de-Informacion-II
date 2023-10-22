// Si hay un caracter que no sea un numero, retorna false
const validateCedula = (cedula) => {
  if (cedula.length < 7) {
    return false
  } else {
    const regex = /^[0-9]+$/
    return regex.test(cedula)
  }
}

const validatePlaca = (placa) => {
  if (placa.length < 7) {
    return false
  } else {
    const regex = /^[a-zA-Z0-9]+$/
    return regex.test(placa)
  }
}
// validar que sea un numero mayor a 0
const validateNumber = (number) => {
  return number > 0
}

const validateTelefono = (telefono) => {
  return telefono.match(/^[0-9]{10}$/)
}

// valida una fecha en formato dd/mm/yyyy
const validateFecha = (fecha) => {
  return fecha.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/)
}

export {
  validateCedula,
  validatePlaca,
  validateNumber,
  validateTelefono,
  validateFecha
}
