import React, { Component } from 'react';

class ProductItem extends Component{
  
    constructor(props){
        super(props);
        this.state={
            isEdit:false
        };
        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }
    
    onDelete(){
        const {onDelete,name}=this.props;
        onDelete(name);
    }
    onEdit(){
        this.setState({isEdit:true});
    }
    onEditSubmit(e){
        e.preventDefault();
        this.props.onEditSubmit(this.nameInput.value,this.priceInput.value,this.props.name);
        this.setState({
            isEdit:false
        });
    }
  render() {
    const {name,price} =this.props;
    return (
      <div className="App">
         {
             this.state.isEdit
             ?(
                <div>
                    <form onSubmit={this.onEditSubmit}>
                        <input placeholder="Name" defaultValue={name} ref={nameInput=>this.nameInput=nameInput}/>
                        <input placeholder="Price" defaultValue={price} ref={priceInput=>this.priceInput=priceInput}/>
                        <button>Save</button>
                    </form>
                </div>
             )
             :(
                <div>
                <span>{name}</span>
                {` | `}
                <span>{price}</span>
                {` | `}
                <button onClick={this.onDelete}>Delete</button>
                {` | `}
                <button onClick={this.onEdit}>Edit</button>
                </div>
              )
         }
      </div>
          
    );
  }
}

export default ProductItem;
