// import { Container } from './styles';
import withAuth from '../utils/withAuth';

function Client() {

  return (
    <>
      <p>Client side</p>
    </>
  );
}

export default withAuth(Client);