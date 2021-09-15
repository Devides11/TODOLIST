let list = document.getElementById("list")
let inputInfo = document.getElementById("input1")
let buttonAdd = document.getElementById("buttonAdd")

class Item {
    constructor(){
        this.list = list
        this.node = null
        this.button = null
    }
    addText (text) {
        this.node = document.createElement("div")
        this.node.classList.add("conteiner__list__text") 

        let line = document.createElement("div")
        line.innerText = text

        this.button = document.createElement("button")
        this.button.innerText = "pohui"
        this.button.addEventListener("mousedown", ()=>{
            this.node.remove()
        })

        this.node.appendChild(line)
        this.node.appendChild(this.button)
        this.list.appendChild(this.node)

    }
        


}

buttonAdd.addEventListener("mousedown", ()=>{
    let item = new Item()
    item.addText(inputInfo.value)
    inputInfo.value = ""
})



