import './App.css';
import Card from './Components/Cards/Card';
import PrimaryButton from './Components/Buttons/PrimaryButton';


function App() {
  return (
    <div className="container">
      <div className="row">
        <Card titulo="Card Title" />
        <PrimaryButton text="Conocer más" type="primary" />
      </div>
    </div>
  );
}

export default App;

