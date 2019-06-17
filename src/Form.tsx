import React, { Component } from "react";

interface formProps {
  handleSaveItem: (item: menuItem) => void;
}
interface menuItem {
  imgSrc: string;
  type: string;
  name: string;
  price: number;
}
class Form extends Component<formProps> {
  imgSrc: string;
  name: string;
  type: string;
  price: number;
  constructor(props: formProps) {
    super(props);
    this.name = "";
    this.imgSrc = "";
    this.type = "Side";
    this.price = 0;
  }
  render() {
    return (
      <div className="item-form row">
        <div className="container">
          <h4 className="form-header">Add Menu Item</h4>
          <div className="row">
            <form className="col-6">
              <div className="form-group row">
                <label className="col-2" htmlFor="exampleFormControlSelect1">
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
                <label className="col-2" htmlFor="nameInput">
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
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2" htmlFor="priceInput">
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
                <label className="col-2" htmlFor="exampleFormControlFile1">
                  Photo
                </label>
                <div className="col-8">
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button
                    className="btn btn-primary"
                    onClick={(e: any) => {
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
      </div>
    );
  }
}

export default Form;
