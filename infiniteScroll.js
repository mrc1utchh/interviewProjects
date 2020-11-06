const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totaleImages = 0;
let photosArray = [];
let initialLoad = true;




//Unsplash API
const count = 3;
const apiKey = "21hJNp6Zh-8JVCtuX3QP1HIiDTVWKxFkXWk-BRzVPBY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&YOUR_ACCESS_KEY&count=${count}`;

//check if all images were loaded
function imageLoaded(){
    imagesLoaded++;
    console.log(imagesLoaded)
    if(imagesLoaded===totalImages){
        ready = true;
        loader.hidden = true;
        console.log("ready =", ready);
        count=30;
    }
}


// Helper Function to Set Attributes on DOM Elemenets
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttributes(key, attributes[key]);
    }
}


//Create Elements for Links & Photos, add to DOM
function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log("total images", totalImages);
        // run function for each object in photosArray
    photosArray.forEach((photo)=>{
        // create <a> to link to Unsplash
    const item = document.createElement("a");
   // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
        href: photo.links.html,
        target: "_blank",
    })
        // create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
    });
        // Event Listener, check when each is finished loading
        img.addEventListener("load", imageLoaded);
        // Put <img> inside the <a>, put both inside the imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get Photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json(); 
        displayPhotos();      
    }catch(error){
        //catch error here
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', ()=>{
   if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
       getPhotos();
       ready = false;
   } 
});

// on load
getPhotos();