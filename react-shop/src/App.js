import './App.css';
import Card from './Components/Cards/Card';
import PrimaryButton from './Components/Buttons/PrimaryButton';


function App() {
  return (
    <div className="container">
      <div className="row">
        <Card 
          titulo="Tamal Verde" 
          img="https://cdn7.kiwilimon.com/recetaimagen/26779/1900x1080/24169.jpg.webp"
          text="El mejor tamal"
          linkBtn="https://www.google.com"
        />
        <Card 
          titulo="Tamal Rojo" 
          img="https://quehagodecomerhoy.com/wp-content/uploads/2018/04/Tamales-Rojos.jpg"
          text="El tamal diablo"
          linkBtn="https://kodemia.mx"
        />
        <Card 
          titulo="Tamal Dulce" 
          img="https://t1.rg.ltmcdn.com/es/images/8/8/6/tamales_de_dulce_74688_orig.jpg"
          text="El tamalito bueno"
          linkBtn="https://dev.to"
        />
        <PrimaryButton text="Conocer más" type="primary" />
      </div>
    </div>
  );
}

export default App;

