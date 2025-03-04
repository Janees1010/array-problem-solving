let map = {};
let notUnique = {};
const fun = (str)=>{
    for(i = 0; i < str.length; i++){
         if(!(str[i] in map) && !(str[i] in notUnique)){
             map[str[i]] = i;
         }else{
            notUnique[str[i]] = i;
            delete map[str[i]] ;
         }
    }
    if(!Object.values(map)[0]) console.log(-1)
    else console.log(Object.values(map)[0]);
}
fun("hheellloo")