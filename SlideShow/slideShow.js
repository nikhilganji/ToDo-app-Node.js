/**
 * Created by Nikhil Ganji on 9/21/2017.
 */

var i =0;
var images = [];
var time = 1000; // Time can anytime be changed accordingly

// List of Images
images[0] = 'pic1.jpg';
images[1] = 'pic2.jpg';
images[2] = 'pic3.jpg';
images[3] = 'pic4.jpg';

//Image sliding logic
function changeImg(){
    document.slide.src = images[i];

    if(i<images.length-1) {
        i++;
    }
    else { i =0; }
    setTimeout(changeImg, time); // This particular function will run the changeImg function after the specified time.
}

window.onload = changeImg; // This will make sure that ChangeImg function runs as soon as the document is loaded.
