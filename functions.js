const stat100 = "| x x x xDEADx x x x x|";
const stat90 =  "|- - - - - - - - - |  |";
const stat80 =  "|- - - - - - - - |    |";
const stat70 =  "|- - - - - - - |      |";
const stat60 =  "|- - - - - - |        |";
const stat50 =  "|- - - - - |          |";
const stat40 =  "|- - - - |            |";
const stat30 =  "|- - - |              |";
const stat20 =  "|- - |                |";
const stat10 =  "|- |                  |";
const stat0 =   "||                    |";


export function displayMeter(stat){
    if(stat <= 0)  return stat0 
    if(stat === 10) return stat10
    if(stat === 20) return stat20
    if(stat === 30) return stat30
    if(stat === 40) return stat40
    if(stat === 50) return stat50
    if(stat === 60) return stat60
    if(stat === 70) return stat70
    if(stat === 80) return stat80
    if(stat === 90) return stat90
    if(stat === 100) return stat100
   

}




