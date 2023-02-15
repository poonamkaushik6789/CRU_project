
import { connect } from 'react-redux';
import Matthew from '../../screens/sales/Matthew';

const mapStateToProps = (state) => ({
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Matthew);

