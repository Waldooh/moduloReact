import PrimaryButton from '../Buttons/PrimaryButton';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImage from './CardImage';

const Card = ({ title = 'Sin titulo', img, text, linkBtn, oferta=false }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <CardImage 
          imgUrl={img}
        />
        <div className="card-body">
          <CardTitle title={title} oferta={oferta} />
          <CardBody text={text} />
          <PrimaryButton 
          text="Comprar" type="primary" url={linkBtn} />
        </div>
      </div>
    );
  };

  export default Card;