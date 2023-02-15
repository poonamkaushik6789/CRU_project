import { connect } from 'react-redux';
import Registration from '../../screens/auth/Registration';
<<<<<<< HEAD
import {login,signUp} from '../../redux/actions/Auth'
=======
import {login} from '../../redux/actions/Auth'
>>>>>>> 905efd1eaed540ccad97965759be201685b008dc

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    signupCredentials:state.auth.signupCredentials,
    loginCredentials: state.auth.loginCredentials,
});

const mapDispatchToProps = {
    login,
    signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

