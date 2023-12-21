let i = 0;

let y = document.getElementById("slider").value;
 let x = [];
 let time = 2000;

 x[0] = 'https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg';
 x[1] = 'https://www.hdwallpapers.in/download/black_widow_captain_america_clint_barton_hawkeye_hulk_iron_man_hd_avengers_age_of_ultron-HD.jpg';
 x[2] = 'https://images4.alphacoders.com/909/thumb-1920-909185.jpg' ;
 x[3] = 'https://i.pinimg.com/originals/36/bd/7c/36bd7c8bbdd16c2e9bb3ae331f0e47a9.jpg';

 function change(){
    document.x.src = image[i];
    if(i < image.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout(change(),time);
 }
 window.onload = change();