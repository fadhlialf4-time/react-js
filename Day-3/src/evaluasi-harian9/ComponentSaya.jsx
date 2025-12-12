// Nomor 1

import React, { useEffect } from 'react';

function ComponentSaya() {
    useEffect(() => {
        console.log('Yeay! Komponen ini telah di-render!')
    });

    return (
        <div>
            <h1>Contoh Komponen Saya yang menggunakan useEffect</h1>
            <p>Tampilannya ada di browser</p>
        </div>
    )
}

export default ComponentSaya