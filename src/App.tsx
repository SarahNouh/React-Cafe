import React, { Component } from "react";
import "./App.scss";
import Menu from "./Menu";
import Form from "./Form";
interface menuItem {
  imgSrc: string;
  type: string;
  name: string;
  price: number;
}
interface appState {
  renderForm: boolean;
  menuItems: menuItem[];
}
class App extends Component<{}, appState> {
  constructor({}) {
    super({});
    this.state = {
      renderForm: false,
      menuItems: [
        {
          imgSrc: require("./images/pizza.jpg"),
          type: "Main Course",
          name: "Pizza",
          price: 5
        },
        {
          imgSrc: require("./images/pasta.jpg"),
          type: "Main Course",
          name: "Pasta Pesto",
          price: 8
        },
        {
          imgSrc: require("./images/fries.jpg"),
          type: "Side",
          name: "Chilli Cheese Fries",
          price: 2
        },
        {
          imgSrc: require("./images/pizza.jpg"),
          type: "Main Course",
          name: "Shrimp Pizza",
          price: 10
        },
        {
          imgSrc: require("./images/cheese.jpg"),
          type: "Side",
          name: "Mozarella Sticks",
          price: 5
        }
      ]
    };
  }
  handleShowForm = () => {
    this.setState({
      renderForm: true
    });
  };

  handleSaveItem = (newItem: menuItem) => {
    if (newItem.name !== "") {
      let newItems = this.state.menuItems;
      newItems.push(newItem);
      this.setState({
        renderForm: false,
        menuItems: newItems
      });
    } else {
    }
  };
  render() {
    return (
      <div>
        <header className="header">
          <h2 className="title text-center">Cafe React</h2>
        </header>
        {this.state.renderForm ? (
          <Form handleSaveItem={this.handleSaveItem} />
        ) : (
          <Menu
            menuItems={this.state.menuItems}
            handleShowForm={this.handleShowForm}
          />
        )}
      </div>
    );
  }
}

export default App;
