
class heroiDeAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar(){
       let ataque
          switch (this.tipo) {
             case "magno":

             this.ataque = "magia"
                break;
             case "guerreiro":

             this.ataque = "espada"
                break;
             case "monge":

             this.ataque = "marcias"
                   break;
            
             case "ninja":

              this.ataque = "shuriken"
               break;

       
             default:
                console.log("Não existe esse tipo")
                break;
            }  
           
        
            console.log(`"o ${this.tipo} atacou usando ${this.ataque}`)
           
        }
    
   
   
}

let atacar = new heroiDeAventura("rodrigo", "35", "kkk")

atacar.atacar()








