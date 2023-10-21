import React from 'react'
import './assets/css/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_container'>
        <div className='sidebar_menu'>
          <h2>Menu</h2>
          <ul>
            <li><a href='/'>Conductores</a></li>
            <li><a href='/contact'>Vehículos</a></li>
            <li><a href='/contact'>Viajes</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
