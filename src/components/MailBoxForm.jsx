import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) =>
{
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter a Boxholder:</label>
        <input
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          required
        />
        <label>Select a Box Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
