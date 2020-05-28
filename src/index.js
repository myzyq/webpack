import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './compoents/test.vue'

$(function () {
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'blue')
})

class Person {
    static info = 'aaa'
}
console.log(Person.info)