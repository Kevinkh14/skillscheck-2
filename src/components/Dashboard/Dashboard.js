import React, {Component} from 'react'
import Product from '../Product/Product'
import './dash.css'
export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state ={
            dashboard:[]
        }
        this.update = this.update.bind(this)
      }

      update (dashboard){
          this.setState({dashboard:dashboard})
      }

    render(){
        return(
            <div className ='dash'>
                {this.state.dashboard.map((dash,index)=>(
                    <Product index = {index} key = {index}
                        item ={dash.item}
                      update = {this.update} />
                    
                ))}
           {/* <Product/> */}
           </div>
        )
    }
}