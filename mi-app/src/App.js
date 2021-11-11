import './App.css';
import Card from './Card';


function App() {
  return (
    <div>
      <div className="card">
        <Card titulo="Card Title" />
        <PrimaryButton text="Conocer más" type="primary" />
      </div>
    </div>
  );
}

export default App;
