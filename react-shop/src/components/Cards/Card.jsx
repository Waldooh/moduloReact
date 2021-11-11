import PrimaryButton from '../Buttons/PrimaryButton';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardImage from './CardImage';

const Card = () => {
    return (
      <div className="card" style={{ width: '18rem' }}>
  
        <CardImage src={url} />
          <div className="card-body">
            <CardTitle titulo=Tamales />
            <CardText text="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <PrimaryButton text="Comprar" type="primary" url="https://kodemia.mx" />
          </div>
      </div>
    );
  };

  export default Card