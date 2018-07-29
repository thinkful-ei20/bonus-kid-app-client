import SignupHeader from './SignupHeader';
import React from 'react';

import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';

import '../../styles/landing-page.css';
import ParentSignupForm from '../Forms/ParentSignupForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  parentChoice: state.toggles.loginChoice.parent
});

export function SignupPage(props){
  if(props.loggedIn && props.user.isParent){
    return <Redirect to='/parent_dashboard' />;
  } else if(props.loggedIn){
    return <Redirect to='/child_dashboard' />;
  }
  return(
    <div className='signup-page'>
      <SignupHeader />
      <ParentSignupForm />
      <div className='non-members'>
        <h3>Already a member...<br /><Link to='/'>log in here</Link></h3>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SignupPage);

// import React from 'react';
// import SignUpForm from './SignUpForm';

// import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';

// const mapStateToProps = state => ({
//   loggedIn: state.auth.user !== null,
//   user: state.auth.user
// });

// export const SignUpPage = props => {
//   if(props.loggedIn && props.user.isParent){
//     return <Redirect to='/parent_dashboard' />;
//   } else if(props.loggedIn){
//     return <Redirect to='/child_dashboard' />;
//   }
//   return (
//     <div>
//       <h2>Sign Up Here</h2>
//       <SignUpForm />
//       <h2>Already a member? Log in...</h2>
//       <Link to='/'>Login</Link>
//     </div>
//   );
// };

// export default connect(mapStateToProps)(SignUpPage);