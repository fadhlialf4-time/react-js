// Nomor 2

import React, { useState, useEffect } from 'react';

function DataConsumer({ consumerId }) {
    const [consumer, aturConsumer] = useState(null);
    const [memuat, aturMemuat] = useState(true);

    useEffect(() => {
        aturMemuat(true);
        console.log(`Fetching data consumer dari consumerId: ${consumerId}`);
        
        fetch(`https://jsonplaceholder.typicode.com/users/${consumerId}`)
        .then(response => response.json())
        .then(data => {
            aturConsumer(data);
            aturMemuat(false);
        })
        .catch(error => {
            console.error('Error fetching consumer:', error);
            aturMemuat(false);
        })
    }, [consumerId]);

    if (memuat) return <p>Mengambil data consumer...</p>;
    if (!consumer) return <p>Consumer tidak ditemukan.</p>

    return (
        <div>
            <h2>Profil Consumer</h2>
            <p>Nama : {consumer.name}</p>
            <p>Email : {consumer.email}</p>
        </div>
    );
}

export default DataConsumer;
