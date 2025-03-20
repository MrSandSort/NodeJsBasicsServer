function delay(time){
    return new Promise(resolve => setTimeout(resolve, time)); // usage of resolve and reject
}

async function Greetings(name){
    await delay(1000);
    console.log(name);
}

Greetings("Hi,Sandesh paudel how are you?")