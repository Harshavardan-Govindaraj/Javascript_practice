
/*
//XHR
const req = new XMLHttpRequest();// create a request object
//callback to run on no error
req.onload = function () {
    const data = JSON.parse(this.responseText);//parse json into js objects
    console.log(data);
}
//to run on eroor
req.onerror = function () {
    console.log("error", this);
}
req.open("GET", "https://swapi.dev/api/people/5");//open the request with method and url, heere get method is used
req.send();//send the request;
*/

//Fetch
//supports promises
/*
fetch("https://swapi.dev/api/people/5")//sends promise back
    .then((res) => {
        console.log("Success", res);
        //to take body .json returns promises
        return res.json()
    })
    .then((data) => {
        console.log("DONE", data)
        return fetch("https://swapi.dev/api/people/3");
    })
    .then((data) => {
        console.log("Success", data);
        return data.json();
    })
    .then((data) => {
        console.log("Done", data);
    })

    .catch((e) => {
        console.log("Error", e);
    });
*/
//using fetch with async await
/*const example = async () =>//async=>to return promise
{
    const res = await fetch("https://swapi.dev/api/people/5");
    const data = await res.json();
    console.log(data);
}
example();
*/

//axios => library for http request
//to add axios , add <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
//axios.get=>return promise
/*axios.get("https://swapi.dev/api/people/5")
    .then((res) => { console.log(res.data.name) })
*/

const button = document.querySelector('.but');
const display = document.querySelector('.api');
button.addEventListener('click', () => {

    const id = document.querySelector('#apiId').value;
    example(id);
    document.querySelector('#apiId').value = "";
})
const example = async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    //console.log(res.data);
    const data = res.data;
    const p = document.createElement('P');
    p.innerText = `Name = ${data.name} Gender = ${data.gender}`;
    display.append(p);
}