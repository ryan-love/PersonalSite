<template>
  <div>
  <div v-if="inp" contenteditable="true" >

  </div>
  <div v-else class="empty" contenteditable="true" @input="check">
    
</div>
  </div>
</template>

<script>
import {ref} from "vue"
import * as winkNLP from "wink-nlp"
import * as model from "wink-eng-lite-web-model"
import * as utils from "wink-nlp-utils"
let nlp = winkNLP(model)
// let its = nlp.its
// let as = nlp.as


export default {
props:["empty"],

setup(props){

  let inp = ref(props.empty)
  const text = `During the Bronze Age there was a hill fort on the Cholis Grind near the modern village of Saanen. The region was occupied by the Gallo-Romans until the 10th or 11th century when the Alamanni began to drive them out. This migration created the modern language borders in Switzerland.[4] During the Middle Ages several forts were built to guard the mule trails into the Valais and Vaud. These included the Kramburg (which was first mentioned in 1331 but is now covered by later construction), the Swabia Ried tower (11th-12th century) and the Schönried tower (remains are visible as part of house number 349). During the Middle Ages it was part of the vogtei of Vanel in the county of Gruyère. In 1244, the counts became the vassals of Savoy. The counts' financial problems forced them to sell parts of the vogtei and some of the rights to the residents of Saanen in the 14th century.[4] The village then became the center of the Saanen district and parish.

The villagers often acted against the interests of the counts. In 1340 the valley concluded a peace treaty with the Simmental, which provided for arbitration in disputes. They entered into another treaty in 1393 with the Valais. In 1401, Count Rudolph of Gruyère entered into a treaty with Bern which included Saanen. Two years later Saanen negotiated their own alliance with Bern. Due to the Bernese alliance, Saanen sent troops, under their own banner, to support the Bernese invasions of Aargau in 1415 and Valais in 1418. The military losses and taxes following the Old Zürich War led Saanen to support the Evil League (Böser Bund) in 1445 against Bern.[5] It took about six years before Confederation mediation was able to resolve the arguments between Saanen and Bern.[4]

During the Burgundian War in 1475 Saanen, together with troops from Château-d'Œx and the Simmental captured the Savoy district of Aigle for Bern. Saanen and the surrounding district enjoyed a great deal of independence during the 16th century. However, in 1555 the last Count of Gruyère lost the entire district to Bern when his county went bankrupt. Bern took over the entire valley in the following year and introduced the Protestant Reformation. The Bernese bailiff administered the districts of Gessenay (Saanen) and Pays-d'Enhaut until the great fire of 1575 which destroyed much of the town. The bailiff then moved to the former monastery of Mont Rouge.[4]

The district covered eleven separate Bäuerten or agricultural collectives or farming villages and the towns of Saanen and Gstaad. The main sources of income were seasonal alpine herding, forestry and providing warehousing and extra oxen for wagon trains coming over the mule trails. Saanen was the market town for the surrounding villages, with weekly and yearly markets in the town. There were two taverns in Saanen for merchants and travelers.[3]

The village church of St. Mauritius was built in 1228. It was expanded in 1444-47 and the wall paintings are from the second half of the 15th century. Other churches in the area included the St. Anna chapel, built in 1511, the St. John's chapel and the Plague chapel. The parish was administered by a group of five or six priests and chaplains.[3]

Until the 1798 French invasion, the Pays-d'Enhaut and Saanen districts were jointly administered. Under the Helvetic Republic, Pays-d'Enhaut became part of the Canton of Léman while Saanen and the rest of the district became part of the Canton of Oberland. When the Helvetic Republic collapsed in 1803, Saanen and its district became a district in the new Canton of Bern.[4]

In 1833, Saanen became a political municipality. In 1845 the Zweisimmen-Saanen road replaced the old mule trail and the town got postal service. Around 1900, tourism began to grow in Saanen and Gstaad and new hotels opened. The opening of the Montreux-Oberland Bernois rail road in 1905, made it easier for tourists to visit. During both World Wars, the tourism industry in Saanen suffered, but it has expanded since 1945. Between the wars, a small weaving industry developed which helped support the municipality. After the war a number of small local industries also developed in the area. The major employer at the beginning of the 21st century was Bergbahnen Destination Gstaad AG, a company that brings together more than 60 different cable cars and lifts in the region. There are 11 school buildings in Saanen, including a secondary school, which was first built in 1867. The Businessmen's Vocational School opened in 1908 and is now the Saanenland-Obersimmental business school, which is part of the Thun business school. The District Hospital opened in 1905`;
const doc = nlp.readDoc( text );
let arr = utils.tokens.removeWords(utils.string.tokenize0(text))
let a = arr.map(v=> utils.string.stem(v))
console.log(utils.tokens.bagOfWords(a))
for (let i = 0; i < doc.sentences().out().length; i++) {
 console.log(utils.tokens.bagOfWords(utils.string.tokenize0(doc.sentences().out()[i])))
  
}
// -> Hello   World🌎! How are you?


  let check = (e)=>{
  if(e.target.innerText === ""){
            inp.value = false
        }else{
            inp.value = true

        }
        console.log(inp.value)
      }

  return{
    inp,
    check
  }
}
}
</script>

<style>

.empty:after {
            content: "Background text";
}
</style>