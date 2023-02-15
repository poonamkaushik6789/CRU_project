import { connect } from 'react-redux';
import  Step1  from '../../screens/auth/Step1';
import {departmentList} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    
    departmentList
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
