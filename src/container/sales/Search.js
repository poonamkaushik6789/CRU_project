
import { connect } from 'react-redux';
import Search from '../../screens/sales/Search';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

