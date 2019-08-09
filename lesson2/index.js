var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)
  
  new Vue({
    el: '#app',
    data: obj
})

var data = {a : 1}
var vm = new Vue({
    el: '#example',
    data: data
})

alert(vm.$el)
alert(document.getElementById('example'))