
import { connect } from 'react-redux';
import Eventdetail from '../../screens/sales/Eventdetail';

const mapStateToProps = (state) => ({
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Eventdetail);

