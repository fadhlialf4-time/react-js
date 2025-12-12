import { useState } from "react";
import LoginButton from "./components/LoginButton";
import Mailbox from "./components/Mailbox";
import PageStatus from "./components/PageStatus";

function App() {
  const [showWarning, setShowWarning] = React.useState(true);
  const [dataStatus, setDataStatus] = React.useState('loading');

  const toggleWarning = () => {
    setShowWarning(prev => !prev);
  };

  const changeStatus = () => {
    const statuses = ['loading', 'success', 'error', 'unknown'];
    const currentIndex = statuses.indexOf(dataStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setDataStatus(statuses[nextIndex]);
  };

  return (
    <div>
      <h2>Conditional Rendering dengan Switch Statement</h2>
      {showWarning && (
        <div style={{backgroundColor: 'yellow', padding: '10px', border: '1px solid orange'}}>
          Peringatan!
        </div>
      )}
      
      <WarningBanner warn={showWarning} />
      <button onClick={toggleWarning}>
        {showWarning ? 'Sembunyikan' : 'Tampilkan'} Peringatan
      </button>

      <hr />

      <h3>Status Data:</h3>
      <PageStatus status={dataStatus} />
      <button onClick={changeStatus}>Ubah Status</button>
    </div>
  );
}

export default App;