import React from 'react'

class RecommendedProducts extends React.Component{
   constructor(props){
       super(props)
       this.state ={
         products:[]
       }
   }
   render(){
       return(
           <React.Fragment>
                Recommended Products go in Here
           </React.Fragment>
       )
   }
}

export default RecommendedProducts