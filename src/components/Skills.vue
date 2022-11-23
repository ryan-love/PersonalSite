<template>
    <div style="border-bottom: 5px solid black; background: #fff;height: 200px;text-align: center;"> 
      <div>Skills</div>
      <div class="syn">
            Informal
          <ul style="font-size:10px; grid-row: 1; grid-column: 0;">
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>Vue.js</li>
              <li>WebSocket(MQTT,OCPP),REST,Message Queues</li>
              <li>DB(Postgres,MongoDB,Redis,MySQL,InfluxDB)</li>
              <li>Virtulization(Containers(Docker,LXD),Hyper V, Proxmox)</li>
              <li>Servers(AWS,GCP,DigitalOcean,Local)</li>
              <li>IT Admin(Active Directory,3CX,MDM,UniFi,IoT,VPN)</li>
              <li>And so much more!</li>


          </ul>
          Formal
          <ul style="font-size:10px; grid-row: 1; grid-column: 1;">
            <li>CCNA</li>
              <li>BSc Software Enginnering</li>
              <li>MSc Cyber Security</li>

          </ul>
      </div>
    </div>
  </template>
  
  <script>
  // import {ref} from "vue"
  export default {
  setup(){
  
  }
  }
  </script>
  
  <style scoped>
  .syn{
  font-size: 12px;
  display:grid;
}
  li{
    list-style: none;
  }
  ul{
    padding: 0;
  }
  </style>