let mounts={
    mountains:['everest','ponmudy'],
    printWithDash:function(){
            
        setTimeout(function(){
            console.log('Normal function : ',this.mountains.join(" - "))
        },1000)
    }
}
mounts.printWithDash()

let mount ={
    mountains:['everest','ponmudy'],

    printWithDash :function(){

        setTimeout(()=> console.log('arrow function : ',this.mountains.join(" - ")),1000)
    }
};
mount.printWithDash();