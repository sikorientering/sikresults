import{r as t,h as s}from"./p-4314c4b9.js";function i(t){return t<10?`0${t}`:t}function e(t){const s=Math.floor(t/60),e=Math.floor(t%60);return`${i(s)}:${i(e)}`}const n={DidNotFinish:"utgått",DidNotStart:"ej start",DidNotEnter:"ej start",Disqualified:"diskvalificerad"};function r(t,s){const i=s.status in n?n[s.status]:s.status;return t&&t!==Number.MAX_VALUE&&e(t)||i}function a(t){return t>0&&`+${e(t)}`||""}class l{constructor(t){this.baseUrl=t,this.getClassResult=this.getClassResult.bind(this),this.getPersonResult=this.getPersonResult.bind(this),this.getResult=this.getResult.bind(this),this.getText=this.getText.bind(this),this.mapChildNodes=this.mapChildNodes.bind(this)}async read(t){const s=await fetch(`${this.baseUrl}/${t}`),i=await s.text(),e=(new window.DOMParser).parseFromString(i,"text/xml");return{event:{name:this.getText(e,"ResultList > Event > Name")},classResults:this.getClassResults(e).sort(((t,s)=>t.class.name.localeCompare(s.class.name)))}}getClassResults(t){return this.mapChildNodes(t,"ResultList > ClassResult",this.getClassResult)}getClassResult(t){return{class:{name:this.getText(t,"Class > Name")},personResults:this.mapChildNodes(t,"PersonResult",this.getPersonResult)}}getPersonResult(t){return{person:{name:{given:this.getText(t,"Person > Name > Given"),family:this.getText(t,"Person > Name > Family")}},organisation:{name:this.getText(t,"Organisation > Name")},results:this.mapChildNodes(t,"Result",this.getResult)}}getResult(t){const s=this.getText(t,"StartTime"),i=this.getText(t,"FinishTime"),e={time:this.getText(t,"Time"),timeBehind:this.getText(t,"TimeBehind"),position:this.getText(t,"Position"),status:this.getText(t,"Status"),controlCard:this.getText(t,"ControlCard")};return s&&(e.startTime=new Date(s)),i&&(e.finishTime=new Date(i)),e}mapChildNodes(t,s,i){return Array.prototype.slice.call(t.querySelectorAll(s)).map(i)}getText(t,s){var i;return s?null===(i=t.querySelector(s))||void 0===i?void 0:i.innerHTML:"innerHTML"in t&&t.innerHTML}}const o=class{constructor(s){t(this,s),this.columns=[],this.columnSorters=[],this.renderClassResult=this.renderClassResult.bind(this),this.personResultToResultRow=this.personResultToResultRow.bind(this),this.onClassFilterChange=this.onClassFilterChange.bind(this)}async componentWillLoad(){this.columns=[{title:"Plac",field:"position",formatter:t=>t>0&&t!==Number.MAX_VALUE?t:""},{title:"Namn",field:"name",component:{name:"result-table-component",props:{style:"--min-width: 14rem"}}},{title:"Organisation",field:"organisation",component:{name:"result-table-component",props:{style:"--min-width: 14rem"}}},{title:"Tid",field:"time",formatter:r},{title:"Diff",field:"timeBehind",formatter:a}],this.columnSorters=[{column:this.columns[0],direction:"ASC"}];const t=new l("/assets/racedata");this.match&&this.match.params.name&&(this.resultList=await t.read(`${this.match.params.name}/resultat-IOFv3.xml`))}render(){var t;return s("div",{class:"race-result"},s("h1",null,this.resultList.event.name),s("limel-button-group",{onChange:this.onClassFilterChange,value:[{id:"_all",title:"Alla"},...null===(t=this.resultList.classResults)||void 0===t?void 0:t.map((t=>({id:t.class.name,title:t.class.name})))]}),this.renderClassResults())}renderClassResults(){let t=this.resultList.classResults||[];return this.classFilter&&"_all"!==this.classFilter&&(t=t.filter((t=>t.class.name===this.classFilter))),t.map(this.renderClassResult)}onClassFilterChange(t){this.classFilter=t.detail.id}renderClassResult(t){return[s("p",null,s("strong",null,t.class.name)," ",s("small",null,t.personResults.length," startande")),s("limel-table",{data:t.personResults.map(this.personResultToResultRow),columns:this.columns,sorting:this.columnSorters})]}personResultToResultRow(t){const[s]=t.results;return{position:s.position||Number.MAX_VALUE,name:`${t.person.name.given} ${t.person.name.family}`,organisation:t.organisation.name,time:s.time||Number.MAX_VALUE,timeBehind:s.timeBehind,status:s.status}}};o.style=".race-result{padding:10px}@media print{limel-button-group{display:none}}";export{o as race_result}