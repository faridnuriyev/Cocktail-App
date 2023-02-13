import { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CocktailService from "../../services/CocktailService";
import '../Random/random.css'

const cocktails = new CocktailService()
function Random (){
    const isMounted = useRef(false)
  
    const [cocktail,setCocktail] = useState({name: '', img: '', isAlc: '', cat: '', desc: '', ings: []})

  useEffect(() => {
    if(isMounted.current === false) {
        cocktails.getRandomCocktail()
        .then( result => {
                setCocktail( {
                    name: result.name,
                    img: result.img,
                    isAlc: result.isAlc,
                    cat: result.cat,
                    desc: result.desc,
                    ings: result.ings
                } )
            }                
        );
    }
    isMounted.current = true;
  },[])

        let {name, img, isAlc, cat, desc, ings} = cocktail
        
        return (
            <Container className="my-3">
                <Card className="border-1">
                    <Row className="bgPink">
                        <Col lg={6}>
                            <Card.Img variant="top" src={img} alt={name} />
                        </Col>
                        <Col lg={6}>
                            <Card.Body>
                                <Card.Title>
                                    <h2>{name} </h2>
                                    <small>{isAlc} - {cat}</small>
                                </Card.Title>
                                <h4>Ingredients: </h4>
                                    <ul>
                                        { ings.map( (ing, i) => ( <li key={i}>{ing}</li> ) ) }
                                    </ul>
                                <Card.Text>
                                    {desc.length > 1000 ? desc.slice(0, 1000)+ '...' : desc}
                                </Card.Text>
                            </Card.Body>  
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }

  
  export default Random;