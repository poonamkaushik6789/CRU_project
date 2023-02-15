//const projectUri = `https://devvca.pushcord.com:8000/vca-front/api/v1.0/ui/front`; //Production server URL
//const baseUri = `http://3.133.223.72/api/`; //Production server URL
const baseUri = `http://192.168.1.6:7889/v1`; 
//const baseUri = `https://api.wallpon.com/v1`;

const api = {
  baseUri,
  register: `/auth/signup`,
  login: `/auth/login`,
  departmentlist: `/users/getDepartmentList`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  // login: `/auth/login`,
  //login: `${baseUri}/auth/login`,
 // businessList:`${projectUri}/tab-web-list`
};

export default api; 