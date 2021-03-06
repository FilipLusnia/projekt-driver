import React from 'react';

import Navigation from '../Navigation/Navigation';
import GuestHome from './GuestHome';
import LoggedHome from './LoggedHome';
import Footer from '../Navigation/Footer';

import {connect} from 'react-redux';

function Home(props) {

  const {fbauth} = props;

  return(
    fbauth.uid ? 
        <>
          <Navigation/>
          <LoggedHome/>
          <Footer/>
        </>
    :
        <>
          <Navigation/>
          <GuestHome/>
          <Footer/>
        </>
  )
}

const mapStateToProps = state => {
  return{
    fbauth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home)