import Vue from 'vue'
export default ()=>{
  Vue.directive('fuzzy',function (el,binding) { 
    const {value}=binding
    const img=new Image()
    img.src=value
    img.onload=function () { 
      el.src=value
      el.style.filter="blur()"
     }
   })
}