import React from 'react';
import axios from 'axios';
  
class ConnectionTest extends React.Component {
    state = {
        details : [],
    }
  
    componentDidMount() {
        let data ;
  
        axios.get('http://localhost:8000/connectiontest/')
        .then(res => {
            data = res.data;
            this.setState({
                details : data    
            });
        }).catch(err => {})
    }
  
  render() {
    return(
      <div>
            {this.state.details.map((detail, id) =>  (
            <div key={id}>
            <div >
                  <div >
                        <h1>Nome: {detail.name} </h1>
                        <h1>Detalhe: {detail.detail} </h1>
                  </div>
            </div>
            </div>
            )
        )}
      </div>
      );
  }
}
  
export default ConnectionTest;