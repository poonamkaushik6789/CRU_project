import { connect } from 'react-redux';
import  Step1  from '../../screens/auth/Step1';
import {login} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
