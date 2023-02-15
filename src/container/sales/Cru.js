
import { connect } from 'react-redux';
import Cru from '../../screens/sales/Cru';

const mapStateToProps = (state) => ({
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Cru);

