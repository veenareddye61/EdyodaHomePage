import React, {  Component } from 'react';
import axios from 'axios';
import Card from '../Cards/card';
import Category from '../Category/category';
import Filter from '../Category/Filer/filer';



class Home extends Component  {
    constructor(props) {
        super(props);
        this.state = { 
            Data:[],
           allData:"",
        Category:[],
        loader:true,
        searchData:" "


         };
    }
    
      handleData=(value)=>{
        this.setState({searchData:value} )
        console.log(value)
    return ;
    }
    clearData=(e)=>{
      this.setState({allData:""})
      this.setState({searchData:""})
    }
    componentDidMount() {
            axios.get("https://api.edyoda.com/v1/blog/"  )
            .then((res)=>{
              this.setState({Data:res.data});
              this.setState({allData:res.data})
              this.setState({loader:false})
              // console.log(res.data)

            })
            axios.get("https://api.edyoda.com/v1/blog/postcategories/")
            .then((res)=>{
              this.setState({Category:res.data})
              // console.log(res.data)
            })
            
          }
    componentDidUpdate(){
            axios.get("https://api.edyoda.com/v1/blog/" +this.state.searchData +"/")
            .then((res)=>this.setState({Data:res.data.posts}))
            axios.get("https://api.edyoda.com/v1/blog/" +this.state.allData )
            .then((res)=>{
              this.setState({Data:res.data});
              this.setState({allData:res.data})
              this.setState({loader:false})
              // console.log(res.data)
          
            })
          }
         

    render() { 
        return ( 
          <div>

            
          <div className="asdfkitjv">
                  <div >
                     <Filter />
                  </div>

                   <div className="d-flex flex-wrap category-container " >
                     <div className="m-1 p-1 category-link">
                     <h6 onClick={this.clearData} >All</h6>
                     </div>
                       {this.state.Category.map((item,index)=>(<Category onSet={this.handleData}
                       {...item} key={index}/>))}
                    </div>
                    <div className="d-flex flex-wrap">
                      {this.state.loader ? <h1>Loading..!</h1> :  this.state.Data.map((item,index)=>(<Card {...item} key={index} />))}  
                    </div>
          </div>
          </div>  
              
        );
    }
   
}

 
export default Home;





               
    
