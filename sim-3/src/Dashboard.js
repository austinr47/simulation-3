import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from './ducks/reducer';
import './Dashboard.css';
import Header from './Header';

class Dashboard extends Component {

    componentDidMount() {
        axios.get('/user-data/').then(response => {
            if (response.data.user) {
                this.props.login(response.data.user);
            }
    });
}


// {user && <div>Your are logged in as: 
//     <div><strong>{user.name}</strong></div>
//     <div><strong>{user.email}</strong></div>
//     <div><strong>{user.auth0_id}</strong></div>
//     <img src={user.pictureUrl} alt=''/>
//     </div>}
// {!user && <div>You must login! <Link to='/'>Log in</Link></div>}


    render() {
        const { user } = this.props;
        return (
            <div>
                {user && 
                <div>
                    <div className='header-main'>{/* header bar*/}
                    <Header />
                    <div>Dashboard</div>
                    <Link to='/logout' style={{ textDecoration: 'none' }}><div className='link'>Logout</div></Link>
                </div>
                <div> {/* top two boxes*/}
                    <div>
                        <Link to='/profile'><button>Edit Profile</button></Link>
                    </div>
                    <div></div>
                </div>
                <div> {/* bottom boxe*/}


                </div>
                </div>}

                {!user && <div>You must login! <Link to='/'>Log in</Link></div>}
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);