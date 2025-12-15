// Nomor 1
function MasukkanUsername({ teks, masukkanTeks }) {
    return (
        <div>
        <label> Username :</label>
        <input 
        type="text" 
        value={teks}
        onChange={(e) => masukkanTeks(e.target.value)}
        placeholder="Masukkan username"
        />
        </div>
    );
}

export default MasukkanUsername