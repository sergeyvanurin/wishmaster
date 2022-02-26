import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Header, Main, Item, Modal} from './styles';
import {getUserId, getUser, PostNewItem, PostRemoveItem} from '../services/UserService'
import { PrivateWrapper } from '../PrivateRoute';
import Login from "./login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

export default function App() {
  return (
    <Router basename='/wishmaster'>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          <Route path="/"  element={<Navigate to="/login" />}></Route>
        </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    PostNewItem(User.id, {
      name: NewItemName,
      url: NewItemURL,
      img_url: NewItemImg,
      price: NewItemPrice
    })
      .then(Response => {
          setItems([...items, {
            name: NewItemName,
            url: NewItemURL,
            img_url: NewItemImg,
            price: NewItemPrice
          }]);
      })
      .catch(e => {
        
      });
  }

  const RemoveItem = (k) => {
    PostRemoveItem(User.id, items[k])
      .then(Response => {
        const newItems = [...items.slice(0, k), ...items.slice(k + 1)];
        setItems(newItems);
      })
      .catch(e => {

      });
  }

  const [showModal, setShowModal] = useState(false);

  const onClickToggleModal = () => {
    setShowModal(!showModal);
  }

  const [NewItemName, setNewItemName] = useState("");
  const [NewItemURL, setNewItemURL] = useState("");
  const [NewItemImg, setNewItemImg] = useState("");
  const [NewItemPrice, setNewItemPrice] = useState("");

  const [User, setUser] = useState(JSON.parse(localStorage.getItem("user")))


  function handleNewItemSubmit(event) {
    addNewItem()
    setNewItemName("");
    setNewItemURL("");
    setNewItemImg("");
    setNewItemPrice(null)
    setShowModal(!showModal);
    console.log("item added");
  }

  const handleItemRemove = (k) => {
    RemoveItem(k)
    const newItems = [...items.slice(0, k), ...items.slice(k + 1)];
        setItems(newItems);
  }

useEffect(() => {
  console.log("useEffect title");
  
  if (!User.name) {
    navigate("/login")
  }
  console.log(User.id)
  console.log(User.name)

  if (!User.id){
    getUserId(User.name).then(
    Response => {
      setUser({name: User.name, id: Response.id})
      localStorage.setItem('user', JSON.stringify(User));
    }
  )
  getUser(User.id).then(
    Response => {
      setItems(Response.items)
    }
  )
  }
}, [User, navigate])

return (
<div>
  <Header>
  <div>
    <a href="https://vk.com/vanur">
      <img alt="svanur" src="https://sun1-91.userapi.com/s/v1/if1/y2AQQWjOZTShMcq7vcgrrfHcthqSkoFv6CTl7jEElkZ1vfJ4QO4t07EIkWvIaRbrMOlmkCkR.jpg?size=200x266&quality=96&crop=0,0,720,960&ava=1" />
      <h1>{User.name}</h1>
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
                      <Button onClick={() => handleItemRemove(k)}> Delete </Button>
                    </dl>
                    <span>${i.price}</span>
                    <img alt={i.name} src={i.image} /> 
                    <h3>{i.name}</h3>
                    <a href={i.url} target="_blank" rel="noopener noreferrer">View</a>
                </Item>)}
              </section> 
            : <section><p>No items yet<br/></p></section>}
    </Main>
    <Modal show={showModal}>
      <div>
        <button onClick={onClickToggleModal}>&times;</button>
        <h1>Add Item</h1>
        <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                onChange={(e) => setNewItemName(e.target.value)}
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
            <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
                onChange={(e) => setNewItemPrice(e.target.value)}
            />
            </Form.Group>
        </Form>
        <Button onClick={handleNewItemSubmit}>
            Submit
        </Button>
      </div>
    </Modal>
    </div>);
}
