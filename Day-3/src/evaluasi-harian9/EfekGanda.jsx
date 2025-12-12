// Nomor 4
import React, { useState, useEffect } from 'react';

function EfekGanda() {
  const [itung, setCount] = useState(0);
  const [nama, setName] = useState('');

  // Effect 1: Berjalan setiap kali count berubah
  useEffect(() => {
    console.log(`Count telah berubah menjadi: ${itung}`);
    document.title = `Count: ${itung}`;
  }, [itung]);

  // Effect 2: Berjalan setiap kali name berubah
  useEffect(() => {
    console.log(`Nama telah berubah menjadi: ${nama}`);
  }, [nama]);

  // Effect 3: Berjalan hanya sekali saat mounting
  useEffect(() => {
    console.log('Komponen ini pertama kali dimuat!');
    // Contoh: Mengatur event listener global yang hanya perlu sekali
    const handleKeyDown = (e) => {
      console.log(`Tombol ${e.key} ditekan.`);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Event listener keydown dihapus.');
    };
  }, []);

  return (
    <div>
      <h2>Penggunaan Multiple useEffect</h2>
      <p>Count: {itung}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah Count</button>
      <br /><br />
      <input
        type="text"
        value={nama}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama Anda"
      />
      <p>Nama: {nama}</p>
    </div>
  );
}

export default EfekGanda;