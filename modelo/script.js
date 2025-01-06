function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('inasc')

    let res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{

        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        //adicionando a imagem diretop do javaScript
        let img = document.createElement('img')
        //atribuindo a imagem um id
        img.setAttribute('id', 'foto')

        //se tiver no masculiono selecionado
        if(sex[0].checked){
            genero = 'Masculino'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'criança-homem.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src','jovem-homem.png' )
                //jovem
            }else if(idade < 60){
                img.setAttribute('src', 'adulto-homem.png')
                //adulto
            }else{
                img.setAttribute('src', 'idoso-homem.png')
                //idoso
            }
        }
        //se tiver no feminino selecionado
        if(sex[1].checked){
            genero = 'Feminino'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'criança-menina.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-mulher.png')
                //jovem
            }else if(idade < 60){
                img.setAttribute('src', 'adulta-mulher.png')
                //adulto
            }else{
                img.setAttribute('src', 'idosa-mulher.png')
                //idoso
            }
        }
       res.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos de idade`
       res.style.textAlign = 'center'
        res.appendChild(img)
        
    }

}