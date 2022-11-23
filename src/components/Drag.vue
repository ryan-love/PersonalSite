<template>
  <Draggable class="wrap" bounds="body" ref="main" handle="svg" style="resize:both;overflow: hidden;border:5px solid black;background-color:white; ">

    <div>
        <div @click="$emit('del')">X</div>
        <svg style="margin:10px;position: absolute;right: 0;" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h16v16h-16z" fill="none"/><path d="m7.5 1.924-1.727 1.727-.712-.712 2.939-2.939 2.939 2.939-.712.712-1.727-1.727v5.576h5.576l-1.727-1.727.712-.712 2.939 2.939-2.939 2.939-.712-.712 1.727-1.727h-5.576v5.576l1.727-1.727.712.712-2.939 2.939-2.939-2.939.712-.712 1.727 1.727v-5.576h-5.576l1.727 1.727-.712.712-2.939-2.939 2.939-2.939.712.712-1.727 1.727h5.576z"/></svg>
        <div  @click="editIt"><svg style="width:16px;" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Expand</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"/></svg></div>

        <h3 class="title" style="margin-left:10px;" ref="title" contenteditable="true">Untitled</h3>
        <!-- <button @click="isPan = !isPan">PAN{{isPan}}</button> -->

            <!-- <input type="range" @change="zoom" name="r" id="ra" min="0" step="0.1" max="5" v-model="zoomLevel"/> -->
           
            <div @input="getItem" style=" font-size: 2vw; width:30vw;height:25vw;margin: 0 auto;" ref="con" @click="addDiv">
                
               
    <component  @dblclick="changeDiv(0)" :empty="isInput" :is="canvasDiv[0]"></component>

</div>
</div>
  </Draggable>
  
</template>

<script>
import { onMounted, ref,defineAsyncComponent, watch } from "vue"
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";



// import MilkdownEditor from "./MilkdownEditor.vue";
export default {
    props:["mod"],
    components:{
        Text:defineAsyncComponent(()=> import("./Text.vue") )

    },
    setup(){

let main = ref(null)
let con = ref(null)
let zoomLevel = ref(1)
let full = ref(false)
let pos = ref({startPositionX:0,startPositionY:0})
let disp = ref({x:0,y:0});
let up = ref(false)
let isPan = ref(false)
let isDrag = ref(false)
let finger = ref(null)
let picture = ref(null)
let title = ref(null)
let isInput = ref(false)

const canvasDiv = ref([]);

    let changeDiv = (e)=>{

      canvasDiv.value.splice(e,1)
    }
    let addDiv = ()=>{
    canvasDiv.value.push("Text")
    console.log("WAH")
    }
onMounted(async()=>{
    watch(con,(n,o)=>{
console.log(n)
console.log(o)
    })
    finger.value = await getCurrentBrowserFingerPrint()
})


let z = (e)=>{
 if(isPan.value){
    isDrag.value = false
    if('ontouchstart' in window){
        console.log(true)
    pos.value.startPositionX=e.pageX-disp.value.x;
   pos.value.startPositionY=e.pageY-disp.value.y;
    con.value.addEventListener("touchmove",(ee)=>{
        if(!up.value){

        
        disp.value.x=ee.pageX-pos.value.startPositionX;
      disp.value.y=ee.pageY-pos.value.startPositionY;
      con.value.style.transform='scale('+zoomLevel.value+') translate('+disp.value.x+'px, '+disp.value.y+'px)';
        } else{
            con.value.style.transform='scale('+zoomLevel.value+') translate('+disp.value.x+'px, '+disp.value.y+'px)';

        }
    },true)
}else{
    console.log(false)
    up.value = false
    pos.value.startPositionX=e.pageX-disp.value.x;
   pos.value.startPositionY=e.pageY-disp.value.y;
    con.value.addEventListener("mousemove",(ee)=>{
        if(!up.value){

        
        disp.value.x=ee.pageX-pos.value.startPositionX;
      disp.value.y=ee.pageY-pos.value.startPositionY;
      con.value.style.transform='scale('+zoomLevel.value+') translate('+disp.value.x+'px, '+disp.value.y+'px)';
        } else{
            con.value.removeEventListener("mousemove",()=>{
                console.log("wah")
                con.value.style.transform='scale('+zoomLevel.value+') translate('+disp.value.x+'px, '+disp.value.y+'px)';
    
            })

        }
    },true)
}
    
 } else{
    console.log(up.value)
    isDrag.value = true
    console.log(123)
 
 }


}
let zoom = ()=>{
    con.value.style.transform='scale('+zoomLevel.value+') translate('+disp.value.x+'px, '+disp.value.y+'px)';

}

let editIt = ()=>{
    full.value = !full.value
    if(full.value){
    con.value.style.width = "90vw"
    con.value.style.height = "90vh"
    con.value.style.zIndex= 9999999999999

    }else{
        con.value.style.width = "25vw"
    con.value.style.height = "30vw"
    con.value.style.zIndex= 9999999999999
    }
}
let v = ()=>{
 console.log("VHEHEHE")
 console.log(up.value)
 if(isPan.value){
    up.value=!up.value
 }else{
    if(isDrag.value){
        console.log("HQ")
    }else{
        up.value=!up.value
  
    }
 }

    }

    let getItem = (e)=>{
        console.log(e)
        if(e.target.innerText === ""){
            isInput.value = false
        }else{
            isInput.value = true

        }
        console.log(isInput.value)
    }


 
        return{
            con,
            main,
            zoomLevel,
            z,
            v,
            zoom,
            editIt,
            getItem,
            isPan,
            finger,
            title,
            picture,
            addDiv,
            changeDiv,
            canvasDiv,
            isInput

        }
    }
}
</script>

<style>

.title * {
    display: none
}
[contenteditable] {
  outline: 0px solid transparent;
}

.wrap {
    position: relative;
    display: inline-block;
    
}
.wrap:before {
    content:"";
    border-top: 2px solid #555;
    width:10px;
    -webkit-transform: rotate(-45deg);
    z-index: 1;
    background:transparent;
    position: absolute;
    right: 4px;
    bottom: 6px;
    pointer-events: none;
    border-radius:25%;
}
.wrap:after {
    content:"";
    border-top: 2px solid #555;
    width:16px;
    -webkit-transform: rotate(-45deg);
    z-index: 1;
    background:transparent;
    position: absolute;
    right: 5px;
    bottom: 11px;
    pointer-events: none;
    border-radius:25%;
}
.pull-tab {
    border-top: 2px solid #555;
    -webkit-transform: rotate(-45deg);
    pointer-events: none;
    border-radius:25%;
}
::-webkit-resizer{
  display:none;
}

</style>