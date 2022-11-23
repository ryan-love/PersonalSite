<template>
  <div id="whole" style="margin: 0;
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;">
  <Background style="position:absolute;"/>
  <!-- <div style="position:absolute;top: 0;left: 0; margin:20px">
    <button @click="addCanvas">Add Canvas</button>
  </div>
  
  <div v-for="(child,idx) in canvasDiv" :key="child">
    
            <component  style="position:absolute;" @del="changeDiv(idx)" :is="child"></component>
        </div> -->

        
  <HelloWorld msg="Ryan Love"/>
    <br/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Background from "./components/Background.vue"
import { ref} from "vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    Background,
    // Drag:defineAsyncComponent(()=> import("./components/Drag.vue") )
  },
  setup(){
    const canvasDiv = ref([]);
    let divStuff = ref(null)

    let changeDiv = (e)=>{

      canvasDiv.value.splice(e,1)
    }
    let addCanvas = ()=>{
    canvasDiv.value.push("Drag")
    }

    return {
        canvasDiv,
        addCanvas,
        divStuff,
        changeDiv
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@700&family=Nunito+Sans&display=swap');
#app {
  font-family: 'Noto Sans Mono', monospace;
  min-width: 375px;
}
</style>
