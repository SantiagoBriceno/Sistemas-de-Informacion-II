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
('ABC123', 'Mercedes-Benz', 'O500RSD', 50, true, true, 10, '28063634'),
('DEF456', 'Volvo', 'B12M', 45, true, true, 5, '13876567'),
('GHI789', 'Scania', 'K360IB', 55, true, true, 15, '22987899'),
('JKL012', 'MAN', "Lion's Coach", 60, true, true, 20, '11009876')

-- Insert 5 records for conductor table
INSERT INTO conductor (cedula, nombre, edad, telefono, disponibilidad, ganancia, viajesRealizados) VALUES
('28063634', 'Juan Perez', 35, '04121234567', true, 100.50, 10),
('13876567', 'Maria Rodriguez', 28, '04241234567', true, 80.25, 5),
('22987899', 'Pedro Gomez', 45, '04161234567', true, 150.75, 15),
('11009876', 'Ana Martinez', 40, '04221234567', true, 120.00, 20),
('13912345', 'Luisa Hernandez', 50, '04141234567', true, 200.00, 0),
('28612378', 'Pedro Perez', 30, '04121234568', true, 90.50, 0)

-- Insert 5 records for viajes table
INSERT INTO viajes (placaVehiculo, fechaInicio, fechaFin, ubicacion, distancia, costo) VALUES
('ABC123', '2021-10-01', '2021-10-02', 'Caracas', 100.50, 500.00),
('DEF456', '2021-10-03', '2021-10-04', 'Maracay', 80.25, 400.00),
('GHI789', '2021-10-05', '2021-10-06', 'Valencia', 150.75, 750.00),
('JKL012', '2021-10-07', '2021-10-08', 'Barquisimeto', 120.00, 600.00),
('BCD890', '2021-11-01', '2021-11-02', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-11-03', '2021-11-04', 'Caracas', 90.25, 450.00),
('BCD890', '2021-11-05', '2021-11-06', 'Valencia', 150.75, 750.00),
('BCD890', '2021-11-07', '2021-11-08', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-11-09', '2021-11-10', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-11-11', '2021-11-12', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-11-13', '2021-11-14', 'Caracas', 60.25, 300.00),
('BCD890', '2021-11-15', '2021-11-16', 'Valencia', 120.75, 600.00),
('BCD890', '2021-11-17', '2021-11-18', 'Trujillo', 90.00, 450.00),
('BCD890', '2021-11-19', '2021-11-20', 'Tachira', 150.00, 750.00),
('BCD890', '2021-11-21', '2021-11-22', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-11-23', '2021-11-24', 'Caracas', 90.25, 450.00),
('BCD890', '2021-11-25', '2021-11-26', 'Valencia', 150.75, 750.00),
('BCD890', '2021-11-27', '2021-11-28', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-11-29', '2021-11-30', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-12-01', '2021-12-02', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-12-03', '2021-12-04', 'Caracas', 60.25, 300.00),
('BCD890', '2021-12-05', '2021-12-06', 'Valencia', 120.75, 600.00),
('BCD890', '2021-12-07', '2021-12-08', 'Trujillo', 90.00, 450.00),
('BCD890', '2021-12-09', '2021-12-10', 'Tachira', 150.00, 750.00),
('BCD890', '2021-12-11', '2021-12-12', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-12-13', '2021-12-14', 'Caracas', 90.25, 450.00),
('BCD890', '2021-12-15', '2021-12-16', 'Valencia', 150.75, 750.00),
('BCD890', '2021-12-17', '2021-12-18', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-12-19', '2021-12-20', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-12-21', '2021-12-22', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-12-23', '2021-12-24', 'Caracas', 60.25, 300.00),
('BCD890', '2021-12-25', '2021-12-26', 'Valencia', 120.75, 600.00),
('BCD890', '2021-11-01', '2021-11-02', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-11-03', '2021-11-04', 'Caracas', 90.25, 450.00),
('BCD890', '2021-11-05', '2021-11-06', 'Valencia', 150.75, 750.00),
('BCD890', '2021-11-07', '2021-11-08', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-11-09', '2021-11-10', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-11-11', '2021-11-12', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-11-13', '2021-11-14', 'Caracas', 60.25, 300.00),
('BCD890', '2021-11-15', '2021-11-16', 'Valencia', 120.75, 600.00),
('BCD890', '2021-11-17', '2021-11-18', 'Trujillo', 90.00, 450.00),
('BCD890', '2021-11-19', '2021-11-20', 'Tachira', 150.00, 750.00),
('BCD890', '2021-11-21', '2021-11-22', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-11-23', '2021-11-24', 'Caracas', 90.25, 450.00),
('BCD890', '2021-11-25', '2021-11-26', 'Valencia', 150.75, 750.00),
('BCD890', '2021-11-27', '2021-11-28', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-11-29', '2021-11-30', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-12-01', '2021-12-02', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-12-03', '2021-12-04', 'Caracas', 60.25, 300.00),
('BCD890', '2021-12-05', '2021-12-06', 'Valencia', 120.75, 600.00),
('BCD890', '2021-12-07', '2021-12-08', 'Trujillo', 90.00, 450.00),
('BCD890', '2021-12-09', '2021-12-10', 'Tachira', 150.00, 750.00),
('BCD890', '2021-12-11', '2021-12-12', 'Barquisimeto', 120.50, 600.00),
('BCD890', '2021-12-13', '2021-12-14', 'Caracas', 90.25, 450.00),
('BCD890', '2021-12-15', '2021-12-16', 'Valencia', 150.75, 750.00),
('BCD890', '2021-12-17', '2021-12-18', 'Trujillo', 120.00, 600.00),
('BCD890', '2021-12-19', '2021-12-20', 'Tachira', 200.00, 1000.00),
('BCD890', '2021-12-21', '2021-12-22', 'Barquisimeto', 80.50, 400.00),
('BCD890', '2021-12-23', '2021-12-24', 'Caracas', 60.25, 300.00),
('BCD890', '2021-12-25', '2021-12-26', 'Valencia', 120.75, 600.00),
('DEF456', '2021-11-01', '2021-11-02', 'Zulia', 120.50, 600.00),
('DEF456', '2021-11-03', '2021-11-04', 'Táchira', 90.25, 450.00),
('DEF456', '2021-11-05', '2021-11-06', 'Mérida', 150.75, 750.00),
('DEF456', '2021-11-07', '2021-11-08', 'Trujillo', 120.00, 600.00),
('GHI789', '2021-11-01', '2021-11-02', 'Caracas', 120.50, 600.00),
('GHI789', '2021-11-03', '2021-11-04', 'Maracay', 90.25, 450.00),
('GHI789', '2021-11-05', '2021-11-06', 'Valencia', 150.75, 750.00),
('GHI789', '2021-11-07', '2021-11-08', 'Barquisimeto', 120.00, 600.00),
('GHI789', '2021-11-09', '2021-11-10', 'Maracaibo', 200.00, 1000.00),
('GHI789', '2021-11-11', '2021-11-12', 'Maracaibo', 80.50, 400.00),
('GHI789', '2021-11-13', '2021-11-14', 'Valencia', 60.25, 300.00),
('GHI789', '2021-11-15', '2021-11-16', 'Caracas', 120.75, 600.00),
('GHI789', '2021-11-17', '2021-11-18', 'Maracay', 90.00, 450.00),
('GHI789', '2021-11-19', '2021-11-20', 'Barquisimeto', 150.00, 750.00),
('GHI789', '2021-11-21', '2021-11-22', 'Valencia', 120.50, 600.00),
('GHI789', '2021-11-23', '2021-11-24', 'Maracaibo', 90.25, 450.00),
('GHI789', '2021-11-25', '2021-11-26', 'Maracay', 150.75, 750.00),
('GHI789', '2021-11-27', '2021-11-28', 'Barquisimeto', 120.00, 600.00),
('JKL012', '2021-11-01', '2021-11-02', 'Caracas', 120.50, 600.00),
('JKL012', '2021-11-03', '2021-11-04', 'Maracay', 90.25, 450.00),
('JKL012', '2021-11-05', '2021-11-06', 'Valencia', 150.75, 750.00),
('JKL012', '2021-11-07', '2021-11-08', 'Barquisimeto', 120.00, 600.00),
('JKL012', '2021-11-09', '2021-11-10', 'Maracaibo', 200.00, 1000.00),
('JKL012', '2021-11-11', '2021-11-12', 'Maracaibo', 80.50, 400.00),
('JKL012', '2021-11-13', '2021-11-14', 'Valencia', 60.25, 300.00),
('JKL012', '2021-11-15', '2021-11-16', 'Caracas', 120.75, 600.00),
('JKL012', '2021-11-17', '2021-11-18', 'Maracay', 90.00, 450.00),
('JKL012', '2021-11-19', '2021-11-20', 'Barquisimeto', 150.00, 750.00),
('JKL012', '2021-11-21', '2021-11-22', 'Valencia', 120.50, 600.00),
('JKL012', '2021-11-23', '2021-11-24', 'Maracaibo', 90.25, 450.00),
('JKL012', '2021-11-25', '2021-11-26', 'Maracay', 150.75, 750.00),
('JKL012', '2021-11-27', '2021-11-28', 'Barquisimeto', 120.00, 600.00),
('JKL012', '2021-11-29', '2021-11-30', 'Maracaibo', 200.00, 1000.00),
('JKL012', '2021-12-01', '2021-12-02', 'Maracaibo', 80.50, 400.00),
('JKL012', '2021-12-03', '2021-12-04', 'Valencia', 60.25, 300.00),
('JKL012', '2021-12-05', '2021-12-06', 'Caracas', 120.75, 600.00),
('JKL012', '2021-12-07', '2021-12-08', 'Maracay', 90.00, 450.00);




-- Insert 5 records for gasto table
INSERT INTO gasto (placaVehiculo, fecha, descripcion, costo) VALUES
('ABC123', '2021-10-01', 'Mantenimiento preventivo', 200),
('DEF456', '2021-10-03', 'Cambio de aceite', 300),
('GHI789', '2021-10-05', 'Reparación de frenos', 400),
('JKL012', '2021-10-07', 'Cambio de neumáticos', 1200),
('MNO345', '2021-10-09', 'Reparación de motor', 2000);
('PQR678', '2021-10-11', 'Cambio de aceite', 250),
('STU901', '2021-10-13', 'Reparación de frenos', 350),
('VWX234', '2021-10-15', 'Mantenimiento preventivo', 450),
('YZA567', '2021-10-17', 'Cambio de neumáticos', 1200),
('BCD890', '2021-10-19', 'Reparación de motor', 1800);



-- Insert 12 records for gasto table with random data where the total cost is not greater than 100
INSERT INTO gasto (placaVehiculo, fecha, descripcion, costo) VALUES
('ABC123', '2021-10-01', 'Cambio de aceite', 10),
('ABC123', '2021-10-03', 'Reparación de frenos', 20),
('DEF456', '2021-10-05', 'Mantenimiento preventivo', 15),
('DEF456', '2021-10-07', 'Cambio de neumáticos', 25),
('GHI789', '2021-10-09', 'Reparación de motor', 30),
('GHI789', '2021-10-11', 'Cambio de aceite', 10),
('JKL012', '2021-10-13', 'Reparación de frenos', 20),
('JKL012', '2021-10-15', 'Mantenimiento preventivo', 15),
('MNO345', '2021-10-17', 'Cambio de neumáticos', 25),
('MNO345', '2021-10-19', 'Reparación de motor', 30),
('PQR678', '2021-10-21', 'Cambio de aceite', 10),
('PQR678', '2021-10-23', 'Reparación de frenos', 20);
