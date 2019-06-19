import React, { Component } from "react";
import { MenuProps } from "./interfaces/menu-props-interface";

class Menu extends Component<MenuProps> {
  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="menu-header row">
            <h3 className="col-4">Menu</h3>
            <div className="col text-right">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  this.props.handleShowForm();
                }}
              >
                Add Menu Item
              </button>
            </div>
          </div>
          <div className="row">
            {this.props.menuItems.map((menuItem, index) => {
              return (
                <div className="menu-card col-md-6 col-lg-4" key={index}>
                  {menuItem.imgSrc !== "" ? (
                    <img
                      src={menuItem.imgSrc}
                      alt="Food"
                      className="card-img"
                    />
                  ) : (
                    <img
                      src="http://placehold.jp/24/cccccc/ffffff/350x250.png?text=NoImage"
                      className="card-img"
                      alt="placeholder"
                    />
                  )}
                  <div className="card-info">
                    <div className="row">
                      <div className="col">{menuItem.type}</div>
                      <div className="col text-right">{menuItem.price}$</div>
                    </div>
                    <h4 className="item-name">{menuItem.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
