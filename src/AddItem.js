import React, { Component } from 'react';

class AddItem extends Component{
  
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        }
    
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.nameInput.value,this.priceInput.value);
        this.nameInput.value='';
        this.priceInput.value='';
        console.log(this.nameInput.value,this.priceInput.value);
    }
  render() {
    return (
      <div className="App">
      <form onSubmit={this.onSubmit}>
         <input placeholder="Name" ref={nameInput=>this.nameInput=nameInput}/>
         <input placeholder="Price" ref={priceInput=>this.priceInput=priceInput}/>
         <button>Add Product</button>
        </form> 
         <hr/>
               
      </div>
          
    );
  }
}

export default AddItem;
