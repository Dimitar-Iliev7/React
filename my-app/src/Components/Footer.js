import React from 'react'

function Footer() {
  return (
    <div>
        <p style={{position: "absolute", bottom: "0", width: "100%", textAlign: "center"}}>Copyright &copy; {new Date().getFullYear()} Dimitar Iliev</p>
    </div>
  )
}

export default Footer