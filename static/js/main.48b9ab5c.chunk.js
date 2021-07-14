(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(17),n=c.n(s),i=(c(30),c(13)),o=c(8),l=c(2),j=c(0);var m=function(e){var t=e.leaveHome,c=e.openHome;return Object(a.useEffect)((function(){c()}),[]),Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsx)("div",{className:"top-homepage"}),Object(j.jsx)("div",{className:"bottom-homepage",children:Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)(l.b,{onClick:t,to:"/shop",children:Object(j.jsx)("button",{children:"View Catalog"})})})})]})};c(40);var d=function(e){var t=e.navColor,c=e.borderClass,a=e.underlineClass,r=e.leaveHome;return Object(j.jsx)("div",{className:"nav-container",children:Object(j.jsx)("nav",{className:"navbar ".concat(c),children:Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{className:"nav-link-li",children:Object(j.jsx)(l.c,{style:t,className:"title nav-link text underline-color ".concat(a),to:"/",children:"InTech"})}),Object(j.jsx)("li",{className:"nav-link-li",children:Object(j.jsx)(l.c,{style:t,className:"shop-nav nav-link text underline-color ".concat(a),to:"/shop",children:"Shop"})}),Object(j.jsx)("li",{className:"nav-link-li search-link",children:Object(j.jsx)("i",{style:t,className:"fas fa-search nav-link search"})}),Object(j.jsx)("li",{className:"nav-link-li",children:Object(j.jsx)(l.c,{onClick:r,style:t,to:"/basket",children:Object(j.jsx)("i",{className:"fas fa-shopping-basket nav-link basket-icon"})})})]})})})},b=c(24),u=c.n(b),h=c(7),O=function(e){return{type:"SET_TOTAL",payload:e}},p=function(e){return{type:"REMOVE_ITEM",payload:e}},g=function(e){return{type:"UPDATE_QUANTITY",payload:e}};var f=function(e){var t=e.basketArray,c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),r=Object(h.c)((function(e){return e.totalAmount})),s=Object(h.b)();return Object(a.useEffect)((function(){if(t.length>0){var e=t.reduce((function(e,t){return u()(e).value+u()(t.price).value*t.quantity}),0);s(O(e))}else s(O(0))}),[t]),Object(j.jsx)("div",{className:"total-amount-container",children:Object(j.jsx)("div",{className:"top-amount-container",children:Object(j.jsxs)("h2",{className:"total",children:["TOTAL: ",c.format(r)]})})})},x=c(5),v=c.n(x);c(43),c(44);var y=function(){return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("div",{className:"left-footer",children:[Object(j.jsx)("h3",{children:"Made By Luca"}),Object(j.jsx)("a",{href:"https://github.com/Cynto",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github"})})]}),Object(j.jsxs)("div",{className:"right-footer",children:[Object(j.jsx)("h3",{children:"GitHub Repository"}),Object(j.jsx)("a",{href:"https://github.com/Cynto/shopping-cart",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github-square"})})]})]})};var A=function(e){var t=e.leaveHome,c=Object(h.b)();Object(a.useEffect)((function(){t()}),[]);var r=Object(h.c)((function(e){return e.basketArray})),s=function(e,t){var a=r.findIndex((function(e){return e.name===t}));c(g({index:a,negOrPos:e}))};return Object(j.jsx)("div",{className:"basket",children:Object(j.jsxs)("div",{className:"total-container",children:[Object(j.jsx)("div",{className:"top-basket-container"}),Object(j.jsxs)("div",{className:"bottom-basket-container",children:[Object(j.jsx)("h2",{children:"My Shopping Basket"}),Object(j.jsx)("div",{className:"basket-item-container",children:r.length>0?r.map((function(e){return Object(j.jsxs)("div",{className:"basket-item",children:[Object(j.jsx)("img",{src:e.img[0],alt:e.alt}),Object(j.jsx)(l.b,{to:"/product/".concat(e.id),children:e.name}),Object(j.jsx)("p",{className:"basket-item-price",children:e.price}),Object(j.jsxs)("div",{className:"quantity-container",children:[Object(j.jsx)("button",{onClick:function(){return e.quantity>1?s("-",e.name):null},children:"-"}),Object(j.jsx)("span",{children:e.quantity}),Object(j.jsx)("button",{onClick:function(){return s("+",e.name)},children:"+"})]}),Object(j.jsx)("button",{className:"basket-delete",onClick:function(){return function(e){var t=r.findIndex((function(t){return t.name===e}));c(p(t))}(e.name)},children:"Delete"})]},v()())})):null})]}),Object(j.jsx)(f,{basketArray:r}),Object(j.jsx)(y,{})]})})};var N=function(){return Object(j.jsx)("div",{className:"shop-nav-container",children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/",children:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/cases",children:"Cases"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/processors",children:"Processors"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/motherboards",children:"Motherboards"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/graphics-cards",children:"Graphics Cards"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/shop/memory",children:"Memory"})})]})})})};var C=function(e){var t=e.item,c=Object(a.useState)(0),r=Object(o.a)(c,2),s=r[0],n=r[1];return Object(j.jsxs)("div",{onMouseEnter:function(){return t.img.length>1?n(1):null},onMouseLeave:function(){return n(0)},className:"shop-item",children:[Object(j.jsx)("img",{className:"item-img",src:t.img[s],alt:t.alt}),Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("p",{children:t.price})]})};var k=function(e){var t=e.setCategory,c=e.totalArray;return Object(a.useEffect)((function(){t("All Products")}),[]),Object(j.jsx)("div",{className:"products-container",children:c.map((function(e){return Object(j.jsx)(l.c,{className:"total-item",to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})};var S=function(e){var t=e.setCategory,c=e.casesArray;return Object(a.useEffect)((function(){t("Cases")}),[]),Object(j.jsx)("div",{className:"products-container",children:c.map((function(e){return Object(j.jsx)(l.c,{to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})};var E=function(e){var t=e.processorsArray,c=e.setCategory;return Object(a.useEffect)((function(){c("Processors")}),[]),Object(j.jsx)("div",{className:"products-container",children:t.map((function(e){return Object(j.jsx)(l.c,{to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})};var _=function(e){var t=e.memoryArray,c=e.setCategory;return Object(a.useEffect)((function(){c("Memory")}),[]),Object(j.jsx)("div",{className:"products-container",children:t.map((function(e){return Object(j.jsx)(l.c,{to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})},I=(c(45),c(4));var M=function(e){var t=e.motherboardsArray,c=e.setCategory;return Object(a.useEffect)((function(){c("Motherboards")}),[]),Object(j.jsx)("div",{className:"products-container",children:t.map((function(e){return Object(j.jsx)(l.c,{to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})};var T=function(e){var t=e.gpuArray,c=e.setCategory;return Object(a.useEffect)((function(){c("Graphics Cards")}),[]),Object(j.jsx)("div",{className:"products-container",children:t.map((function(e){return Object(j.jsx)(l.c,{to:"/product/".concat(e.id),children:Object(j.jsx)(C,{item:e})},v()())}))})};var P=function(e){var t=Object(a.useState)("All Products"),c=Object(o.a)(t,2),r=c[0],s=c[1],n=e.leaveHome,i=e.totalArray,l=e.casesArray,m=e.processorsArray,d=e.memoryArray,b=e.motherboardsArray,u=e.gpuArray;return Object(a.useEffect)((function(){n()}),[]),Object(j.jsx)("div",{className:"shop",children:Object(j.jsxs)("div",{className:"total-container",children:[Object(j.jsx)("div",{className:"top-shop-container"}),Object(j.jsxs)("div",{className:"bottom-shop-container",children:[Object(j.jsxs)("div",{className:"left-shop-container",children:[Object(j.jsx)("div",{className:"category-container",children:Object(j.jsxs)("h3",{children:["Shop / ",Object(j.jsx)("br",{})," ",Object(j.jsx)("p",{children:r})]})}),Object(j.jsx)(N,{})]}),Object(j.jsx)("div",{className:"shop-items-container",children:Object(j.jsxs)(I.c,{children:[Object(j.jsx)(I.a,{exact:!0,path:"/shop/",children:Object(j.jsx)(k,{totalArray:i,setCategory:s})}),Object(j.jsx)(I.a,{path:"/shop/cases",children:Object(j.jsx)(S,{casesArray:l,setCategory:s})}),Object(j.jsx)(I.a,{path:"/shop/processors",children:Object(j.jsx)(E,{setCategory:s,processorsArray:m})}),Object(j.jsx)(I.a,{path:"/shop/motherboards",children:Object(j.jsx)(M,{setCategory:s,motherboardsArray:b})}),Object(j.jsx)(I.a,{path:"/shop/graphics-cards",children:Object(j.jsx)(T,{setCategory:s,gpuArray:u})}),Object(j.jsx)(I.a,{path:"/shop/memory",children:Object(j.jsx)(_,{setCategory:s,memoryArray:d})})]})})]}),Object(j.jsx)(y,{})]})})};c(46);var R=function(e){return Object(j.jsxs)("div",{className:"added-message-container",children:[Object(j.jsxs)("div",{className:"main-message-container",children:[Object(j.jsx)("h3",{children:"Successfully Added Item To Basket!"}),Object(j.jsx)(l.b,{to:"/basket",children:Object(j.jsx)("button",{children:"Go To Basket"})})]}),Object(j.jsx)("button",{className:"exit-button",onClick:function(){e.setAddedToCart(!1),e.setBlurStyle({})},children:"X"})]})};var G=function(e){var t=e.currentProduct,c=e.img1Class,a=e.img2Class,r=e.setActiveImg;return Object(j.jsxs)("div",{className:"gallery-container",children:[Object(j.jsx)("img",{src:t.img[0],alt:t.alt,className:c,onClick:function(e){return r(e)},onMouseEnter:function(e){return r(e)}}),Object(j.jsx)("img",{src:t.img[1],alt:t.alt,className:a,onClick:function(e){return r(e)},onMouseEnter:function(e){return r(e)}})]})};var B=function(e){var t=e.currentProduct,c=e.leaveHome,r=Object(a.useState)("gallery-img img1 active-img"),s=Object(o.a)(r,2),n=s[0],i=s[1],l=Object(a.useState)("gallery-img img2"),m=Object(o.a)(l,2),d=m[0],b=m[1],u=Object(a.useState)(0),O=Object(o.a)(u,2),f=O[0],x=O[1],v=Object(a.useState)(!1),A=Object(o.a)(v,2),N=A[0],C=A[1],k=Object(a.useState)({}),S=Object(o.a)(k,2),E=S[0],_=S[1],I=Object(h.c)((function(e){return e.basketArray})),M=Object(h.b)();return Object(a.useEffect)((function(){c()}),[]),Object(j.jsx)("div",{className:"product-page",children:Object(j.jsxs)("div",{className:"total-product-page-container",children:[Object(j.jsx)("div",{className:"top-container"}),Object(j.jsxs)("div",{className:"bottom-container",style:E,children:[Object(j.jsx)(G,{setActiveImg:function(e){e.target.className.includes("img1")?(i("gallery-img img1 active-img"),b("gallery-img img2"),x(0)):e.target.className.includes("img2")&&(b("gallery-img img2 active-img"),i("gallery-img img1"),x(1))},currentProduct:t,img1Class:n,img2Class:d}),Object(j.jsx)("div",{className:"main-img-container",children:Object(j.jsx)("img",{src:t.img[f],alt:t.alt})}),Object(j.jsxs)("div",{className:"title-price-container",children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.price}),Object(j.jsxs)("div",{className:"buy-button-container",children:[Object(j.jsx)("button",{className:"add-button",onClick:function(){!function(){if(I.some((function(e){return e.name===t.name}))){var e=I.findIndex((function(e){return e.name===t.name}));M(g({index:e,negOrPos:"+"}))}else{var c=t;c.quantity=1,M({type:"ADD_ITEM",payload:c})}}(),C(!0),_({filter:"blur(8px)"})},children:"Add To Basket"}),I.some((function(e){return e.name===t.name}))?Object(j.jsx)("button",{className:"remove-button",onClick:function(){var e=I.findIndex((function(e){return e.name===t.name}));M(p(e))},children:"Remove From Basket"}):null]})]})]}),!0===N?Object(j.jsx)(R,{setAddedToCart:C,setBlurStyle:_}):null,Object(j.jsx)(y,{})]})})};var D=function(){var e=Object(a.useState)({color:"white"}),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)("white-underline"),n=Object(o.a)(s,2),b=n[0],u=n[1],O=Object(a.useState)("no-border"),p=Object(o.a)(O,2),g=p[0],f=p[1],x=Object(h.b)(),v=Object(h.c)((function(e){return e.basketArray}));Object(a.useEffect)((function(){if(null!==localStorage.getItem("basketArray")){var e=localStorage.getItem("basketArray");e=JSON.parse(e),console.log(e),x({type:"GET_LOCAL",payload:e})}}),[]),Object(a.useEffect)((function(){localStorage.setItem("basketArray",JSON.stringify(v))}),[v]);var y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),N=[{name:"Phanteks Enthoo Primo",img:["https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-1z.jpg","https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-6z.jpg"],alt:"Enthoo Primo PC Case",price:y.format(120),id:"PHANTEKS-ENTHOO-PRIMO"},{name:"Corsair iCUE 4000X RGB",img:["https://images-na.ssl-images-amazon.com/images/I/81MvIP9T0mL._AC_SL1500_.jpg","https://cwsmgmt.corsair.com/pdp/4000-series/corsair-4000x/images/all-the-storage-comp-mobile.png"],alt:"Corsair PC Case",price:y.format(129.99),id:"CORSAIR-4000X-RGB"}],C=[{name:"AMD Ryzen CPU",img:["https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg","https://m.media-amazon.com/images/I/61d5eSkfnpL._AC_SS450_.jpg"],price:y.format(499.9),alt:"AMD Ryzen CPU",id:"AMD-RYZEN-CPU-1"},{name:"Intel i9 CPU",img:["https://www.zenick.it/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01c43106-751a-4fa4-962b-28f6160c15fe.jpg","https://images-na.ssl-images-amazon.com/images/I/81eoV5SY8RL._AC_SY450_.jpg"],price:y.format(659.41),alt:"Intel i9 CPU",id:"Intel-i9-CPU"}],k=[{name:"Gigabyte Ga-B365M-D3H Motherboard",img:["https://images-na.ssl-images-amazon.com/images/I/71cb2RG0hmL._AC_SY450_.jpg","https://www.gigabyte.com/FileUpload/Global/KeyFeature/1146/images/spec-small.png"],price:y.format(120),alt:"Gigabyte motherboard",id:"GIGABYTE-GA-B365M-MOTHERBOARD"},{name:"ASUS B450 Gaming Motherboard",img:["https://images-na.ssl-images-amazon.com/images/I/91buE992yIL._AC_SX466_.jpg","https://dlcdnwebimgs.asus.com/gain/6BDDB156-FB29-4D59-A48D-5D386A90D579/w717/h525"],price:y.format(125.99),alt:"ASUS Motherboard",id:"ASUS-B450-MOTHERBOARD"}],S=[{name:"Corsair High Performance 16GB RAM",img:["https://images-na.ssl-images-amazon.com/images/I/61xASlWV%2BEL._AC_SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SX466_.jpg"],price:y.format(99.99),alt:"Corsair RAM",id:"CORSAIR-16GB-RAM"},{name:"G.SKILL Trident 16GB RAM",img:["https://d3fa68hw0m2vcc.cloudfront.net/4ad/173596822.jpeg","https://d3fa68hw0m2vcc.cloudfront.net/6ad/173596843.jpeg"],price:y.format(89.99),alt:"GSKILL RAM",id:"GSKILL-16GB-RAM"}],E=[{name:"Nvidia RTX 3090 Graphics Card",img:["https://images-na.ssl-images-amazon.com/images/I/61wbV8oqAbL._AC_SL1500_.jpg","https://images.stockx.com/images/NVIDIA-GeForce-RTX-3090-Graphics-Card--Founders-Edition-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606323410"],price:y.format(999.99),alt:"Nvidia GPU",id:"NVIDIA-3090-GPU"},{name:"AMD Radeon RX 6900 XT Graphics Card",img:["https://images-na.ssl-images-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg","https://images.stockx.com/images/AMD-Radeon-RX6900-XT-Graphics-Cards.png?fit=clip&bg=FFFFFF&w=1140&h=500&auto=compress&q=90&dpr=2&trim=color&updated_at=1607624156&fm=jpg&ixlib=react-9.1.5"],price:y.format(699.99),alt:"AMD GPU",id:"AMD-RADEON-6900-GPU"}],_=N.concat(C,k,E,S),M=function(){r({color:"#1f1f1f"}),u("black-underline"),f("bottom-border")},T={casesArray:N,processorsArray:C,memoryArray:S,motherboardsArray:k,gpuArray:E,totalArray:_,leaveHome:M},R={leaveHome:M,basketArray:v};return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{navColor:c,setNavColor:r,setUnderlineClass:u,setBorderClass:f,underlineClass:b,borderClass:g,leaveHome:M}),Object(j.jsxs)(I.c,{children:[Object(j.jsx)(I.a,{exact:!0,path:"/",children:Object(j.jsx)(m,{openHome:function(){r({color:"white"}),f("no-border"),u("white-underline")},leaveHome:M})}),Object(j.jsx)(I.a,{path:"/shop",children:Object(j.jsx)(P,Object(i.a)({},T))}),_.map((function(e){return Object(j.jsx)(I.a,{path:"/product/".concat(e.id),children:Object(j.jsx)(B,Object(i.a)({currentProduct:e},R))},e.id)})),Object(j.jsx)(I.a,{path:"/basket",children:Object(j.jsx)(A,{basketArray:v,leaveHome:M})})]})]})})},L=c(16),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOTAL":var c=e=t.payload;return c;default:return e}},U=c(19),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOCAL":var c=t.payload;return c;case"ADD_ITEM":var a=[].concat(Object(U.a)(e),[t.payload]);return a;case"REMOVE_ITEM":var r=Object(U.a)(e);return r.splice(t.payload,1),r;case"UPDATE_QUANTITY":var s=Object(U.a)(e),n=t.payload,i=n.index;return"+"===n.negOrPos?s[i].quantity=s[i].quantity+1:s[i].quantity=s[i].quantity-1,s;default:return e}},F=Object(L.a)({totalAmount:w,basketArray:H}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.b,q=Object(L.c)(F,z());n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h.a,{store:q,children:Object(j.jsx)(D,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.48b9ab5c.chunk.js.map