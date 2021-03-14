import React,{Component} from 'react'
import sales from './data/sales.json'


class Saleslist extends Component{
    render(){
        return(
        <div class="item">
            {sales.map((saledetail,index)=>{ return<div id="gg"> <p>{saledetail.Title}</p>
            <p>{saledetail.Percentage}</p></div>
            }) }
        </div>
        )
    }
}
export default Saleslist