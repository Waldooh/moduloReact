import './App.css';
import Card from './Components/Cards/Card';
import fetchItems from './Services/fetchItems';


function App() {

  const items = fetchItems()

  console.log('items', items)
  return (
    <div className="container-fluid">
      <div className="row">
        {items.map(({ title, img, text, linkBtn, oferta }) => {
          return (
            <Card 
              title={title} 
              img={img}
              text={text}
              linkBtn={linkBtn}
              oferta={oferta}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

