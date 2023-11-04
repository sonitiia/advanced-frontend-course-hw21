class AuthService {
  getUserData() {
    const storedUserData = localStorage.getItem("user");
    return JSON.parse(storedUserData);
  }

  setUserData(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  signUp(userData) {
    const storedUserData = this.getUserData() || {};

    if (storedUserData && storedUserData.email === userData.email) {
      throw new Error("User with this email address already exists.");
    }

    userData.expiredAt = this.calculateExpirationTime(userData.rememberMe);

    this.setUserData(userData);
    return userData;
  }

  signIn(userData) {
    const storedUserData = this.getUserData() || {};

    if (
      storedUserData.email === userData.email &&
      storedUserData.password === userData.password
    ) {
      storedUserData.expiredAt = this.calculateExpirationTime(
        userData.rememberMe,
      );
      this.setUserData(storedUserData);
    } else {
      throw new Error("Invalid email or password.");
    }

    return storedUserData;
  }

  signOut() {
    const storedUserData = this.getUserData();
    storedUserData.expiredAt = null;
    this.setUserData(storedUserData);
  }

  calculateExpirationTime(rememberMe) {
    const currentTime = new Date().getTime();
    return rememberMe
      ? currentTime + 7 * 24 * 60 * 60 * 1000
      : currentTime + 24 * 60 * 60 * 1000;
  }
}

const authService = new AuthService();
export default authService;
