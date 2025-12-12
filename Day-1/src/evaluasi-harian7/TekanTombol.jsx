import React from 'react'

function TekanTombol() {
    const klikMouse = () => {
        alert('Tombol telah ditekan');
    };
    
    const areaDalamMouse = () => {
        console.log('Kursor menyentuh area tombol');
    };

    const areaLuarMouse = () => {
        console.log('Kursor diluar area tombol');
    };

    return (
        <div>
            <h2>Event Handler Sederhana</h2>
            <button 
            onClick={klikMouse}
            onMouseEnter={areaDalamMouse}
            onMouseLeave={areaLuarMouse}
            style={{padding: '10px 20px', fontSize: '1em', cursor: 'pointer'}}>
                Tekan atau Arahkan Kursornya
            </button>
        </div>
    );
}

export default TekanTombol