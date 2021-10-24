import React from "react";
import './App.css';
import logo from './assets/BL_Logo.jpg'

class App extends React.Component {

    url = 'https://www.bridgelabz.com/'
    constructor() {
        super();
        this.state =  {
            userName : '',
            nameError : ''
        }
    }

    //onclick function
    onClick = ($event) =>{
        console.log("save button is clicked", $event);
        window.open(this.url, "_blank");
    }
    onNameChange = (event) => {
        console.log("value is" , event.target.value);
        const nameRegex = RegExp('^[A_Z]{1}[a-zA-Z\\s]{2,}$');
        //set the title using setState method
        this.setState({userName: event.target.value})
        if (nameRegex.test(event.target.value)){
            this.setState({nameError: ''})
        } else {
            this.setState({nameError : 'Name is incorrect'})
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.userName} from Bridgelabz</h1>
                    <img src={logo} onClick={this.onClick} alt="The Bridgelabz logo : a Bridge to employment through lab works" />
                </div>
                <div>
                    <input onChange={this.onNameChange} />
                    <span className="error-output">{this.state.nameError}</span>
                </div>
            </div>
        )
    }
}
export default App;
