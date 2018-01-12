import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from './ducks/reducer';
import './Dashboard.css';
import Header from './Header';

class Profile extends Component {

    componentDidMount() {
        axios.get('/user-data/').then(response => {
            if (response.data.user) {
                this.props.login(response.data.user);
            }
    });
}
    render() {
        const { user } = this.props;
        return (
            <div>
                {user && 
                <div>
                    <div className='header-main'>{/* header bar*/}
                    <Header />
                    <div>Profile</div>
                    <Link to='/logout' style={{ textDecoration: 'none' }}><div className='link'>Logout</div></Link>
                    </div>
                </div>}

                {!user && <h1>You must login! <Link to='/'>Log in</Link></h1>}
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);