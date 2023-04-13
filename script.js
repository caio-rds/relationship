const bonus_pack = [
    {
        'exhibition': 'Total dedicação',
        'url_background': './media/dedication.png',
        'explain': 'Total apoio e suporte pra todo momento que precisar. Sempre te colocando pra cima, única hora que vou te colocar pra baixo... deixa quieto'
    },
    {
        'exhibition': 'Gracejos Ilimitados',
        'url_background': './media/jokes.png',
        'explain': 'Nesse Pacote, o Repertório de piadas é infinito, até quando você não quiser, irá ter piadas.'        
    },
    {
        'exhibition': 'Lealdade Ilimitada',
        'url_background': './media/loyal.png',
        'explain': 'Confiança absoluta.'        
    },
    {
        'exhibition': 'Um amigo',
        'url_background': './media/friend.png',
        'explain': 'Além de tudo, você ganhará um amigo.'        
    },
    {
        'exhibition': 'Carinho e Atenção Ilimitados',
        'url_background': './media/cuddles.png',
        'explain': 'Auto Explicativo.'        
    }
]

function MoveNB(){
    if ($(window).width() <= 900) {                
        
        // O acesso está sendo feito por um dispositivo móvel
        let top_random = Math.floor(Math.random() * 600) + 100;
        let left_random = Math.floor(Math.random() * 300);
        let old_top_random
        do {
            top_random = Math.floor(Math.random() * 600) + 100;
        } while(old_top_random + 100 <= top_random &&
            old_top_random + 100 >= top_random &&
            old_top_random - 100 <= top_random &&
            old_top_random - 100 >= top_random &&
            top_random >= 368 && top_random <= 427
        );               

        do {
            left_random = Math.floor(Math.random() * 300);
        } while(left_random >= 40 && left_random <= 190 && top_random >= 426 && top_random <= 500);
            
        $('.no-button').css('top', top_random + 'px' ).css('left', left_random + 'px');    
        old_top_random = top_random    
    } else {
        // o acesso está sendo feito por um dispositivo desktop
        let top_random = Math.floor(Math.random() * 1200) + 100;
        let left_random = Math.floor(Math.random() * 1400) + 100;
        let old_top_random
        do {
            top_random = Math.floor(Math.random() * 700) + 100;
        } while(old_top_random + 200 <= top_random &&
            old_top_random + 200 >= top_random &&
            old_top_random - 200 <= top_random &&
            old_top_random - 200 >= top_random 
        );       
    
        do {
            left_random = Math.floor(Math.random() * 1400) + 100;
        } while(left_random >= 700 && left_random <= 1000);  
    
        $('.no-button').css('top', top_random + 'px' ).css('left', left_random + 'px');    
        old_top_random = top_random    
    }

}

function loop_swal(count){
    if (count >= bonus_pack.length) {        
        return;
    }

    Swal.fire({
        title: bonus_pack[count].exhibition,
        text: bonus_pack[count].explain,
        showDenyButton: true,
        confirmButtonText: 'Continuar',
        denyButtonText: 'Parar',
        imageUrl: bonus_pack[count].url_background,
        imageWidth: 300,
        imageHeight: 200        
    }).then((result) => {
        if (result.isConfirmed) {
            loop_swal(count + 1)
        } else {
            return ''
        }
    })
}

function Accept(){
    Swal.fire({
        title: 'Parabéns',
        text: 'Você adquiriu um produto sem devolução, será entregue na sua casa.',
        imageUrl: './media/yes.webp',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Deu ruim na Imagem kkk'        
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'OBG DEUS',
            text: 'hahahahahahaha ~risadinha de vilão intensifies~',
            imageUrl: './media/jesus.webp',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Falhou a segunda imagem'        
            })
        }}
    );
}

$(document).on('click','.yes-button',function(){    
    Accept()
});

$(document).on('click', '.no-button', function(){
    MoveNB()
});


$(document).on('mouseenter', '.no-button', function(){
    MoveNB()
});

$(document).on('click', '.payment-info',function(){
    Swal.fire({
        title: 'VALOR DO PACOTE',
        imageUrl: './media/money.jpg',
        imageWidth: 300,
        imageHeight: 200,
        text: 'Promoção imperdível, o pacote vitalício está saindo por apenas: 2 pizzas da domino\'s ou mais por mês e carinho'
    }).then((result) => {
        Swal.fire({
            title: 'Achou interessante ?',
            text: 'Clique no Sim na página principal para comprar o produto'
        })
    })
});

$(document).on('click', '.plus-info', function(){
    loop_swal(0)
});