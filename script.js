$(document).on('click','.yes-button',function(){    
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
});

$(document).on('click', '.no-button', function(){
    MoveNB()
});


$(document).on('mouseenter', '.no-button', function(){
    MoveNB()
});


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