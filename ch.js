// Task 01:
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and 
// logs each value with a delay of 1 second between logs.
var attente=()=> new Promise((resolve)=> 
    setTimeout(resolve, 1000));

var t = [2,8,5,9,4]

const iterateWithAsyncAwait=async(tab)=>{
    for (let i = 0; i < tab.length; i++) {       
        console.log(tab[i])
        await attente()
    }
}

iterateWithAsyncAwait(t)


// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. 
// Use await to wait for the API response and then log the data.
const awaitCall=()=> fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())
.then((json)=>console.log(json))
.catch((err)=>console.log(err))
awaitCall()

// Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. 
// If the API call fails, catch the error and log a user-friendly error message.
const awaitCall=async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

awaitCall()

// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions 
//sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
const attente=()=> new Promise((resolve)=>setTimeout(resolve,2000))

const fun1=async()=>{
    await attente()
    console.log('This is function 1')
}

const fun2=async()=>{
    await attente()
    console.log('This is function 2')
}

const fun3=async()=>{
    await attente()
    console.log('This is function 3')
}

const chainedAsyncFunctions=async()=>{
    await fun1()
    await fun2()
    await fun3()
}

chainedAsyncFunctions()

// Task 04:
// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently 
//using Promise.all(). Log the combined results after both requests have resolved.
const conso1=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/10')
    const data = await res.json()
    return data
}

const conso2=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await res.json()
    return data
}

const concurrentRequests=async()=>{
    const tab = await Promise.all([conso1(),conso2()])
    
    for (let i = 0; i < tab.length; i++) {
       console.log(tab[i].name)        
    }
}

concurrentRequests()

// Task 05:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each 
// URL concurrently using Promise.all(). Log the responses once all requests are complete.
var tabApi = [
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/7",
]

const consoApi=async(url)=>{
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const parallelCalls=async()=>{
    var apis = tabApi.map((el,i,t)=> consoApi(el))
    console.log(apis)

    const tab = await Promise.all(apis)

        for (let i = 0; i < tab.length; i++) {
            console.log(tab[i].name)        
    }

}

parallelCalls()