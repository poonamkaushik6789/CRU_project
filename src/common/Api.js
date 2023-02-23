//const projectUri = `https://devvca.pushcord.com:8000/vca-front/api/v1.0/ui/front`; //Production server URL
//const baseUri = `http://3.133.223.72/api/`; //Production server URL
const baseUri = `http://192.168.1.5:7889/v1`;
//const baseUri = `https://api.wallpon.com/v1`;
const imageUri = `http://192.168.1.5:7889/`;

const api = {
  baseUri, imageUri,
  register: `/auth/signup`,
  login: `/auth/login`,
  departmentlist: `/users/getDepartmentList`,
  subDepartmentlist: `/users/getsubDepartments`,
  updateWorkdepartment: `/auth/updateWorkDepartments`,
  updateareatotravel: `/auth/updateAreaToTravel`,
  updateAvailabilty: `/auth/updateavailabilty`,
  addnewpost: `/users/addNewPost`,
  postlisting: `/users/postListing`,
  postDetails: `/users/postDetail`,
  commentlistid: `/users/commentList`,
  addcomment: `/users/addComment`,
  sendmessage: `/users/sendMessage`,
  messagelist: `/users/messageList`,
  likeUnlikepost: `/users/likeUnlikePost`,
  viewprofile: `/users/viewProfile`,
  updateProfileImage: `/users/updateprofileImage`,
  updatecoverImage: `/users/updateCoverImage`,
  updateuserAbout: `/users/updateUserAbout`,
  deletePost: `/users/removePost`,
  addnetworkCru: `/users/addToNetworkOrCru`,
  mycru: `/users/myCru`,
  mynetwork: `/users/myNetwork`,
  eventcategory: `/users/eventCategory`,
  eventlist: `/users/events`,
  eventdetail: `/users/eventDetail`,
  // mynetwork: `/users/myNetwork`,
  //  messagelist: `/users/eventCategory`,
  // addnetworkCru: `/users/addToNetworkOrCru`,
  // mycru: `/users/myCru`,
  // mynetwork: `/users/myNetwork`,
  //  messagelist: `/users/eventCategory`,
  // addnetworkCru: `/users/addToNetworkOrCru`,
  // mycru: `/users/myCru`,
  // mynetwork: `/users/myNetwork`,
  //  messagelist: `/users/eventCategory`,
  // addnetworkCru: `/users/addToNetworkOrCru`,
  // mycru: `/users/myCru`,
  // mynetwork: `/users/myNetwork`,
  //  messagelist: `/users/eventCategory`,
  // likeUnlikepost: `/users/likeUnlikePost`,
};

export default api; 