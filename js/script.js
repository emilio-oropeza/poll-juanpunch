"use strict";
var access_token = '685480728288084|ttuNeXhhsMqbcLR_S1AnR51fP-g'; 
var postID = '1138189306294253'; 
var refreshTime = 5; 
var defaultCount = 0; 

var reactions = ['LIKE', 'LOVE', 'WOW', 'HAHA', 'SAD', 'ANGRY'].map(function (e) {
    var code = 'reactions_' + e.toLowerCase();
    return 'reactions.type(' + e + ').limit(0).summary(total_count).as(' + code + ')'
}).join(',');

var	like = $('#like-count');
var	love = $('#love-count');
var	wow = $('#wow-count');
var	haha = $('#haha-count');
var	sad = $('#sad-count');
var	angry = $('#angry-count');

var cara_like = $('#cara-like');
var cara_love = $('#cara-love');
var cara_wow = $('#cara-wow');
var cara_haha = $('#cara-haha');
var cara_sad = $('#cara-sad');
var cara_angry = $('#cara-angry');

var img_cara_path = "images/"+partido+"/";

function refreshCounts() {
    var url = 'https://graph.facebook.com/v2.8/?ids=' + postID + '&fields=' + reactions + '&access_token=' + access_token;
	$.getJSON(url, function(res){
		var likeCount  = res[postID].reactions_like.summary.total_count;
		var loveCount  = res[postID].reactions_love.summary.total_count;
        var wowCount  = res[postID].reactions_wow.summary.total_count;
        var hahaCount  = res[postID].reactions_haha.summary.total_count;
        var sadCount  = res[postID].reactions_sad.summary.total_count;
        var angryCount  = res[postID].reactions_angry.summary.total_count;
        var total = likeCount + loveCount + wowCount + hahaCount + sadCount + angryCount;

        if(total === 0){total = 1;}

        var porlike = parseInt((likeCount*100)/total)+ "%" ;
        var porlove = parseInt((loveCount*100)/total)+ "%" ;
        var porwow = parseInt((wowCount*100)/total)+ "%" ;
        var porhaha = parseInt((hahaCount*100)/total)+ "%" ;
        var porsad = parseInt((sadCount*100)/total)+ "%" ;
        var porangry = parseInt((angryCount*100)/total)+ "%" ;

        var counts = [parseInt((likeCount*100)/total),parseInt((loveCount*100)/total),parseInt((wowCount*100)/total),parseInt((hahaCount*100)/total),parseInt((sadCount*100)/total),parseInt((angryCount*100)/total)];
        counts = getImagesArrange(counts);

        var imglike = img_cara_path + "like" + getImage(counts[0]);
        var imglove = img_cara_path + "love" + getImage(counts[1]);
        var imgwow = img_cara_path + "wow" + getImage(counts[2]);
        var imghaha = img_cara_path + "haha" + getImage(counts[3]);
        var imgsad = img_cara_path + "sad" + getImage(counts[4]);
        var imgangry = img_cara_path + "angry" + getImage(counts[5]);

        $(cara_like).attr("src",imglike);
        $(cara_love).attr("src",imglove);
        $(cara_wow).attr("src",imgwow);
        $(cara_haha).attr("src",imghaha);
        $(cara_sad).attr("src",imgsad);
        $(cara_angry).attr("src",imgangry);

        like.text(porlike);
		love.text(porlove);
		wow.text(porwow);
		haha.text(porhaha);
		sad.text(porsad);
		angry.text(porangry);
	});
}

function getImagesArrange(array) {
    var toSort = array.slice(0);
    toSort.sort(function(a, b){return b-a});
    var toReturn = [0,0,0,0,0,0];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        for (var j = 0; j < toSort.length; j++) {
            if(toSort[j] === value){
                toReturn[i] = j;
            }
        }
    }
    return toReturn;
}

function getImage(value){
    var img = "1.png";
    switch(value){
        case 0:        
            img = "3.png";
            break;        
        case 1:
        case 2:
            img = "2.png";
            break;
        case 3:
        case 4:
        case 5:
            img = "1.png";
            break;
    }
    return img;
}

function golpe() {
    var golpeado = ["#love-guante","#sad-guante","#angry-guante","#wow-guante","#haha-guante"];
    var random = Math.floor((Math.random() * 4));
    $(golpeado[random]).show();
    setTimeout(function(){
        $(golpeado[random]).hide();
        console.log(golpeado[random]);
    }, 2000);
    
}

$(document).ready(function(){
    setInterval(refreshCounts, refreshTime * 1000);
    refreshCounts();
    setInterval(golpe, 5000);
});