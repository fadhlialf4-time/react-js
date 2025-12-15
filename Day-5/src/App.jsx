// import "./App.css"
// import Calculator from "./components/Calculator"
// import CounterWithReducer from "./components/CounterWithReducer"
// import ThemedButton from "./components/ThemedButton";
// import ThemedParagraph from "./components/ThemedParagraph";
// import { ThemeProvider } from "./context/ThemeContext";

// function App() {
//   return (
//     <ThemeProvider>
//       <div style={{ padding: '20px', textAlign: 'center' }}>
//         <h2>Contoh Context API</h2>
//         <ThemedButton />
//         <ThemedParagraph />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// Nomor 1
import { useState } from 'react';
import MasukkanUsername from './evaluasi-harian11/MasukkanUsername';
import LihatProfil from './evaluasi-harian11/LihatProfile';

function App() {
  const [teks, aturTeks] = useState("")

  return (
    <div>
      <h2>Lifting State Up - Username</h2>
    
    <MasukkanUsername
    username={teks}
    masukkanTeks={aturTeks}
    />

    <LihatProfil teks={teks} />
    </div>
  );
}

export default App