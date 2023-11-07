import React from 'react';
import Navbar from './Navbar'; // Certifique-se de importar corretamente o componente Navbar

function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center" style={{ backgroundColor: "#4E77AD" }}>
        <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11">
          {children}
        </form>
      </main>
    </div>
  );
}

export default AuthPage;
