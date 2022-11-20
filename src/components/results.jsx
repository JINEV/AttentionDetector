import React from "react";
export default class Results extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
        }
    }
    alertMessage = () => {
        // if(this.props.location.state===0){
            alert("Attention level: HIGH");
            console.log("hi");
        // }
        // if(this.props.location.state===1){
        //     alert("Mildly attentive.");
        //     console.log("hi");
        // }
        // if(this.props.location.state===2){
        //     alert("Very attentive!");
        //     console.log("hi");
        // }
    }
 
 render(){
    return (
        <>
            <div className = "rectangle2" style={{
                position:"absolute",
                top:0,
                left:0,
            }}/>
            <h1 style={{
                position:"absolute",
                left:600,
                right:0,
                color:"white",
                fontSize:50,
            }}>Attention Assessment:</h1>

            <button onClick={()=>this.alertMessage()} style={{
                position:"absolute",
                left:750,
                top:150,
                width:200,
                height:50,
                // background:"#5b5664",
            }}>Click me to see!</button>
        </>
    
        )
    }
};