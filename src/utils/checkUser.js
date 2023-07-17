const checkUser = () => {
  if (localStorage.getItem("token")) return true;
  else return false;
};
export default checkUser;
