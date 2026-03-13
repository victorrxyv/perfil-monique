function abrirImagem(img){
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imgGrande");
    
    modal.style.display = "flex";
    modalImg.src = img.src;
    }
    
    function fecharImagem(){
    document.getElementById("modal").style.display = "none";
    }


function abrirPopup(){
    document.getElementById("popup").style.display="flex";
    }
        
    function fecharPopup(){
    document.getElementById("popup").style.display="none";
    }
        
    function irWhatsapp(){
    window.location.href="https://wa.me/558597540403?text=Oi%20Monique,%20acabei%20de%20ver%20as%20prévias%20no%20site%20e%20fiquei%20louco%20para%20ver%20o%20resto%20de%20pertinho...%20Me%20passa%20os%20valores%20dos%20packs?";
    }
        
    function irTelegram(){
    window.location.href="https://t.me/seulink";
    }


    const nomes = [
        "Lucas",
        "Gabriel F",
        "Matheus B",
        "Rafael",
        "João V",
        "Pedro H",
        "Felipe",
        "Bruno",
        "Thiago",
        "Ísaias",
        "Victor",
        "Leandro"
        ];
        
        function mostrarCompra(){
        
        let nomeAleatorio = nomes[Math.floor(Math.random()*nomes.length)];
        
        let alerta = document.getElementById("alerta");
        let texto = document.getElementById("textoAlerta");
        
        texto.innerHTML = '<i class="fa-solid fa-circle-user"></i> ' + nomeAleatorio + ' liberou o acesso VIP! ' + '<i class="fa-solid fa-gift"></i>';
        
        alerta.style.display = "block";
        
        setTimeout(()=>{
        alerta.style.display = "none";
        },4000);
        
        }
        
        setInterval(mostrarCompra,30000);

        

