class Animal{
    constructor(id,ner,turul, nas, huis,dugaar){
        this.id=id;
        this.name=ner;
        this.type=turul;
        this.age=nas;
        this.sex=huis;
        this.number=dugaar;
    }
    search(turul,utga){
        if(this.type==turul){

        }
    }
    searchSex(huis){
        if(this.sex==huis){

        }
    }
    searchAge(){
        if(this.age=nas){
            
        }
    }
}
class list{
    constructor(){
        this.amidtad = []
    }
    filter(ylgah){
        answer = []
        for(let i = 0; i < this.amidtad.length; i++){
            Unen = true;
            for(int j = 0; j < yalgah.length; j++){
                Unen = Unen & yalgah[j](amitad[i]);
            }
            if(Unen) answer.push(amitad[i]);
        }
        return answer;
    }
}

jagsaalt = new list();
shalga1(amitan){
    return amitan.name == 'Muur';
}
shalga2(amitan){
    return amitan.type == 'Zagas';
}

urdun = jagsaalt.filter([shalga1, shalga2]);
