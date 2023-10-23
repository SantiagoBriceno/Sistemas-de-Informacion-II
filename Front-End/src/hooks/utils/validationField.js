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
  if (placa.length < 6) {
    return false
  } else {
    return true
  }
}
// validar que sea un numero mayor a 0
const validateNumber = (number) => {
  return number > 0
}

const validateTelefono = (telefono) => {
  return telefono.match(/^[0-9]{10}$/)
}

// VALIDA UNA FECHA EN FORMATO YYYY-MM-DD
const validateFecha = (fecha) => {
  return fecha.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
}

// VALIDAR QUE SEA SOLO TEXTO
const validateText = (text) => {
  const regex = /^[a-zA-Z ]+$/
  return regex.test(text)
}

export {
  validateCedula,
  validatePlaca,
  validateNumber,
  validateTelefono,
  validateFecha,
  validateText
}
