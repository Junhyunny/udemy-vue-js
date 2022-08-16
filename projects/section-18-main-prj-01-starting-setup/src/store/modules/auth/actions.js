let timer = null;

export default {
  async login(context, payload) {
    context.commit('startLoading', null, { root: true });
    try {
      await context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
  async signup(context, payload) {
    context.commit('startLoading', null, { root: true });
    try {
      await context.dispatch('auth', {
        ...payload,
        mode: 'signup',
      });
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
  async auth(context, payload) {
    const mode = payload.mode;

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBuAOWOfu8C0iA4U7wZmkaMCeyG9zXG37Y`;
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuAOWOfu8C0iA4U7wZmkaMCeyG9zXG37Y`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaiton/json',
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.error.message || 'Fail to login');
    }

    const expiresIn = +responseData.expiresIn * 1000;
    console.log('expiresIn', expiresIn);
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('expirationDate', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: expirationDate,
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = localStorage.getItem('expirationDate');

    const tokenExpiration = +expirationDate - new Date().getTime();
    if (tokenExpiration < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, tokenExpiration);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration,
      });
    }
  },
  logout(context) {
    localStorage.clear();
    clearTimeout(timer);
    context.commit('logout');
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
