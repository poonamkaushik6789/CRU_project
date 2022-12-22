import { connect } from 'react-redux';
import  Registration  from '../../screens/auth/Registration';
import {login} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
