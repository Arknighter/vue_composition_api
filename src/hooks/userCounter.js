//函数式编程 ， 复用性强
import { ref } from 'vue'
export default function userCounter(){
    let counter = ref(100)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    return{
        counter,
        increment,
        decrement
    }
}