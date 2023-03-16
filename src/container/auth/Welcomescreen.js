import { connect } from 'react-redux';
import { Welcomescreen } from '../../screens/auth';
import {login,assignlogindata} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    login,
    assignlogindata
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcomescreen);
