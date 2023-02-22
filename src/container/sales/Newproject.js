
import { connect } from 'react-redux';
import Newproject from '../../screens/sales/Newproject';
import {
    addnewproject,
    getproduction,
    mycrulist
} from '../../redux/actions/Vendor';


const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getproductionlist: state.vendor.getproductionlist,
    getmycrulist: state.vendor.getmycrulist,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    addnewproject,
    getproduction,
    mycrulist
};

export default connect(mapStateToProps, mapDispatchToProps)(Newproject);

