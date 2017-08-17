

module.exports = {

  setUserInfo: () => {
    return {
      user_id: request.user_id,
      firstName: request.profile.firstName,
      lastName: request.profile.lastName,
      email: request.email,
      role: request.role
    }
  },

  isDevOrTest: () => {
    return process.env !== "production"
  },

  getRole: () => {}

};