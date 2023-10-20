CREATE DATABASE IF NOT EXISTS carmanagement;


USE carmanagement;

CREATE TABLE vehiculo(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  capacidad INT NOT NULL,
  disponibilidad BOOLEAN NOT NULL,
  aire BOOLEAN NOT NULL,
  viajesRealizados INT NOT NULL,
  idConductor INT NOT NULL
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
  descripcion VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO vehiculo (id, marca, modelo, capacidad, disponibilidad, aire,viajesRealizados, idConductor)
VALUES 
  (1, 'Toyota', 'Coaster', 30, true, true, 0, 1),
  (2, 'Mercedes-Benz', 'Sprinter', 20, true, true, 0, 2),
  (3, 'Volvo', 'B7R', 40, true, true, 0, 3),
  (4, 'Scania', 'K360', 50, true, true, 0, 4),
  (5, 'MAN', "Lion's Coach", 60, true, true, 0, 5),
  (6, 'Ford', 'Transit', 15, true, false, 0, 6),
  (7, 'Chevrolet', 'Express', 25, true, false, 0, 7),
  (8, 'Nissan', 'NV350', 18, true, true, 0, 8),
  (9, 'Renault', 'Master', 30, true, true, 0, 9),
  (10,'Volkswagen', 'Transporter', 20, true, false, 0, 10);

INSERT INTO conductor (nombre, edad, telefono, disponibilidad,ganancia, viajesRealizados)
VALUES 
  ('Juan Perez', 35, '0412-1234567', true, 0, 0),
  ('Maria Rodriguez', 28, '0414-7654321', true, 0, 0),
  ('Pedro Gomez', 42, '0424-9876543', true, 0, 0),
  ('Ana Garcia', 29, '0416-5555555', true, 0, 0),
  ('Luis Hernandez', 50, '0426-1111111', true, 0, 0),
  ('Carlos Gonzalez', 38, '0412-2222222', true, 0, 0),
  ('Marta Sanchez', 45, '0414-3333333', true, 0, 0),
  ('Josefina Ramirez', 31, '0424-4444444', true, 0, 0),
  ('Rafaela Torres', 27, '0416-7777777', true, 0, 0),
  ('Jorge Fernandez', 55, '0426-8888888', true, 0, 0);

INSERT INTO viajes (idVehiculo, fechaInicio, fechaFin, ubicacion,distancia, costo)
VALUES 
  (1, '2021-10-01', '2021-10-02', 'Caracas', 100, 500),
  (2, '2021-10-03', '2021-10-04', 'Valencia', 200, 1000),
  (3, '2021-10-05', '2021-10-06', 'Maracaibo', 300, 1500),
  (4, '2021-10-07', '2021-10-08', 'Barquisimeto', 400, 2000),
  (5, '2021-10-09', '2021-10-10', 'Maturin', 500, 2500),
  (1, '2021-10-11', '2021-10-12', 'Puerto Ordaz', 600, 3000),
  (2, '2021-10-13', '2021-10-14', 'San Cristobal', 700, 3500),
  (3, '2021-10-15', '2021-10-16', 'Maracay', 800, 4000),
  (4, '2021-10-17', '2021-10-18', 'Barcelona', 900, 4500),
  (5, '2021-10-19', '2021-10-20', 'Ciudad Bolivar', 1000, 5000);

INSERT INTO gasto (idVehiculo, fechaRealizacion, descripcion)
VALUES 
  (1, '2021-10-01', 'Cambio de aceite'),
  (2, '2021-10-02', 'Cambio de frenos'),
  (3, '2021-10-03', 'Cambio de llantas'),
  (4, '2021-10-04', 'Cambio de bateria'),
  (5, '2021-10-05', 'Cambio de amortiguadores'),
  (1, '2021-10-06', 'Cambio de filtro de aire'),
  (2, '2021-10-07', 'Cambio de filtro de aceite'),
  (3, '2021-10-08', 'Cambio de filtro de gasolina'),
  (4, '2021-10-09', 'Cambio de correa de distribucion'),
  (5, '2021-10-10', 'Cambio de bujias');

