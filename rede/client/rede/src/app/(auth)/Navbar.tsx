import React from 'react';
import { FaHome } from 'react-icons/fa'; // Importe o ícone desejado

function Navbar() {
  return (
    <nav className="text-white p-4 flex justify-between" style={{ backgroundColor: "#4E77AD" }}>
       <div>
       <ul className="mr-4"> 
       <li className="ml-4"><FaHome size={50}/><a href='http://localhost:3000/login'></a></li>
       </ul>
       </div>
        
      <ul className="flex justify-end" style={{ fontWeight: "bold",fontSize: "20px", fontStyle: "italic", alignItems: 'center' }}>
        
        <li className="ml-4"><a href="/faq">SOBRE</a></li>
        <li className="ml-4"><a href="/fas">AJUDA</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
