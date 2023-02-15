import { connect } from 'react-redux';
//import Saleslisting from '../../screens/sales/Saleslisting';
import Vendor from '../../screens/vender';
const mapStateToProps = (state) => ({
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
