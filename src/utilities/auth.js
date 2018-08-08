export const appAuth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout(){
    this.isAuthenticated = false;
  }
};