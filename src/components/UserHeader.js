import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render(){
        const { user } = this.props
        if(!user){
            return null
        }
        return(
            <div className='header'>
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // Own props is a reference to the props that are about to be sent to this component

    // Found the individual user in mapStateToProps instead of render, that way the commponent wasnt sent a bulk of data
    return { user: state.users.find(user => user.id === ownProps.userId) }
}


export default connect(mapStateToProps)(UserHeader)