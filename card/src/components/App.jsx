import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      des={contact.des}
      image={contact.imgURL}
      price={contact.price}
      
    />
  );
}

function App() {
  return (
    <div>
      <center>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </center>
    </div>
    
  );
}

export default App;
