import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const {name, location} = this.props; // this is short cut of props and we can use like this also 
        return (
            <div className="userDiv">
                {/* without shortcut we can use like this  */}
              <h2>Name: {this.props.name}</h2> 
              {/* with short cut we can use this like  */}
              <h3>Location: {location}</h3>
              <h4>Twitter: @nandish123</h4>
            </div>
          );
    }
    
}

export default UserClass;