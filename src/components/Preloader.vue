<template>
  <div class="preloader">
      <div id="centerContent">
        <img id="titleLogo" src="@/assets/img/ThinkThenCreate.png"/>
        <h3>As technology advances... so shall we.</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.preloader{
  float: right;
  height: 100vh;
  width: calc(100vw - 200px);
}
#centerContent{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  
}

#centerContent h3{
  margin-top: 70px;
  font-size: 1.6em;
  opacity: .9;
}

#titleLogo{
  width: 600px;
  pointer-events: none;
}

</style>
