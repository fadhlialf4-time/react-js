// Nomor 5

import React, { useState, useEffect } from 'react';

function SimulasiFetchData() {
    const [data, aturData] = useState(null);
    const [memuat, aturMemuat] = useState(true);

    useEffect(() => {
        console.log('Saatnya mengambil data...');

        const hitungMundur = setTimeout(() => {
            const hasilData = {
                nama: "Fadhli",
                email: "dhliii@gmail.com",
                usia: 19
            };

            aturData(hasilData);
            aturMemuat(false);
            console.log("Data sudah selesai diambil");
        }, 2000);

        return () => {
            clearTimeout(hitungMundur);
            console.log("Proses fetch selesai!");
        };
    }, []);

    if (memuat) return <p>Waktunya mengambil data...</p>

    return (
        <div>
            <h2>Data Pengguna</h2>
            <p>Nama : {data.nama}</p>
            <p>Email : {data.email}</p>
            <p>Usia : {data.usia}</p>
        </div>
    );
}

export default SimulasiFetchData