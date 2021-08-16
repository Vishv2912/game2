class Form{
constructor(){


this.title=createElement("h1");
this.bodyguard=createButton("BodyGuard");
this.thief=createButton("Thief");
this.story=createElement("a6");
this.name=createInput("Enter Name")
this.bodyguardTask=createElement("h6")
this.thiefTask=createElement("h6")
this.play=createButton("LET'S PLAY")


}
display(){
console.log("this.display")
this.title.html("*DIAMOND CHASE*")
this.title.position(displayHeight/2+100,20)

this.story.html("There Was a millionaire. He loved diamonds,and all the diamonds were worth crores of rupees./n One day he wanted to go abroad for work, so he put his favorite diamond in a maze and put a bodyguard to protect it./n As soon as a gang of thieves heard this news, they sent 2 of the sharpest thieves in their gang to steal the diamond./n Let's see if the bodyguard catches the thieves or The thief was cleverly stealing diamonds ")
this.story.position(displayHeight/2+900,100)


this.name.position(300,300)



this.bodyguard.position(200,400)
this.bodyguard.style("backgroundColor","yellow")
this.bodyguard.style("width","200px")
this.bodyguard.style("height","50px")
this.bodyguard.style("borderRadius","100px")

this.thief.position(400,400)
this.thief.style("backgroundColor","yellow")
this.thief.style("width","200px")
this.thief.style("height","50px")
this.thief.style("borderRadius","100px")





this.bodyguard.mousePressed(()=>{
    this.bodyguard.hide()
    this.thief.hide()


    this.bodyguardTask.html("bodyguard tasks---")
this.bodyguardTask.position(200,250)
    this.play.position(300,400)
    this.play.style("backgroundColor","aqua")
    this.play.style("width","200px")
    this.play.style("height","50px")
    this.play.style("borderRadius","100px")
    

})


    this.thief.mousePressed(()=>{
        this.bodyguard.hide()
        this.thief.hide()
        
        this.thiefTask.html("thief tasks---")
this.thiefTask.position(200,250)
        this.play.position(300,400)
        this.play.style("backgroundColor","aqua")
        this.play.style("width","200px")
        this.play.style("height","50px")
        this.play.style("borderRadius","100px")
        
    
        
        })




}



}















