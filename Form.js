class Form{
    constructor(){
        this.input = createInput("Ñæmé")
        this.button = createButton("Płæÿ")
        this.greeting = createElement("h4")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title= createElement("h2")
        title.html("car ræčįñg gåmę")
        title.position(130,0)
        
        this.button.position(250,200)
        this.input.position(250,160)

            this.button.mousePressed( ()=> {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount+1
            player.index= playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(130,160)
        })
    }
}