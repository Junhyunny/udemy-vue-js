export default {
  //   login(context, payload) {},
  async signup(context, payload) {
    context.commit('startLoading', null, { root: true });
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuAOWOfu8C0iA4U7wZmkaMCeyG9zXG37Y`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'applicaiton/json',
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error.message || 'Fail to signup');
      }
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
};
