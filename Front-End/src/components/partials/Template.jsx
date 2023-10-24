import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './assets/css/header.css'
import './assets/css/sidebar.css'
import './assets/css/footer.css'
import logo from './assets/images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header_container'>
        <div className='header_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='header_menu'>
          <ul>
            <li><a href='/'>Administrador</a></li>
            <li><a href='/contact'>Servicios TransporteAutomoviles C.A.</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_container'>
        <div className='sidebar_menu'>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to='/conductor'>Conductores</Link>
            </li>
            <li>
              <Link to='/vehiculo'>Vehículos</Link>
            </li>
            <li>
              <Link to='/viaje'>Viajes</Link>
            </li>
            <li>
              <Link to='/Gasto'>Gastos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <p>Multiservicios JoCeSanti C.A.</p>
        <p>©Derechos reservados - Powered by NodeJS - 2021</p>
      </div>
    </footer>
  )
}

const Template = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Template
