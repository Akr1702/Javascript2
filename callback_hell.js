async function purchasecake(){
    setTimeout(()=>{
        console.log("cake purchased");
    },2000);
}
async function curtaindec(){
    setTimeout(()=>{
        console.log("curtains purchased");
    },4000);
}
async function ballons(){
    setTimeout(()=>{
        console.log("ballons purchased");
    },5000);
}
async function cakecutting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        },7000);
    });
}
//callback hell

// console.log("happy birthday:1");
// console.log("happy birthday:2");
// console.log("happy birthday:3");
// purchasecake();
// console.log("happy birthday:4");
// console.log("happy birthday:5");
// curtaindec();
// purchasecake();
// console.log("happy birthday:6");
// curtaindec();
// ballons();
// console.log("happy birthday:7");
// console.log("happy birthday:8");
// console.log("happy birthday:9");
// console.log("happy birthday:10");



// purchasecake(()=>{
//     curtaindec(()=>{
//         ballons(()=>{
//             cakecutting();
//         });
//     });
// });

//promise
// purchasecake()
// .then(()=>curtaindec())
// .then(()=>ballons())
// .then(()=>cakecutting())
// .catch((e)=>console.log(e))
// .finally(()=>console.log("happy ended"));
async function birthdaycelebration(){
    try{
        await purchasecake();
        await curtaindec();
        await ballons();
        await cakecutting();
    }catch(e){
        console.log(e);
    }
}
birthdaycelebration();