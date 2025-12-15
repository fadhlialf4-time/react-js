//Nomor 1
function LihatProfil({ teks }) {
    return (
        <div>
            <h3>Preview Profil</h3>
            {teks ? (
                <p>Halo, {teks} !</p>
            ) : (
                <p>Silahkan masukkan username.</p>
            )}
        </div>
    );
}

export default LihatProfil;