-- PRIMER COMANDO
CREATE DATABASE IF NOT EXISTS carmanager;

USE carmanager;

CREATE TABLE vehiculo(
  placa VARCHAR(50) NOT NULL PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  capacidad INT NOT NULL,
  disponibilidad BOOLEAN NOT NULL,
  aire BOOLEAN NOT NULL,
  viajesRealizados INT NOT NULL,
  cedulaConductor VARCHAR(50) NOT NULL
);

CREATE TABLE conductor(
  cedula VARCHAR(50) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  disponibilidad BOOLEAN NOT NULL,
  ganancia FLOAT(50, 2) NOT NULL,
  viajesRealizados INT NOT NULL,
  PRIMARY KEY (cedula)
);

CREATE TABLE viajes(
  id INT NOT NULL AUTO_INCREMENT,
  placaVehiculo VARCHAR(50) NOT NULL,
  fechaInicio DATE NOT NULL,
  fechaFin DATE NOT NULL,
  ubicacion VARCHAR(50) NOT NULL,
  distancia FLOAT(50, 2) NOT NULL,
  costo FLOAT(50, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE gasto(
  id INT NOT NULL AUTO_INCREMENT,
  placaVehiculo VARCHAR(50) NOT NULL,
  fecha DATE NOT NULL,
  descripcion VARCHAR(50) NOT NULL,
  costo FLOAT(50, 2) NOT NULL,
  PRIMARY KEY (id)
);

-- SEGUNDO COMANDO

USE carmanager;

-- Insert 5 records for vehiculo table
INSERT INTO vehiculo (placa, marca, modelo, capacidad, disponibilidad, aire, viajesRealizados, cedulaConductor) VALUES
('ABC123', 'Mercedes-Benz', 'O500RSD', 50, true, true, 10, '123456789'),
('DEF456', 'Volvo', 'B12M', 45, true, true, 5, '987654321'),
('GHI789', 'Scania', 'K360IB', 55, true, true, 15, '456789123'),
('JKL012', 'MAN', "Lion's Coach", 60, true, true, 20, '321654987'),
('MNO345', 'Irizar', 'i6S', 48, true, true, 25, '789123456');

-- Insert 5 records for conductor table
INSERT INTO conductor (cedula, nombre, edad, telefono, disponibilidad, ganancia, viajesRealizados) VALUES
('123456789', 'Juan Perez', 35, '04121234567', true, 100.50, 10),
('987654321', 'Maria Rodriguez', 28, '04241234567', true, 80.25, 5),
('456789123', 'Pedro Gomez', 45, '04161234567', true, 150.75, 15),
('321654987', 'Ana Martinez', 40, '04221234567', true, 120.00, 20),
('789123456', 'Luisa Hernandez', 50, '04141234567', true, 200.00, 25);

-- Insert 5 records for viajes table
INSERT INTO viajes (placaVehiculo, fechaInicio, fechaFin, ubicacion, distancia, costo) VALUES
('ABC123', '2021-10-01', '2021-10-02', 'Caracas', 100.50, 500.00),
('DEF456', '2021-10-03', '2021-10-04', 'Maracay', 80.25, 400.00),
('GHI789', '2021-10-05', '2021-10-06', 'Valencia', 150.75, 750.00),
('JKL012', '2021-10-07', '2021-10-08', 'Barquisimeto', 120.00, 600.00),
('MNO345', '2021-10-09', '2021-10-10', 'Maracaibo', 200.00, 1000.00);

-- Insert 5 records for gasto table
INSERT INTO gasto (placaVehiculo, fecha, descripcion) VALUES
('ABC123', '2021-10-01', 'Mantenimiento preventivo', 200),
('DEF456', '2021-10-03', 'Cambio de aceite', 300),
('GHI789', '2021-10-05', 'Reparación de frenos', 400),
('JKL012', '2021-10-07', 'Cambio de neumáticos', 1200),
('MNO345', '2021-10-09', 'Reparación de motor', 2000);

