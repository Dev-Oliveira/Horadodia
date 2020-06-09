function carregar(){
    iniTime()
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
        
        if (hora >= 0 && hora < 12){
        //BOM DIA!
        document.getElementById('saudacao').innerHTML = ('BOM DIA!!')
        img.src = 'fotomanha.png'
        document.body.style.background = '#fc9c8e'
        } else if (hora >= 12 && hora < 18 ){
        //BOA TARDE!
        document.getElementById('saudacao').innerHTML = ('BOA TARDE!!')
        img.src = 'fototarde.png'
        document.body.style.background = '#399ff4'
        } else {
        //BOA NOITE!
        document.getElementById('saudacao').innerHTML = ('BOM TARDE!!')
        img.src = 'fotonoite.png'
        document.body.style.background = '#211e6b'
}
}
function temporeal(){
    data = new Date(), hora = data.getHours(), min = data.getMinutes(), seg = data.getSeconds()

    if(hora < 10) hora = '0' + hora
    if(min < 10) min = '0' + min
    if(seg < 10) seg = '0' + seg

    let tempo = `${hora} : ${min} : ${seg}`
    document.getElementById('msg').innerHTML = tempo
}


function iniTime(){
    setInterval(temporeal, 1000)
}
