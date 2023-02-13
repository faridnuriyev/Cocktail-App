import { useEffect, useState } from "react";
import { Card, Offcanvas } from "react-bootstrap";
import CocktailService from "../../services/CocktailService";

const cocktails = new CocktailService();
function Cocktail(props) {
  const [cocktId,setCocktId] = useState({
      id: null,
      cocktail: {}
  })
  useEffect(()=>{
    if (props.id !== cocktId.id && props.show === true) {
      cocktails.getCocktailById(props.id).then((result) => {
        setCocktId({ id: props.id, cocktail: result });
      });
    }
  },[props.show])

  const { show, cocktailShow } = props;
  const { name, img, isAlc, cat, desc, ings } = cocktId?.cocktail;
    return (
      <Offcanvas
        show={show}
        onHide={() => {
          // setCocktId({ id: null });
          setCocktId({id: null,cocktail: {name: '', img: '', isAlc :'', cat:'', desc:'', ings: []}})
          cocktailShow();
        }}
      >
        <Offcanvas.Header className="bgForCanvas" closeButton>
          <Offcanvas.Title><h2><i>Cocktail: </i>{name} </h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bgForCanvas">
          <Card className="border-1 bgForCanvas">
            <Card.Img variant="top" src={img} alt={name} />

            <Card.Body>
              <Card.Title>
                <small>
                  <b><i>{isAlc} - {cat}</i></b>
                </small>
              </Card.Title>
              <h4><i>Ingredients:</i> </h4>
              <ul>
                {ings?.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

export default Cocktail;
