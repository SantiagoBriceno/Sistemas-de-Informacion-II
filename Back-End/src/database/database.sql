CREATE DATABASE IF NOT EXISTS carmanagement;

USE carmanagement;

CREATE TABLE vehiculo(
  id INT NOT NULL AUTO_INCREMENT,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  capacidad INT NOT NULL,
  disponibilidad BOOLEAN NOT NULL,
  aire BOOLEAN NOT NULL,
  viajesRealizados INT NOT NULL,
  idConductor INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE conductor(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  disponibilidad BOOLEAN NOT NULL,
  ganancia FLOAT(50, 2) NOT NULL,
  viajesRealizados INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE viajes(
  id INT NOT NULL AUTO_INCREMENT,
  idVehiculo INT NOT NULL,
  fechaInicio DATE NOT NULL,
  fechaFin DATE NOT NULL,
  ubicacion VARCHAR(50) NOT NULL,
  distancia FLOAT(50, 2) NOT NULL,
  costo FLOAT(50, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE gasto(
  id INT NOT NULL AUTO_INCREMENT,
  idVehiculo INT NOT NULL,
  fechaRealizacion DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
)
