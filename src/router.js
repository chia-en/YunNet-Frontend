import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("./components/Index.vue")
    },

    {
      path: "/userinfo",
      name: "Userinfo",
      meta: {
        isAuth: true
      },
      component: () => import("./components/Userinfo.vue")
    },

    {
      path: "/login",
      name: "Login",
      meta: {
        deAuth: true
      },
      component: () => import("./components/Login.vue")
    },

    {
      path: "/register",
      name: "Register",
      meta: {
        deAuth: true
      },
      component: () => import("./components/Register.vue")
    },

    {
      path: "/contract",
      name: "Contract",
      component: () => import("./components/Contract.vue")
    },

    {
      path: "/user_contract",
      name: "User_contract",
      component: () => import("./components/User_contract.vue")
    },
    {
      path: "/forgot_password",
      name: "Forgot_password",
      meta: {
        deAuth: true
      },
      component: () => import("./components/Forgot_password.vue")
    },
    /*
    {
      path: "/system_universal",
      name: "System_universal",
      component: () =>
        import("./components/system_universal/System_universal.vue")
    },
    {
      path: "/netflow",
      name: "Netflown",
      component: () => import("./components/Netflow.vue")
    },
    {
      path: "/sys_uni_abuse",
      name: "Sys_uni_abuse",
      component: () => import("./components/system_universal/Sys_uni_abuse.vue")
    },
    {
      path: "/sys_uni_permission",
      name: "Sys_uni_permission",
      component: () =>
        import("./components/system_universal/Sys_uni_permission.vue")
    },
    {
      path: "/system_dormitory",
      name: "System_dormitory",
      component: () =>
        import("./components/system_dormitory/System_dormitory.vue")
    },
    {
      path: "/sys_dorm_import",
      name: "Sys_dorm_import",
      component: () =>
        import("./components/system_dormitory/Sys_dorm_import.vue")
    },
    {
      path: "/universal_lock",
      name: "Universal_lock",
      component: () => import("./components/Universal_lock.vue")
    },

    {
      path: "/dormitory_lock",
      name: "Dormitory_lock",
      component: () => import("./components/Dormitory_lock.vue")
    },
    {
      path: "/sys_dorm_query",
      name: "Sys_dorm_query",
      component: () => import("./components/system_dormitory/Sys_dorm_query.vue")
    },
    */
    {
      path: "/change_mac/:ip",
      name: "change_mac",
      component: () => import("./components/Change_mac.vue"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/user_netflow/:ip",
      name: "User_netflow",
      component: () => import("./components/User_netflow.vue"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/change_password",
      name: "Change_password",
      component: () => import("./components/Change_password.vue"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/user_lock/:ip",
      name: "User_lock",
      component: () => import("./components/User_lockTable.vue"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/user_announce1",
      name: "User_announce1",
      component: () => import("./components/User_announce1.vue")
    },
    {
      path: "/user_announce2",
      name: "User_announce2",
      component: () => import("./components/User_announce2.vue")
    },
    {
      path: "/user_announce3",
      name: "User_announce3",
      component: () => import("./components/User_announce3.vue")
    },
    {
      path: "/user_announce4",
      name: "User_announce4",
      component: () => import("./components/User_announce4.vue")
    },
    {
      path: "/announce1",
      name: "Announce1",
      component: () => import("./components/Announce1.vue")
    },
    {
      path: "/announce2",
      name: "Announce2",
      component: () => import("./components/Announce2.vue")
    },
    {
      path: "/announce3",
      name: "Announce3",
      component: () => import("./components/Announce3.vue")
    },
    {
      path: "/announce4",
      name: "Announce4",
      component: () => import("./components/Announce4.vue")
    },
    {
      path: "/register_verify/:token",
      name: "Register_verify",
      meta: {
        deAuth: true
      },
      component: () => import("./components/Register_verify.vue")
    },
    {
      path: "/set_password/:token",
      name: "Set_Password",
      meta: {
        deAuth: true
      },
      component: () => import("./components/Set_Password.vue")
    },
    {
      path: "/system_query",
      name: "System_query",
      meta: {
        isAuth: true,
        system: "api.query"
      },
      component: () =>
        import("./components/system_dormitory/Sys_dorm_query.vue")
    },
    {
      path: "/system_user_lock/:ip",
      name: "System_User_lock",
      component: () =>
        import("./components/system_dormitory/sys_query_lock.vue"),
      meta: {
        isAuth: true,
        system: "api.query.lock"
      }
    },
    {
      path: "/system_abuse/:uid/:ip",
      name: "System_abuse",
      meta: {
        isAuth: true,
        system: "api.ip.lock.add"
      },
      component: () =>
        import("./components/system_dormitory/Sys_dorm_abuse.vue")
    },
    {
      path: "/system_change_bed",
      name: "Sys_change_bed",
      meta: {
        isAuth: true,
        system: "api.bed.exchange"
      },
      component: () =>
        import("./components/system_dormitory/Sys_change_bed.vue")
    },
    {
      path: "/IP_log/:ip",
      name: "Sys_IP_Log",
      meta: {
        isAuth: true,
        system: "api.log.actions.all"
      },
      component: () => import("./components/system_dormitory/Sys_ip_log.vue")
    },
    {
      path: "/all_log/:username",
      name: "Sys_ALL_Log",
      meta: {
        isAuth: true,
        system: "api.log.actions.all"
      },
      component: () => import("./components/system_dormitory/Sys_all_log.vue")
    },
    {
      path: "*",
      component: () => import("./components/Index.vue")
    }
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
