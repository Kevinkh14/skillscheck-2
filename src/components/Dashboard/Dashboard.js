import React, {Component} from 'react'
import Product from '../Product/Product'
import './dash.css'
export default class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
            dashboard:[]
        }
      }
    render(){
        return(
            <div className ='dash'>
                {this.state.dashboard.map((dash,index)=>(
                    <Product index = {index} key = {index}
                     inventory = {this.props.inventory}
                      update = {dash.inventory} />
                    
                ))}
           {/* <Product/> */}
           </div>
        )
    }
}