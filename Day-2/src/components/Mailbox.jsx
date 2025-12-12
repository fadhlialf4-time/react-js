import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h2>Conditional Rendering dengan && Operator</h2>
      <h1>Halo!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        Anda memiliki {unreadMessages.length} pesan belum dibaca.
        </h2>
    }
    {unreadMessages.length === 0 &&
        <p>Tidak ada pesan baru.</p>
    }
    </div>
  );
}

export default Mailbox