
import { connect } from 'react-redux';
import Matthew from '../../screens/sales/Matthew';
import {
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprofilelist: state.vendor.getprofilelist,
});

const mapDispatchToProps = {
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost
};

export default connect(mapStateToProps, mapDispatchToProps)(Matthew);

