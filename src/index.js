import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <div className="app-container">
        <h1>Hello World</h1>
        <button>ClickMe</button>
    </div>
}


ReactDOM.render(<App/>, document.querySelector('#app'))