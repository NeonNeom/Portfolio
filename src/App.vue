<template>
  <div id="app">
    <NavigationBar />
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>

<style>


#app {
  font-family: 'PT Sans Narrow', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#app > *{
  display: inline-block;
  margin: 0;
  vertical-align: top;
}
p{
  font-family: 'Rajdhani', sans-serif;
}
body{
  background-color: #010202;
  margin: 0;
}
h3 {
  margin: 40px 0 0;
  font-weight: 100;
}
h5{
  font-weight: 300;
  font-size: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}


/* Scrollbar width */
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Scrollbar Track */
  ::-webkit-scrollbar-track {
    background: #18161b; 
  }
   
  /* Scrollbar Handle */
  ::-webkit-scrollbar-thumb {
    background: #272a35; 
  }
  
  /* Scrollbar Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(70, 69, 69); 
  }


  .hideThunb::-webkit-scrollbar-thumb {
    background: #18161b; 
  }
</style>
