const nameValidation = (name) => {
  if (name.length < 2) {
    return 'El nombre debe tener al menos 2 caracteres'

    // si el nombre tiene numeros
  } else if (name.match(/\d/)) {
    return 'El nombre no puede tener numeros'
  } else {
    return ''
  }
}

const cedulaValidation = (cedula) => {
  if (cedula.trim() === '') {
    return 'La cedula no puede estar vacia'

    // si la cedula no tiene al menos 7 digitos
  } else if (cedula.length < 7) {
    return 'La cedula debe tener al menos 7 digitos'

    // Si la cedula tiene letras
  } else if (cedula.match(/[a-z]/i)) {
    return 'La cedula no puede tener letras'
  } else {
    return ''
  }
}

const edadValidation = (edad) => {
  if (edad.trim() === '') {
    return 'La edad no puede estar vacia'

    // Si la edad no es un numero
  } else if (isNaN(edad)) {
    return 'La edad debe ser un numero'
  } else if (edad < 18) {
    return 'La edad debe ser mayor a 18'
  } else {
    return ''
  }
}

const telefonoValidation = (telefono) => {
  if (telefono.trim() === '') {
    return 'El telefono no puede estar vacio'

    // Si el telefono no tiene al menos 7 digitos
  } else if (telefono.length < 7) {
    return 'El telefono debe tener al menos 7 digitos'

    // Si el telefono tiene letras
  } else if (telefono.match(/[a-z]/i)) {
    return 'El telefono no puede tener letras'
  } else {
    return ''
  }
}

const gananciaValidation = (ganancia) => {
  if (ganancia.trim() === '') {
    return 'La ganancia no puede estar vacia'

    // Si la ganancia no es un numero
  } else if (isNaN(ganancia)) {
    return 'La ganancia debe ser un numero'
  } else if (ganancia < 0) {
    return 'La ganancia debe ser mayor a 0'
  } else {
    return ''
  }
}

const placaValidation = (placa) => {
  if (placa.trim() === '') {
    return 'La placa no puede estar vacia'

    // Si la placa no tiene al menos 7 digitos
  } else if (placa.length < 5) {
    return 'La placa debe tener al menos 5 digitos'
  } else {
    return ''
  }
}

const fechaValidation = (fecha) => {
  if (fecha.trim() === '') {
    return 'La fecha no puede estar vacia'
  } else {
    return ''
  }
}

const descripcionValidation = (descripcion) => {
  if (descripcion.trim() === '') {
    return 'La descripcion no puede estar vacia'
  } else {
    return ''
  }
}

const valorNumericoValidation = (valor) => {
  if (valor.trim() === '') {
    return 'El valor no puede estar vacio'

    // Si el valor no es un numero
  } else if (isNaN(valor)) {
    return 'El valor debe ser un numero'
  } else if (valor < 0) {
    return 'El valor debe ser mayor a 0'
  } else {
    return ''
  }
}

const stringValidation = (string) => {
  if (string.trim() === '') {
    return 'Este campo no puede estar vacio'
  } else if (string.length > 25) {
    return 'Este campo debe tener menos de 25 caracteres'
  } else {
    return ''
  }
}

export {
  nameValidation,
  stringValidation,
  cedulaValidation,
  edadValidation,
  telefonoValidation,
  gananciaValidation,
  placaValidation,
  fechaValidation,
  descripcionValidation,
  valorNumericoValidation
}
