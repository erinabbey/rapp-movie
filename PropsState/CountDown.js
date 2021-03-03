import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'



class CountDown extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            currentSecond: 0
        }

    }
componentDidMount(){
    const {second} = this.props;
    this.countdown (second);
}

coutdown(second){
    if(second === -1) return;
    // Update current second  state, khi set state se goi lai ham render
    this.state({currentSecond: second})
    // continue to count after 1s
    setTimeout(
        () =>
            this.coutdown(second - 1), 1000
        
    )
}
    render(){
        const {currentSecond}  = this.state
    return (

        <div>
            <p>{currentSecond}</p>
        </div>
    )
}}
CountDown.propTypes = {
    second: PropTypes.number.isRequired,
}

export default CountDown
