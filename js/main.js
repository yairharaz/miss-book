import { myRouter } from "./routes.js";
import appHeader from "./cmps/app-header.cmp.js";

new Vue({
  el: "#app",
  router: myRouter,
  template: `
  <div>
    <app-header></app-header>
    <main>
     <router-view />
    </main>
  </div>
  `,
  components:{
    appHeader
  }
});
