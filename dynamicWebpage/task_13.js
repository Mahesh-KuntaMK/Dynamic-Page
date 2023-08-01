//using the promises
// console.log("person 1: shows the ticket");
// console.log("person 2: shows the ticket");
// const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000)
// });
// const getPopcorn=promiseWifeBringingTickets.then((t)=>{
//     console.log("wife:i have tickets");
//     console.log("husbend:we should go in");
//     console.log("wife:I need popcorn");
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// });
// const getButter=getPopcorn.then((t)=>{
//     console.log("husbend:i got the popcorn");
//     console.log("husbend: we should go in");
//     console.log(" wife: i need butter for popcorn");
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// });
//    const getColdDrinks=getButter.then((t)=>{
//          console.log("wife: lets get some cooldrinks");
//          console.log("husbend: we should go in");
//          return new Promise((resolve,reject)=>resolve('${t} colddrinks'))
//    })
// getButter.then((t)=>console.log(t));
// console.log("person 4: shows the ticket");
// console.log("person 5: shows the ticket");

//using the async and wait;
console.log("person 1: shows the ticket");
console.log("person 2: shows the ticket");

const preMovie=async()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket");
        },3000)
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const getButter=new Promise((resolve,reject)=>resolve('butter'))
    const getColdDrinks=new Promise((resolve,reject)=>resolve("colddrinks"))

    let ticket=await promiseWifeBringingTickets;
        console.log(`wife:i have ${ticket}`);
        console.log("husbend:we should go in");
        console.log("wife:I need popcorn");
    let popcorn=await getPopcorn;
        console.log(`husbend:i got the ${popcorn}`);
        console.log("husbend: we should go in");
        console.log(" wife: i need butter for popcorn");
    let butter=await getButter;
    //Now create a new promise called getColdDrinks which come after husband gets butter.
    //Integrate the code in both async and await and also promises' code
        console.log(`husbend: i got ${butter} and popcord anything else`);
        console.log("wife: i need colddrinks");
    let colddrinks=await getColdDrinks;
        console.log(`husbend:i got u the ${colddrinks}`)
        console.log("wife:we are getting late we should go in");
        console.log("husbend: tq got u rembered and lets go in");
    

return ticket;
}

preMovie().then((m)=>console.log(`person 3: shows ${m}`));
console.log("person 4: shows the ticket");
console.log("person 5: shows the ticket");







