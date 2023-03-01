
import { connect } from 'react-redux';
import Matthew from '../../screens/sales/Matthew';
import {
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost,
    mycrulist, 
    mynetworklist,
    socialfeedlist,
    likeunlikepost,
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprofilelist: state.vendor.getprofilelist,
    getmycrulist: state.vendor.getmycrulist,
    getmynetworklist: state.vendor.getmynetworklist,
});
 
const mapDispatchToProps = {
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost,
    mycrulist,
    mynetworklist,
    socialfeedlist,
    likeunlikepost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Matthew);

