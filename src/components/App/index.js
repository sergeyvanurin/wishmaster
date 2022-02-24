import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Header, Main, Item, Modal} from './styles';
import Login from "./login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
        </Routes>
    </Router>
  );
}

function Home() {
  const [items, setItems] = useState([
    {
      "name": "CASOFU Burritos Blanket, Giant Flour Tortilla Throw Blanket, Novelty Tortilla Blanket for Your Family, Soft and Comfortable Flannel Taco Blanket for Kids. (Burrito-a, 60inches)",
       "url": "https://www.amazon.com/CASOFU-Tortilla-Comfortable-Burrito-60inches/dp/B07QTHK8K9/ref=sr_1_1?dchild=1&keywords=burrito+blanket&qid=1586045729&sr=8-1",
       "image": "https://m.media-amazon.com/images/I/811OenUrCyL._AC_UL320_ML3_.jpg",
       "price": "19.94"
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const onClickToggleModal = () => {
    setShowModal(!showModal);
  }

  const [NewItemName, setName] = useState("");
  const [NewItemURL, setNewItemURL] = useState("");
  const [NewItemImg, setNewItemImg] = useState("");

  function handleNewItemSubmit(event) {
    event.preventDefault();
  }


return (<div>
  <Header>
  <div>
    <a href="https://vk.com/vanur">
      <img alt="svanur" src="https://sun1-91.userapi.com/s/v1/if1/y2AQQWjOZTShMcq7vcgrrfHcthqSkoFv6CTl7jEElkZ1vfJ4QO4t07EIkWvIaRbrMOlmkCkR.jpg?size=200x266&quality=96&crop=0,0,720,960&ava=1" />
      <h1>@svanur</h1>
      <p>Personal Wishlist</p>
    </a>
  </div>
  <button onClick={onClickToggleModal}>Add Item</button>
  </Header>
  <Main>
        {items && items.length > 0
            ? <section>
                {items.map((i, k) => <Item key={`Item-${k}`}>
                    <dl>
                      <dt>...</dt>
                      <dd>Delete</dd>
                    </dl>
                    <span>${i.price}</span>
                    <img alt={i.name} src={i.image} /> 
                    <h3>{i.name}</h3>
                    <a href={i.url} target="_blank" rel="noopener noreferrer">View On Amazon</a>
                </Item>)}
              </section> 
            : <section><p>No items yet<br/><span>Start By Adding An Item</span></p></section>}
    </Main>
    <Modal show={showModal}>
      <div>
        <button onClick={onClickToggleModal}>&times;</button>
        <h1>Add Item</h1>
        <Form onSubmit={handleNewItemSubmit}>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                onChange={(e) => setName(e.target.value)}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
                onChange={(e) => setNewItemURL(e.target.value)}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Image Url</Form.Label>
            <Form.Control
                onChange={(e) => setNewItemImg(e.target.value)}
            />
            </Form.Group>
            <Button type="submit">
            Submit
            </Button>
        </Form>
      </div>
    </Modal>
    </div>);
}
