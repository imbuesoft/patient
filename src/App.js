import React from 'react';
import ClothCard from './ClothCard';
import { Row, Col, Container } from 'react-bootstrap';

const addToCart = (itemName) => {
  // Implement your logic for adding the item to the cart
  console.log(`Added ${itemName} to cart`);
};

function App() {
  return (
    <div>
      <h1 style={{marginLeft:'30%',fontFamily: "Roboto",fontSize: "40px", fontWeight: "bold"}}>Welcome to My Clothing Store</h1>
      <Container>
      
        <Row style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse2.mm.bing.net/th?id=OIP.e_9JtjQXz44R_YNwmWhSngHaHa&pid=Api&P=0&h=180"
              name="T-Shirt"
              fabric="Cotton"
              color="White"
              size="Medium"
              price="₹500"
              addToCart={() => addToCart('T-Shirt')}
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse2.mm.bing.net/th?id=OIP.POK7Ukrg0x_AwJP8sFg8KQHaHa&pid=Api&P=0&h=180"
              name="Jeans"
              fabric="Denim"
              color="Black"
              size="32/34"
              price="₹1000"
              addToCart={() => addToCart('Jeans')}
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse4.mm.bing.net/th?id=OIP.XV6IzcULXSmYg7hS1qbuRwHaHa&pid=Api&P=0&h=180"
              name="Dress"
              fabric="Silk"
              color="Black"
              size="Small"
              price="₹5000"
              addToCart={() => addToCart('Dress')}
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse4.mm.bing.net/th?id=OIP.t1RWqVUNaRQ0q6g-0KgkuwHaLL&pid=Api&P=0&h=180"
              name="Sweater"
              fabric="Wool"
              color="Blue"
              size="Large"
              price="₹3500"
              addToCart={() => addToCart('Sweater')}
            />
          </Col>
        </Row>

        <Row style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '20px'}}>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://cdna.lystit.com/photos/0588-2014/12/02/barbour-green-sapper-waxed-jacket-product-1-25268709-1-254752183-normal.jpeg"
              name="Jacket"
              fabric="Cotton"
              color="Black"
              size="Medium"
              price="₹5000"
              addToCart={() => addToCart('Jacket')}
             
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse1.mm.bing.net/th?id=OIP.8w6LI2__NeTnHkQo2AgyTAHaJM&pid=Api&P=0&h=180"
              name="Shirt"
              fabric="Denim"
              color="Blue"
              size="32/34"
              price="₹3000"
              addToCart={() => addToCart('Shirt')}
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse3.mm.bing.net/th?id=OIP.n4jpNNvMTn7mgn62HrLCNwHaHa&pid=Api&P=0&h=180"
              name="Pants"
              fabric="Silk"
              color="Yellow,Black,Blue"
              size="Small"
              price="₹2000"
              addToCart={() => addToCart('Pants')}
            />
          </Col>
          <Col xxl="3">
            <ClothCard
              imageSrc="https://tse3.mm.bing.net/th?id=OIP.vBua595Po8az4YBsMooGFQHaHa&pid=Api&P=0&h=180"
              name="Shoes"
              fabric="Wool"
              color="Blue"
              size="Large"
              price="₹5000"
              addToCart={() => addToCart('Shoes')}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
