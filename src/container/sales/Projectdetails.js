
import { connect } from 'react-redux';
import Projectdetails from '../../screens/sales/Projectdetails';
import {
    getprojectdetail,
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprojectdetilslist: state.vendor.getprojectdetilslist,

});

const mapDispatchToProps = {
    getprojectdetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Projectdetails);

