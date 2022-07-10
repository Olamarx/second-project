import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // To update our state, we called setState!!! 
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
            )
            
        };
    // React says we have to define render
    render() {
  return (
    <div>Latitude: {this.state.lat} </div>
  )
    }
}

ReactDOM.render(
<App />,
document.querySelector('#root')
)