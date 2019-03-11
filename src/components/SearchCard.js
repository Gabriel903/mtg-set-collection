import React from 'react'

import "./SearchCard.css"

class SearchCard extends React.Component {
    constructor() {
        super()
        this.state = {
            set: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const setValue = document.getElementById("setValue")
        // this.setState({
        //     set: event.target.value
        // })
        console.log(setValue)

        // fetch('https://api.scryfall.com')
        //     .then(resp => resp.json())
        //     console.log(resp)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
                <label>
                    <h2 className="Text-Form">Which set of magic the gathering are you looking for?</h2>
                    <input type="text" id="setValue"/>
                    <input type="submit" name="setName" placeholder="Set Name" value="Submit"/>
                </label>     
            </form>
        )
    }
}

export default SearchCard