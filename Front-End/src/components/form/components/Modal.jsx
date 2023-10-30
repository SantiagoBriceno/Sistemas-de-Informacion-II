import React from 'react'

const Modal = ({ isOpen, setOpen, children }) => {
  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'block' : 'none'
  }

  const modalContentStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
  }

  const toggleClick = (e) => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <div style={modalStyles} onClick={toggleClick}>
      <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>

      <footer className='flex justify-end mt-4'>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={toggleClick}
        >
          Cerrar
        </button>
      </footer>
    </div>
  )
}

export default Modal
