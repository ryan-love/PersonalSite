<template>
    <div>
      <Draggable :grid="[15, 15]" bounds="body" style="z-index:-1;">
      <div style="border: 5px solid black; background: #fff;height: 200px;text-align: center;"> 
        Synopsis
    <div class="syn">My name is {{ msg }}, I am a Software Engineer currently working for renewable company called <a href="https://www.omnihp.co.uk">OMNI Heat & Power</a>🌍.</div>
    <br/>
    <ul class="syn">
<li class="syn">Company Projects:Car Charger Service🔌,File Sharing🗄,Automation👨‍💻,DevOps🤖,Energy Monitor📈,Inventory System📦,URL Shortner🔗,EV Control/Data API🚗 </li>
<li class="syn">University Projects:Paperless Restaurants🧾,LiFi Simulator💡,Indoor Mapping🗺,Various Cyber Scripts,Various Langauge Functions(SmallTalk,Haskall,etc..)👨‍💻 </li>
<li class="syn">Personal Projects:This!👆,TOTP PWA🕒,Many unfinished💁‍♂️ </li>


    </ul>
    <div style="font-size:7px">
        <a href="#">Full CSV here</a>
        <br/>
        <a href="#">GitHub CSV</a>
    </div>
  </div>
</Draggable>
    </div>
    <!-- <div style="text-align: center;">
      <ul style="display: inline-block;list-style-type: none;padding:0">
        <li @click="skillShow">Skills🛠️</li>
        <li @click="expShow">Experience👨‍🔧</li>
        <li @click="hobShow">Hobbies🧙‍♂️</li>
      </ul>
    </div> -->

</template>

<script>
// import Exp from "./Experience.vue"
// import Hob from "./Hobbies.vue"
// import Skills from "./Skills.vue"

import {ref} from "vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // Exp,
    // Hob,
    // Skills
  },
  setup(){
    let showSkill = ref(false)
    let showExp = ref(false)
    let showHob = ref(false)

   let skillShow = ()=>{
    showSkill.value = !showSkill.value
    showExp.value = false
    showHob.value = false
   }
   let hobShow = ()=>{
    showHob.value = !showHob.value
    showExp.value= false
    showSkill.value = false
   }
   let expShow = ()=>{
    showExp.value = !showExp.value
    showSkill.value = false
    showHob.value = false
   }

return{
  showSkill,
  showExp,
  showHob,
  expShow,
  hobShow,
  skillShow
}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  display: inline-block;
  margin: 0 5px;
}
.myName{
  margin:0 10px 10px 10px;
  font-size: 10vw;
font-family: 'Nunito Sans', sans-serif;
text-align: center;
}
.syn{
  font-size: 12px;
  display:block
}
@media only screen and (max-width: 800px) {
  .myName{
    margin:10px;
    font-size:15vw;
    font-family: 'Nunito Sans', sans-serif;
    text-align: center;


  }
  li{
  display: inline-block;
  margin: 0 5px;
  font-size: 3vw;
}
.syn{
  font-size: 8px;
  display:block
}
}
</style>
