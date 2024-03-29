import { connect } from 'react-redux';
//import Saleslisting from '../../screens/sales/Saleslisting';
import Vendor from '../../screens/vender';
import { addpostnew,
    socialfeedlist,
    likeunlikepost } from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    businessIndividualList: state.vendor.businessList,
    getpostlist: state.vendor.getpostlist,
    loginCredentials: state.auth.loginCredentials,
});

const mapDispatchToProps = {
    addpostnew,
    socialfeedlist,
    likeunlikepost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
