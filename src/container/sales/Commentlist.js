
import { connect } from 'react-redux';
import Commentlist from '../../screens/sales/Commentlist';

const mapStateToProps = (state) => ({
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentlist);

