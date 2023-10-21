## Conductor

### Todas los endpoint de los conductores

#### 1.- getConductores
[GET] [/api/conductores]

Response:
SUCCESS: 
{
  status: 200,
  data: [
    {
      "cedula": "123456789",
      "nombre": "Santiago Briceño",
      "edad": 35,
      "telefono": "04121234567",
      "disponibilidad": 1,
      "ganancia": 100.5,
      "viajesRealizados": 10
    },
    ...
  ]
}

#### 2.- getConductor
[GET] [api/conductores/:cedula] -- EXAMPLE: api/conductores/123456789

Response:
SUCCESS: 
{
  status: 200,
  data: 
    {
      "cedula": "123456789",
      "nombre": "Santiago Briceño",
      "edad": 35,
      "telefono": "04121234567",
      "disponibilidad": 1,
      "ganancia": 100.5,
      "viajesRealizados": 10
    }
}

#### 3.- createConductor
[POST] [/api/conductores] 

SE DEBE ENVIAR ESTOS DATOS EN BODY EN FORMATO JSON
Request.body:
{
  "cedula": "123456789",
  "nombre": "Santiago Briceño",
  "edad": 35,
  "telefono": "04121234567",
  "disponibilidad": 1,
  "ganancia": 100.5,
  "viajesRealizados": 10
}

#### 4.- editConductor
[PATCH] [/api/conductores/:cedula] -- EXAMPLE: api/conductores/123456789 

SE DEBE ENVIAR ESTOS LOS DATOS CON EL MISMO NOMBRE QUE EN LA BASE DE DATOS EN BODY EN FORMATO JSON

Request.body:
{
  "nombre": "Santiago Briceño",
  "edad": 35,
  "telefono": "04121234567",
  "disponibilidad": 1,
  "viajesRealizados": 10
}

#### 5.- deleteConductor
[DELETE] [/api/conductores/:cedula] -- EXAMPLE: api/conductores/123456789

### Todas los endpoint de vehiculos

