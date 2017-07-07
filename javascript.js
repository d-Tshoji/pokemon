$(function(){

    var pokemons = ["dane","gray","genger","okido"];
    var maxRand = 4;
    
    $('.skills-item').on('click', function(){

        var power = $(this).data('power');
        var type = $(this).data('type');
        var rand = Math.floor( Math.random() * maxRand);
        var target = pokemons[rand];
        var lifeValue = $('#' + target).find('.life-value');
        var life = lifeValue.attr('data-life');

        life -= power;

        if (life < 30)

        lifeValue.attr('data-life', life);
        lifeValue.css('width', life + '%');

        alert(life);
        return false;

        
    });

    












});