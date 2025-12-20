import { useParams } from 'react-router-dom';

function Indonesia() {
    const { republicId } = useParams();

    return (
        <div>
            <h2>Profil Indonesia</h2>
            <p>ID Negara : {republicId}</p>
            <p>Indonesia, dengan nama resmi Republik Indonesia, adalah sebuah negara di Asia Tenggara dan Oseania, antara Samudra Hindia dan Samudra Pasifik. Indonesia merupakan negara lintas benua karena diapit oleh benua Asia dan Australia (Oseania). Selain itu, Indonesia juga menjadi wilayah pertemuan Samudra Pasifik dan Samudra Hindia, serta menjadi salah satu negara yang dilalui oleh khatulistiwa. Indonesia memiliki luas wilayah sebesar 1.904.569 km², sehingga menjadikannya sebagai negara terluas ke-14 dunia.</p>
            <p>Indonesia merupakan negara kepulauan sejati dan menjadi negara kepulauan terbesar di dunia, dengan jumlah pulau sebesar 17.380 pulau (2024). Nama alternatif yang dipakai untuk kepulauan Indonesia disebut Nusantara.Selain itu, Indonesia juga menjadi negara berpenduduk terbanyak ke-4 di dunia dengan penduduk mencapai 275.344.166 jiwa pada tahun 2022.</p>
        </div>
    )
}

export default Indonesia;