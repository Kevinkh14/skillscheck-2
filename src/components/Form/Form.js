import React, {Component} from 'react'
import './form.css'
export default class Form extends  Component{
    constructor(){
        super()
        this.initialState ={
            img: "",
            name:"",
            price:"",
        
        }
        this.handleImgInput =this.handleImgInput.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePriceInput = this.handlePriceInput.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleImgInput(e){
        this.setState({img:e.target.value})
        console.log(this.state)
    }
    handleNameInput(e){
        this.setState({name:e.target.value})
        console.log(this.state)
    }
    handlePriceInput(e){
        this.setState({price:e.target.value})
        console.log(this.state)
    }
    handleCancel(){
        this.setState(this.initialState)
        console.log(this.state)
    }


    render(){
        return(
            <main className='form'>
                <div className = 'imgHolder'></div>
                <p>Image URL:</p>
                <input type = "url" onChange ={this.handleImgInput}/>
                <p>Product Name:</p>
                <input type ="text" onChange = {this.handleNameInput}/>
                <p>Price:</p>
                <input onChange = {this.handlePriceInput}/>
                <div>
                    <button onClick = {this.handleCancel}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </main>
        )
    }
}