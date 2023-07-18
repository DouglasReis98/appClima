const apiChave = "0d5edf30d97ed270a0896b00c206945e";

const inCidade = document.getElementById("cidade");
const btnSearch = document.querySelector(".select_cidade button");

const outData = document.querySelector(".data")
const outCidade = document.querySelector(".cidade span");
const outTemperatura = document.querySelector(".temperatura span");
const outCondicao = document.querySelector(".condicao span");
const outUmidade = document.querySelector(".umidade span");
const outVento = document.querySelector(".vento span");

const dataClima = async (cidade) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiChave}&lang=pt_br`;

    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);

    return data
}

const mostrarClima = async (cidade) => {

    const dadosClima = await dataClima(cidade);
    outCidade.innerText = dadosClima.name
    outTemperatura.innerText = `${parseInt(dadosClima.main.temp)}°`
    outCondicao.innerText = dadosClima.weather[0].description
    outUmidade.innerText = dadosClima.main.humidity
    outVento.innerText = dadosClima.wind.speed;

}

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = inCidade.value;
    mostrarClima(cidade)
})

inCidade.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const cidade = e.target.value;
        mostrarClima(cidade)
    }

})

window.addEventListener("load", () => {

    const date = new Date().toLocaleDateString();
    outData.innerText = date;
})