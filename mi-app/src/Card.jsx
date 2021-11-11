import PrimaryButton from './PrimaryButton';
import CardTitle from './CardTitle';

const Card = ({ titulo }) => {
    return (
      <div className="card" style={{ width: "10rem" }}>
  
        <img 
            src="https://cdn7.kiwilimon.com/recetaimagen/24601/1900x1080/19545.jpg.webp" 
            className="Card image cap" 
            alt="..." 
        />
          <div class="card-body">
              <CardTitle titulo={titulo} />
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <PrimaryButton text="Comprar" type="success" url="https://kodemia.mx" />
          </div>
      </div>
    );
  };

  export default PrimaryButton