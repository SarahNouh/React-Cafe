import React, { Component } from "react";
import "./App.scss";
import Menu from "./Menu";
import Form from "./Form";
interface menuItem {
  /**
   *the src of the image
   *@type string
   */
  imgSrc: string;
  /**
   *the item type (side or main course)
   *@type string
   */
  type: string;
  /**
   *the item name
   *@type string
   */
  name: string;
  /**
   *the item price
   *@type number
   */
  price: number;
}
interface appState {
  /**
   *controls the form display (if set to true display form else display menu)
   *@type boolean
   */
  renderForm: boolean;
  /**
   *An array of the menu items
   *@type menuItem[]
   */
  menuItems: menuItem[];
  /**
   *if set to true display validation message
   *@type string
   */
  formError: boolean;
}
class App extends Component<{}, appState> {
  constructor(props: {}) {
    super(props);
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
      ],
      formError: false
    };
  }
  /**
   * A function invoked to handle displaying the form on button click
   *
   * @public
   */
  handleShowForm = () => {
    this.setState({
      renderForm: true
    });
  };
  /**
   * a function invoked to handle adding a new item on clicking the save button
   * @param {newItem} menuItem
   * @public
   */
  handleSaveItem = (newItem: menuItem) => {
    //if the data is entered
    if (newItem.name !== "" && newItem.price > 0) {
      //add new item to list
      let newItems = this.state.menuItems;
      newItems.push(newItem);
      //update state to render changes
      this.setState({
        renderForm: false,
        menuItems: newItems,
        formError: true
      });
    } else {
      //set state to display validation message instead
      this.setState({
        renderForm: true,
        formError: true
      });
    }
  };
  render() {
    return (
      <div>
        <header className="header">
          <h2 className="title text-center">Cafe React</h2>
        </header>
        {this.state.renderForm ? (
          <Form
            handleSaveItem={this.handleSaveItem}
            error={this.state.formError}
          />
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
