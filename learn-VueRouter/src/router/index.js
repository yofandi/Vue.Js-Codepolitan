import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    // {
    //   path: "/products/:id",
    //   name: "products",
    //   component: () => import("../views/products.vue"),
    // },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/products.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: import("../views/owner.vue")
        }
      ]
    },
  ],
});

export default router;
