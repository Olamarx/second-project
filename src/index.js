import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
  return (
    <div>Hello there</div>
  )
}

ReactDOM.render(
<App />,
document.querySelector('#root')
)