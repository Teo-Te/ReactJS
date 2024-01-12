import React, {Component} from 'react';

export const provider = React.createContext();

class Context extends React.Component {
  constructor() {
    super();
    this.state = {
    name: 'Teo',
    age: 19,
    changeName: this.changeName,
    changeAge: this.changeAge
  }
}
changeName = () => {
    this.setState({name: 'Arteo'})
}
changeAge = () => {
    this.setState({age: 20})
}

  render() {
    return <provider.Provider value={{...this.state}}>
        {this.props.children}
      </provider.Provider>
    
}

}
export default Context;