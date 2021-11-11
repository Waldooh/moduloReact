import PrimaryButton from '../Buttons/PrimaryButton';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardImage from './CardImage'

const Card = ({ titulo, img, text, linkBtn }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>

        <CardImage 
          url={img}
        />
          
          <div class="card-body">
            <CardTitle titulo={titulo} />
            <CardText text={text} />
            <PrimaryButton 
            text="Comprar" type="success" url={linkBtn} />
          </div>
      </div>
    );
  };

  export default Card