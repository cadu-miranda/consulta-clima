const hideShow = () => {

    try {

        const conteudo = document.querySelectorAll('.container-in')

        Array.from(conteudo).forEach(e => {

            e.hidden = !e.hidden
        })

    } catch (error) {

        console.log(error)
    }
}

const recebeConteudo = async () => {

    try {

        const chaveAPI = document.querySelector('#chaveAPI').value
        const cidadePais = document.querySelector('#cidadePais').value
        const linguagem = document.querySelector('#linguagem').value
        const pesquisa_mostra = document.querySelectorAll('.container-in')

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadePais}&units=metric&lang=${linguagem}&appid=${chaveAPI}`

        const resposta = await fetch(url)
        const dados = await resposta.json()

        Array.from(pesquisa_mostra).forEach(e => {

            e.hidden = false
        })

        mostraDados(dados)


    } catch (error) {

        console.log(error)
    }
}

const mostraDados = async (dados) => {

    try {

        const nome = dados.name
        const pais = dados.sys.country
        const descricao = dados.weather[0].description
        const temperatura = dados.main.temp
        const umidade = dados.main.humidity
        const latitude = dados.coord.lat
        const longitude = dados.coord.lon

        const mapa = `https://maps.google.com/maps?q=${latitude},${longitude}&output=svembed`

        document.querySelector('.nome').innerHTML = `${nome} - ${pais}`
        document.querySelector('.descricao').innerHTML = descricao
        document.querySelector('.temperatura').innerHTML = `${temperatura} °C`
        document.querySelector('.umidade').innerHTML = `${umidade} %`
        document.querySelector('.latitude').innerHTML = latitude
        document.querySelector('.longitude').innerHTML = longitude
        document.querySelector('.mapa-site').src = mapa

    } catch (error) {

        console.log(error)
    }
}

setInterval(() => {

    try {

        const dataAtual = new Date()
        const _dataAtual = `${dataAtual.toLocaleTimeString()} - ${dataAtual.toLocaleDateString()}`

        document.querySelector('#timestamps').innerHTML = _dataAtual

    } catch (error) {

        console.log(error)
    }
}, 1000)
