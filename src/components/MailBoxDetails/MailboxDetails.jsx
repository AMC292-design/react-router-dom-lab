import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) =>
{
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === mailboxId);
  if (!mailbox)
  {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
