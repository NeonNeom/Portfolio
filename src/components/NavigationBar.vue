<template>
  <nav>
      <img id="navLogo" v-on:click="goToHome()" src="@/assets/img/dh.png" width="55px" height="55px"/>
      <img id="menuLogo"  v-on:click="openMenu()" src="@/assets/img/menu.png" width="35px" height="30px"/>
  </nav>
</template>

<script>
import { EventBus } from '@/services/Bus.js';
export default {
  name: 'navigationbar',
  props: {
    msg: String
  },
  methods: {
    goToHome(){
        this.$router.push({path:'/'});
    },
    openMenu(){
      this.$router.push({path:'/menu'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav{
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
}

#navLogo, #menuLogo{
  cursor: pointer;
}

#navLogo{
  margin-top: 55px; 
}

#menuLogo{
  position: fixed;
  right: 100px;
  margin-top: 65px; 
}
</style>
