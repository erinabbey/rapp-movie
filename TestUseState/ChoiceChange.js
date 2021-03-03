import React from 'react'

class ChoiceChange extends React.Component {
    state = {
        characterObject: {}
    }
    componentDidMount(){
        fetch(`https://swapi.co/api/people/${this.props.chosenNumber}`)
        .then(resp => resp.json())
        .then(data =>{
            this.setState({
                characterObject: data
            })
        })
    }
    componentDidUpdate(prevProps){
            if(prevProps.chosenNumber !== this.props.chosenNumber){
                fetch(`https://swapi.co/api/people/${this.props.chosenNumber}`)
                .then(resp =>resp.json())
                .then(data =>{
                    this.setState({
                        characterObject: data
                    })
                })
            }
    }
    render(){
    return (
        <div>
            {
                Object.keys(this.state.characterObject).length !== 0 ?
                <div>
                    <h1>{this.state.characterObject.name}</h1>
                </div>
                :<h2>Loading</h2>
            }
        </div>
    )
}
}
export default ChoiceChange
