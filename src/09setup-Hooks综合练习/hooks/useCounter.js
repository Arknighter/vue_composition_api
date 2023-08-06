import { onMounted, ref } from 'vue'

export default function useCounter(){
        //计数器
        const counter = ref(0)

        const increment = () => {
            counter.value++
        }

        const decrement = () => {
            counter.value--
        }

        onMounted(()=>{
            setTimeout(() => {
                counter.value = 918
            }, 1000);
        })

        return {
            counter,
            increment,
            decrement
        }
}