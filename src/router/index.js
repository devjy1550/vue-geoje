import { createRouter, createWebHistory } from "vue-router";
// router는 화면의 일부에, 즉 RouterView라는
// 컴포넌트에 다른 컴포넌트를 보여주는 역할을 함.
// html로 생각하면 <a></a>와 같은역할이라고 보면됨.

// 클릭을 해서 웹브라우져의 주소창에 #을 표현하지않기위해
// createWebHistory를 사용하여 관리함
// createWebHistory는 Brower객체의 location 이 관리됨

//
const router = createRouter(
  { 
    history : createWebHistory(),
    //routes : [{path:'/페이지명', name:'별칭, components: RouterView에다가 보여줄 컴포넌트}]
    routes: [
      {}
    ]
  } 
);
export default router;