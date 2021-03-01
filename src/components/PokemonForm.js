import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPoke}) {
  const [formData, setFormData] = useState({
    name:"",
    hp:"",
    sprites: {
      front:"",
      back:""
    }
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(){
    const newPoke = {
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    fetch(`http://localhost:3001/pokemon`, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(newPoke)
    
  })
    .then((r) => r.json())
    .then(addPoke)
    setFormData({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    })
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
