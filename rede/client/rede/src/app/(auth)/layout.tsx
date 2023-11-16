import Navbar from './Nav'; 
import React from 'react';

function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center" style={{ backgroundColor: "#4E77AD" }}>

        <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11" style={{ width: '90%', maxWidth: '460px', height: 'auto', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.212)', borderRadius: '10px', padding: '35px' }}>
          {children}
        </form>
      </main>
    </div>
  );
}

export default AuthPage;
