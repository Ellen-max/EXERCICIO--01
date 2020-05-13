document.querySelector('.menu').addEventListener('click', function(){
    document.querySelector('.menu_itens').classList.add('center_nav')
    document.querySelector('.menu_itens').classList.remove('none')
})
document.querySelector('.menu2').addEventListener('click', function(){
    document.querySelector('.menu_itens').classList.remove('center_nav')
    document.querySelector('.menu_itens').classList.add('none')
})