
import { connect } from 'react-redux';
import Glyndenprofile from '../../screens/sales/Glyndenprofile';
import {
    postdetails,
    messagesend,
    addNetworkCru,
    socialfeedlist
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    grtpostdetail: state.vendor.grtpostdetail,
});

const mapDispatchToProps = {
    postdetails,
    messagesend,
    addNetworkCru
};

export default connect(mapStateToProps, mapDispatchToProps)(Glyndenprofile);

