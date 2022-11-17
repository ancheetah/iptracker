(this.webpackJsonpiptracker=this.webpackJsonpiptracker||[]).push([[0],{106:function(t,e,n){},109:function(t,e,n){},142:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=(n(106),n(17)),s=(n(107),n(108),n(109),n(61)),d=n(95),l=n.n(d),u=n(171),p=n(179),b=n(8),j=Object(s.makeStyles)({statBox:{position:"fixed",width:"70vw",backgroundColor:"#ffffff",padding:"1.5rem",margin:"-4rem 15vw 0 15vw"},statItem:{},description:{fontSize:18,fontWeight:"bold"}}),m=function(t){var e=j(),n=t.ipStats,o=function(t){return Object(b.jsxs)(u.a,{item:!0,xs:12,md:3,align:"left",className:e.statItem,children:[Object(b.jsx)(l.a,{variant:"overline",component:"h6",color:"textSecondary",children:t.name}),Object(b.jsx)("div",{className:e.description,children:t.description})]})};return Object(b.jsx)(p.a,{border:1,borderColor:"grey.400",borderRadius:10,zIndex:"modal",className:e.statBox,children:Object(b.jsxs)(u.a,{container:!0,spacing:6,children:[Object(b.jsx)(o,{name:"IP Address",description:n.ip}),Object(b.jsx)(o,{name:"Location",description:n.location}),Object(b.jsx)(o,{name:"Timezone",description:n.timezone}),Object(b.jsx)(o,{name:"ISP",description:n.isp})]})})},h=n(172),g=n(176),f=n(180),O=n(177),x=Object(s.makeStyles)({header:{color:"white",backgroundImage:"url(".concat("/iptracker/pattern-bg.png",")"),backgroundSize:"cover",padding:"4rem",height:250},input:{"& .MuiFilledInput-root":{background:"rgba(255, 255, 255, 1)",paddingRight:"0",paddingLeft:"1rem",borderRadius:"0.7rem 0 0 0.7rem"},"& .MuiFilledInput-input":{borderBottom:"0 !important",marginBottom:"0 !important"}},button:{padding:"1rem",marginRight:"-0.7rem",background:"#000000",borderRadius:"0 0.7rem 0.7rem 0"}}),v=function(t){var e=x();return Object(b.jsxs)("header",{className:e.header,children:[Object(b.jsx)("h2",{style:{marginTop:0,fontSize:"20pt"},children:"IP Address Tracker"}),Object(b.jsx)(h.a,{maxWidth:"sm",children:Object(b.jsx)("form",{onSubmit:t.handleSubmit,children:Object(b.jsx)(g.a,{fullWidth:!0,variant:"filled",color:"secondary",placeholder:"Search for any IP address or domain",onChange:function(e){t.setUserInput(e.target.value)},InputProps:{disableUnderline:!0,endAdornment:Object(b.jsx)(f.a,{position:"end",children:Object(b.jsx)(O.a,{type:"submit",className:e.button,children:Object(b.jsx)("img",{src:"/iptracker/icon-arrow.svg",alt:"search button"})})})},InputLabelProps:{disableUnderline:!0},className:e.input})})})]})},S=n(173),k=n(174),y=n(178),I=n(175),w=n(26),L=n.n(w),z=function(t){var e=t.coordinates,n=Object(o.useState)({centerLatLng:[40.71427,-74.00597],bounds:[[40.66427,-74.05597],[40.76427,-73.95597]],lat:"40.71427",lng:"-74.00597"}),r=Object(i.a)(n,2),a=r[0],c=r[1],s=function(t){var e=t.coords;return Object(S.a)().fitBounds(e.bounds),null},d=new L.a.Icon({iconUrl:"/iptracker/icon-location.svg"});return Object(o.useEffect)((function(){var t=180,n=-180,o=180,r=-180,a=e[0],i=e[1];a<t&&(t=a),a>n&&(n=a),i<o&&(o=i),i>r&&(r=i);var s=[(t+n)/2,(o+r)/2];if(t===n||o===r){var d=.05;t-=d,o-=d,n+=d,r+=d}c({centerLatLng:s,bounds:[[t,o],[n,r]],lat:a,lng:i})}),[e]),Object(b.jsx)(p.a,{children:Object(b.jsxs)(k.a,{center:a.centerLatLng,bounds:a.bounds,boundsOptions:{padding:[20,20]},id:"mapid",children:[Object(b.jsx)(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(b.jsx)(I.a,{position:[a.lat,a.lng],icon:d}),Object(b.jsx)(s,{coords:a})]})})};var E=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(o.useState)(!1),c=Object(i.a)(a,2),s=c[0],d=c[1],l=Object(o.useState)(null),u=Object(i.a)(l,2),p=u[0],j=u[1],h=Object(o.useState)(""),g=Object(i.a)(h,2),f=g[0],O=g[1],x=Object(o.useState)({ip:"",location:"",coordinates:[40.650002,-73.993286],timezone:"",isp:""}),S=Object(i.a)(x,2),k=S[0],y=S[1],I=function(t){d(!0),j(!1),fetch("https://geo.ipify.org/api/v1?apiKey=at_p0qchqpbAVlxMUkOgbHRyaKERKFCe&"+t).then((function(t){if(t.ok)return t.json();throw console.log("Status code ".concat(t.status,". Error: ").concat(t.statusText)),Error(t.statusText)})).then((function(t){y({ip:t.ip,location:"".concat(t.location.city," ").concat(t.location.region,", ").concat(t.location.postalCode),coordinates:[t.location.lat,t.location.lng],timezone:t.location.timezone,isp:t.isp})})).catch((function(t){return j(t)})).finally(d(!1))};return Object(o.useEffect)((function(){fetch("https://api.ipify.org?format=json").then((function(t){if(t.ok)return t.json();throw console.log("Status code ".concat(t.status,". Error: ").concat(t.statusText)),Error(t.statusText)})).then((function(t){O(t.ip)})),I("ipAddress="+f)}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{handleSubmit:function(t){t.preventDefault();var e=/^\d.*\d$/.test(n)?"ipAddress":"domain";I(e+"="+n)},setUserInput:r}),s?Object(b.jsx)("p",{children:"Fetching data..."}):p?Object(b.jsx)("p",{children:"Error retrieving data."}):Object(b.jsx)(m,{ipStats:k}),Object(b.jsx)(z,{coordinates:k.coordinates})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),o(t),r(t),a(t),c(t)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),T()}},[[142,1,2]]]);
//# sourceMappingURL=main.be83fe1a.chunk.js.map