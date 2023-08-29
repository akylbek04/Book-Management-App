import {Button} from 'reactstrap'

export const Homepage = ({ handleUserLogin }) => {
  return (
    <div>
      <h3>Homepage</h3>
      <Button onClick={handleUserLogin} >Sign in</Button>
    </div>
  );
};
