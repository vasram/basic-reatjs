import React from "react"


 export class Footer extends React.Component{
    constructor(props){
         super();
        this.state ={
            age:props.intialAge
        }; 
    }
      
    onMakeMeOlder(){
      
        this.setState({
            age:this.state.age + 3
        });
    }
    render(){ 
    
        let dynamicValue  = 2;
        let containt= <h3> This is footer</h3>
        if (dynamicValue===2)
            {
           containt= <h3> This is footer</h3>
            }
            else 
            {
                containt=<p>This is footer</p>
            }
            console.log(containt,"containt");

        return(
           //<div>jdjk</div>
           
         

//    containt
<div>  
    <div>
     
    {  containt }
    <p> this is local item    {dynamicValue}</p>
    </div>
          
            <p> Your Name: {this.props.name}, and age :{this.props.intialAge} ,{this.props.user.hobbies[1]}</p>
            <h6>Hobbies </h6>
            <ul>
                 {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
            </ul> 
            <hr/>
                {this.props.children}
                <hr/> 
                <p>Age will increage after click :{this.state.age} </p>
                <button onClick={()=>this.onMakeMeOlder()} > Increage Age </button>
                   
                </div>
               
            
        );
    }
}
// Footer.propTypes = {
//     name: React.PropTypes.string,
//     age:  React.PropTypes.number,
//     user: React.PropTypes.object

// }
