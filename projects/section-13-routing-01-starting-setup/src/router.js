import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/teams/TeamsList.vue';
import UsersList from './pages/users/UsersList.vue';

import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NonFound from './components/nav/NotFound.vue';

// when paging move, scroll move to top
// navigation guard 는 아무나 접근하지 못하게 한다.
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams', // url is changed
    },
    {
      name: 'teams',
      path: '/teams',
      // meta data
      meta: {
        needsAuth: true,
      },
      // component: TeamsList,
      // named router
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/', // url is not changed, just load same component
      // children
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      // each path navigation guard
      beforeEnter(to, from, next) {
        console.log('user list before enter');
        console.log(to, from);
        next();
      },
    },
    // catch all route, 찾지 못하는 경로 처리
    {
      path: '/:notFound(.*)', // 어떤 문자열 조합의 경로라도 처리
      // redirect: '/teams',
      component: NonFound,
    },
  ],
  linkActiveClass: 'active',
  // call when route change
  scrollBehavior(to, from, savedPosition) {
    // savePosition only show when click back button
    // console.log('to', to, 'from', from, 'savedPosition', savedPosition);
    // 뒤로가기 눌렀을 때 이전 포지션으로 돌아가고 싶은 경우 사용
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// global navigation guard
router.beforeEach((to, from, next) => {
  console.log('global navigation guard');
  // console.log('to', to, 'from', from, 'next', next);
  // next(false); // when parameter is false, cancel to route
  // infinite roop here, cause redirect again and again
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-members',
  //     params: { teamId: 't2' },
  //   });
  // }

  // using meta data
  if (to.meta.needsAuth) {
    console.log('needs auth');
  }

  next();
});

router.afterEach((to, from) => {
  // sending analyrics data to the server
  console.log('global after each');
  console.log(to, from);
});

export default router;
