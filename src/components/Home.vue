<template>
  <div id="home-content">
      <div class="section" id="home">
        <h1>Hi there! Im Dre & I’m a software developer</h1>
        <p>I’m always striving to challenge myself and improve my skills, whether that be my creativity or my programming.</p>
        <p>Im very passionate about full stack development and web design and look forward to a challenging and friendly work environment where I can learn and improve my programming skills.</p>
        <p>Check out my work below and feel free to contact me via email.</p>

        <div id="scrollAlert" v-on:click="scrollDown()">
          <h5>SCROLL DOWN</h5>
          <img src="@/assets/img/DownIcon.png"/>
        </div>
      </div>
      
      <div class="bgColor"></div>
      <div class="section" id="about-me">
        <h1>About Me</h1>
        <p>Usually,it's quite difficult catching me anywhere else than behind a monitor. All my passions seem to revolve around computers; Digital Art, Web Design, Music Producing, and last but not least, programming. </p>
        <p>In the face of complex problems, my motto is: Think then create. One must create a plan to ease the process of any difficult task. I have learned through trial and error many times.</p>
        <p>Check out my Player stats!</p>
        <p> 
            Name: De’Andre Holmes <br/>
            Class: Programmer <br/>
            Special ability/Quirk: Mind Reader (Though, I can only read my own atm) <br/>
            Favorite IDE: Visual Studio Code <br/>
            Favorite food: Cajun Chicken Pasta<br/>
        </p>
      </div>
      <div class="section" id="work">
        <h1>Work</h1>
        <div class="projects">
          <h3>Hybrid Event Check-in Web App</h3>
          <p>Hybrid App that allows users to create events that can be used to check in students via Barcode scan. Constructed with ionic/Angular, and google plus oauth.</p>
        </div>
        <div class="projects">
          <h3>Movie Database Web App</h3>
          <p>Web Appthat allows users to search for and display movies stored in the movie db database. Built with Vue framework. Uses Amazonlex bot for voice input search.</p>
        </div>
        <div class="projects">
          <h3>Chess Move Simulator </h3>
          <p>Web Appthat simulates valid chess piece movement. Constructed with Node.js and Express.</p>
        </div>
       
      </div>
      <div class="section" id="contact">
        <h1>Contact </h1>
        <p>Email: DeandreHolmes55@gmail.com </p>
        <p>Phone: 704-449-8680 </p>
        <p>LinkedIn: www.linkedin.com/in/deandreholmes </p>
        <p>Github: https://github.com/NeonNeom</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    scrollDown(){
        //this.$router.push({path:'/'});
        document.getElementById('about-me').scrollIntoView({
          behavior: 'smooth'
        });
    },
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      //console.log(window.scrollY + " | " + document.getElementById('about-me').clientHeight);
      if(window.scrollY >= document.getElementById('about-me').clientHeight){
        document.getElementById('home').style.display = "none";
      }else{
        document.getElementById('home').style.display = "block";
      }

      if(window.scrollY >= window.innerHeight/2.2){
        document.getElementById('scrollAlert').style.display = "none";
      }else{
        document.getElementById('scrollAlert').style.display = "block";
      }

      document.getElementById('home').style.opacity = ((window.innerHeight - 50) - window.scrollY) / (window.innerHeight - 50);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-content{
  height: 100vh;
  margin: 0px;
  padding-top: 100vh;
}
#home{
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
}

#home, #home p{
  width: 900px;
  margin: auto;
}

#home h1{
  font-size: 3.5em;
  opacity: .9;
}

#home h3{
  margin-top: 70px;
  font-size: 1.6em;
  opacity: .9;
}

 #home p{
   font-size: 1.3em;
   margin-bottom: 20px;
   font-weight: 100;
   
 }

#scrollAlert{
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation-name: hover;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  text-align: center;
}

#scrollAlert > *{
  margin: 5px;
}

#scrollAlert:hover{
  cursor: pointer;
}

.bgColor{
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%,-50%);
  background-color: rgb(8, 14, 15);
  animation-name: slide;
  animation-duration: .7s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-direction:alternate;
}

.section{
  width: calc(100vw - 450px);
  height: 100vh;
  text-align: left;
  padding-top: 280px;
  box-sizing: border-box;
}

.section p{
  width: 70vw;
  min-width: 650px;
}

@keyframes hover {
  from{
    transform: translateX(-50%);
  }
  to{
    transform: translate(-50%, 30%);
  }
}

@keyframes slide {
  0%{
    width: 0px;
    height: 0px;
    border-radius: 100vw;
    opacity: 1;
  }
  100%{
    width: 120vw;
    height: 120vw;
    border-radius: 0px;
    opacity: 1;
  }
}
</style>
