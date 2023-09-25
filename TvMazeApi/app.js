const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${data}`)
    disImage(res.data);


})
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    form.elements.query.value = "";
    document.querySelector('div').innerHTML = "";
})

const disImage = (shows) => {
    for (let s of shows) {
        if (s.show.image.medium) {
            const img = document.createElement('IMG');
            img.src = s.show.image.medium;
            const p = document.createElement('P');
            p.innerText = `Name : ${s.show.name}`;
            const p1 = document.createElement('P');
            p1.innerText = `Language : ${s.show.language}`;
            document.querySelector('div').append(img);
            document.querySelector('div').append(p);
            document.querySelector('div').append(p1);
        }
    }
}