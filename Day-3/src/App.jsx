// import MyComponent from "./components/MyComponent";
// import Timer from "./components/Timer"
// import UserProfile from "./components/UserProfile"
// import WindowSizeTracker from "./components/WindowSizeTracker"
// import MultiEffectComponent from "./components/MultiEffectComponent";


// function App() {
    //   return (
        // {/* <MyComponent/>
        // <Timer/>
        // <UserProfile/>
        // <WindowSizeTracker/>
        // <MultiEffectComponent/> */}
        // /* <ComponentSaya/> */
        //   )
        // }
        
        // ====================================================================================================
        
// Nomor 1
// import ComponentSaya from "./evaluasi-harian9/ComponentSaya";

// function App() {
//     return (
//         <ComponentSaya/>
//     )
// }

// export default App

// ====================================================================================================

// Nomor 2
// import { useState } from "react"
// import DataConsumer from "./evaluasi-harian9/DataConsumer"

// function App() {
//   const [currentUserId, setCurrentUserId] = useState(1);

//   return (
//     <div>
//       <h1>Aplikasi Profil Pengguna</h1>
//       <DataConsumer consumerId={currentUserId} />
//       <button onClick={() => setCurrentUserId(prevId => prevId + 1)}>
//         Lihat Pengguna Berikutnya
//       </button>
//     </div>
//   );
// }

// export default App;

// ====================================================================================================

// Nomor 3
// import { useState } from "react";
// import UkuranJendelaBrowser from "./evaluasi-harian9/UkuranJendelaBrowser";

// function App() {
//     const [tampilUkuran, aturTampilUkuran] = useState(true);

//     return (
//         <div>
//             <h1>Aplikasi Pelacak Ukuran Jendela</h1>
//             <button onClick={() => aturTampilUkuran(prev => !prev)}>
//                 {tampilUkuran ? 'Sembunyikan' : 'Tunjukkan'} Pelacak
//             </button>
//             {tampilUkuran && <UkuranJendelaBrowser/>}
//         </div>        
//     );
// }

// export default App

// ====================================================================================================

//Nomor 4
// import EfekGanda from "./evaluasi-harian9/EfekGanda";

// function App() {
//     return (
//         <EfekGanda/>
//     )
// }

// export default App

// ====================================================================================================

// Nomor 5
import SimulasiFetchData from "./evaluasi-harian9/SimulasiFetchData";

function App() {
    return (
        <SimulasiFetchData/>
    )
}

export default App