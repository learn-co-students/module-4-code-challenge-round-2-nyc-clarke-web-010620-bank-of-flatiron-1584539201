import React, { Component } from "react";

class EditForm extends Component {


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input value={this.props.editForm.date}type="date" name="date" onChange={this.props.handleEditChange}/>
            <input value={this.props.editForm.description}type="text" name="description" placeholder="Description" onChange={this.props.handleEditChange}/>
            <input value={this.props.editForm.category}type="text" name="category" placeholder="Category" onChange={this.props.handleEditChange}/>
            <input
              value={this.props.editForm.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.props.handleEditChange}
            />
          </div>
          <button  className="ui button" type="submit">
            Edit Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default EditForm;
