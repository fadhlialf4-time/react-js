import { useState } from "react";
// import LoginButton from "./components/LoginButton";
// import Mailbox from "./components/Mailbox";
// import PageStatus from "./components/PageStatus";

// import Greeting from './components/Greeting';
// function App() {
//   return (
//     <div>
//       <h2>Conditional Rendering dengan if/else</h2>
//       <Greeting isLoggedIn={true}/>
//       <Greeting isLoggedIn={false}/>
//     </div>
//   );
// }

// export default App;

// Nomor 1
function Greeting({ isLoggedIn }) {
  let content;

  if (isLoggedIn) {
    content = <h1>Selamat datang kembali!</h1>;
  } else {
    content = <h1>Silakan login terlebih dahulu.</h1>;
  }

  return <div>{content}</div>;
}

function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? <p>🟢 Online</p> : <p>🔴 Offline</p>}
    </div>
  );
}

function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h2>Halo!</h2>

      {unreadMessages.length > 0 && (
        <p>Anda punya {unreadMessages.length} pesan belum dibaca.</p>
      )}
    </div>
  );
}

export default App
