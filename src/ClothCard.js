import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ClothCard(props) {
  const { name, fabric, color, size, price, imageSrc } = props;

  return (
    <Card className="mb-4 rounded-4 border-0 shadow mx-auto" style={{ background: "#fff",  borderRadius: "30px" }}>
      <Card.Img variant="top" src={imageSrc} style={{ height: "200px",width: "300px",   objectFit: "cover" , borderRadius: "30px 30px 0 0"}}  />
      <Card.Body className="text-center" style={{ margin: "30px",fontFamily: "Roboto",fontSize: "22px", fontWeight: "bold" }}>
        <h1 className="mt-2 mb-4 fs-2 text-center" >{name}</h1>
        <Table borderless  className="text-center">
          <tbody>
            <tr>
              <td>Fabric</td>
              <td>:</td>
              <td>{fabric}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>:</td>
              <td>{color}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>:</td>
              <td>{size}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>:</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" style={{ background: "lightgray" }}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
