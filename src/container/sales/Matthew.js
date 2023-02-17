
import { connect } from 'react-redux';
import Matthew from '../../screens/sales/Matthew';
import {
    profiledetail,
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprofilelist: state.vendor.getprofilelist,
});

const mapDispatchToProps = {
    profiledetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Matthew);

