import React, { Component } from "react";
import { formProps } from "./interfaces/form-props-interface";
class Form extends Component<formProps> {
  /**
   *the src of the image
   *@type string
   */
  imgSrc: string;
  /**
   *the item name
   *@type string
   */
  name: string;
  /**
   *the item type (side or main course)
   *@type string
   */
  type: string;
  /**
   *the item price
   *@type number
   */
  price: number;
  constructor(props: formProps) {
    super(props);
    //set initial values for item data
    this.name = "";
    this.imgSrc = "";
    this.type = "Side";
    this.price = 0;
  }

  onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event.target as any).files && (event.target as any).files[0]) {
      this.imgSrc = URL.createObjectURL((event.target as any).files[0]);
    }
  };
  render() {
    return (
      <div className="item-form container">
        <h4 className="form-header">Add Menu Item</h4>
        <div className="row">
          <form className=" col-12 col-md-6">
            <div className="form-group row">
              <label
                className="col-4 col-md-2"
                htmlFor="exampleFormControlSelect1"
              >
                Type
              </label>
              <div className="col-8">
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    this.type = e.target.value;
                  }}
                >
                  <option>Side</option>
                  <option>Main Course</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4 col-md-2" htmlFor="nameInput">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter Item Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    this.name = e.target.value;
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4 col-md-2" htmlFor="priceInput">
                Price
              </label>
              <div className="col-8">
                <input
                  type="number"
                  className="form-control"
                  id="priceInput"
                  placeholder="Enter Item Price"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    this.price = Number(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-4 col-md-2"
                htmlFor="exampleFormControlFile1"
              >
                Photo
              </label>
              <div className="col-8">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={this.onImageChange}
                />
              </div>
            </div>
            <div className="form-group row">
              {this.props.error ? (
                <p className="col-12 error-msg">
                  Please enter the name and price
                </p>
              ) : null}

              <div className="col-sm-10">
                <button
                  className="btn btn-primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    this.props.handleSaveItem({
                      imgSrc: this.imgSrc,
                      type: this.type,
                      name: this.name,
                      price: this.price
                    });
                  }}
                >
                  Save Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
