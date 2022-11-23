import { createApp } from 'vue'
import App from './App.vue'
import  { DraggablePlugin } from '@braks/revue-draggable';
import panZoom from 'vue-panzoom'


createApp(App).use(DraggablePlugin).use(panZoom).mount('#app')
