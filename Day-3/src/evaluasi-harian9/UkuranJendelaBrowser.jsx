// Nomor 3

import React, { useState, useEffect } from 'react';

function UkuranJendelaBrowser() {
    const [lebar, aturLebar] = useState(window.innerWidth);
    const [tinggi, aturTinggi] = useState(window.innerHeight);

    useEffect(() => {
        const kendaliUkuran = () => {
            aturLebar(window.innerWidth);
            aturTinggi(window.innerHeight);
        };

        window.addEventListener('resize', kendaliUkuran);
        console.log('Event listener "resize" ditambahkan');

        return () => {
            window.removeEventListener('resize', kendaliUkuran);
            console.log('Event listener "resize" dihapus');
        };
    }, []);

    return (
        <div>
            <h2>Ukuran Jendela Browser</h2>
            <p>Lebar : {lebar}px</p>
            <p>Tinggi : {tinggi}px</p>
        </div>
    );
}

export default UkuranJendelaBrowser
