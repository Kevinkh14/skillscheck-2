import React, {Component} from 'react'
import './form.css'
import axios from 'axios'
export default class Form extends  Component{
    constructor(props){
        super(props)
        this.initialState ={
            img: "",
            name:"",
            price:"",
            dashboard:this.props.dashboard
        }
        this.handleImgInput =this.handleImgInput.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePriceInput = this.handlePriceInput.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        axios.get("/api/shelfie")
        .then(response =>{
            console.log(response)
            this.setState({dashboard:response.data})
        })
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
    handleSubmit(e){
        e.preventDefault()
        axios.post("/api/shelfie",{
            item:this.state.name,
            item:this.state.price,
        })
        .then(response =>{
            this.setState({dashboard:response.data})
            console.log(response)
            console.log('hit')
        })
        .catch(err=>{this.setState({error:'error accured'})
        console.log(err)
    })
    }


    render(){
        return(
            <main className='form'>
                <form>
                    <div className = 'imgHolder'></div>
                    <p>Image URL:</p>
                    <input type = "url" onChange ={this.handleImgInput}/>
                    <p>Product Name:</p>
                    <input type ="text" onChange = {this.handleNameInput}/>
                    <p>Price:</p>
                    <input onChange = {this.handlePriceInput}/>
                    <div>
                        <button onClick = {this.handleCancel}>Cancel</button>
                        <button onClick = {this.handleSubmit}>Add to Inventory</button>
                    </div>
                </form>
            </main>
        )
    }
}