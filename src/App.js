import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Adresse from './Component/Profile/Adresse';
import Fullname from './Component/Profile/Fullname';
import Profilphoto from './Component/Profile/Profilephoto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Profilphoto/>
      <Card.Body>
        <Card.Title><Fullname/></Card.Title>
        <Card.Text>
          <Adresse/>
        </Card.Text>
        <Button variant="primary" onClick={()=>clicko()}>Click</Button>
      </Card.Body>
    </Card>
  );
}

function clicko() {
return (
alert('Messaoudi mohamed Nabil')


)



}

export default App;
