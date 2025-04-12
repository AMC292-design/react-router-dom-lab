import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import NewLetter from './components/NewLetter/NewLetter';
function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (data) =>
  {
    const newMailbox =
    {
      _id: mailboxes.length + 1,
      ...data,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/new-letter" element={<NewLetter />} />
      </Routes>
    </>
  );
}

export default App;