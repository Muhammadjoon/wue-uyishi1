const obj = {
    data() {
        return {
            son: 0,
            matn: "knopka",
            knopka: "Turn off",
            svet: "off",
            agar: false,
            text: "",
            word: "Hello",
            click: "Btn",
            list: [
                { link: "task_1", img: "main.png" },
                { link: "task_2", img: "main.png" },
                { link: "task_3", img: "main.png" }
            ]
        }
    },
    methods: {
        count() {
            this.son++
        },
        show() {
            this.knopka = this.knopka == "Turn off" ? "Turn on" : "Turn off"
            this.svet = this.svet == "off" ? 'on' : 'off'
            this.agar = !this.agar
        },
        clickk(){
            this.word = this.word.split("").reverse().join("");
        }   
    }
}
Vue.createApp(obj).mount('.container')
// function reverseString(s){
//     return s.split("").reverse().join("");
// }
// reverseString("Hello");
// console.log(reverseString("Hello"));