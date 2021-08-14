import React, { useContext, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';
import { AuthContext } from '../context/authContext';
import Search from './Search';
import './Nav.css';
import uTrainEmblem from '../assets/uTrainEmblem.png';

const Nav = () => {
    const { state, dispatch } = useContext(AuthContext);
    let history = useHistory();

    const { user } = state;

    const logout = () => {
        auth().signOut();
        dispatch({
            type: 'LOGGED_IN_USER',
            payload: null
        });
        history.push('/login');
    };
// NOTE
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link style={{fontFamily: 'orpheus-pro', fontSize: '28px'}} className="navbar-brand" to="/">
                <div className='uTrainEmblemContainer'>
                    <img className='uTrainEmblem' src={uTrainEmblem} alt='' />
                </div> 
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                        <Link className="nav-link" to="/breakdown">
                            Breakdown
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/calculator">
                            Calculator
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/calendar">
                            Calendar
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/gains">
                            Gains
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/input">
                            Input
                        </Link>
                    </li>



                    {/* {user && (
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">
                                {user && user.email.split('@')[0]}
                            </Link>
                        </li>
                    )} */}

                    {/* {!user && (
                        <Fragment>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>
 
                        </Fragment>
                    )} */}
                    {/* {user && (
                        <li className="nav-item">
                            <a onClick={logout} href="/login" className="nav-item nav-link">
                                Logout
                            </a>
                        </li>
                    )} */}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
