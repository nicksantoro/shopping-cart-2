import React, { Component } from 'react'

class AddItem extends Component {
  state = {
    name: null,
    quantity: null
  }

  onSubmit = (e) => {
    e.preventDefault()
    // this.props.products[this.state.name], "props")
    // console.log(this.state.name)
    // const newItem = {
    //   product: ,
    //   quantity: this.state.quantity
    // }
    // let {name, quantity} = this.state;
    // this.props.addItem(name, quantity)
    this.props.addItem(this.props.products[this.state.name], this.state.quantity)


  }

  render () {
    return (
      <div className="container my-3">
        <form onSubmit={ this.onSubmit }>
        {/* <form onSubmit={ this.onSubmit }> */}
         <p>
          <label>
            Quantity:
          </label>
            <input type="number" name="quantity" className="form-control" onChange={e => this.setState({quantity: e.target.value})}/>
          </p>
          <p>
          <label>
            Products:
          </label>
            <select className="form-control" onChange={e => this.setState({name: e.target.value})} >
              {this.props.products.map((product, index) => 
                <option value={index}>{product.name}</option>
              )}
            </select>
          </p>
          <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem
