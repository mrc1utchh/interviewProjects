// get quote from api
const quoteContainer = document.getElementById("quote-con tainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

    function showLoadingSpinner(){
        loader.hidden = false;
        quoteContainer.hiddem = true;
    }

    function removeLoadingSpinner(){
        if (!loader.hidden){
            quoteContainer.hidden = false;
            loader.hidden = true;
        }
    }


async function getQuote(){
    showLoadingSpinner();
    const proxyUrl =  'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // if the author is blank, add "unknown"
        if(data.quoteAuthor===''){
            authorText.innerText = "Unknown";
        }else{
            authorText.innerText - data.quoteAuthor;
        }
        //reduce font size for long quotes
        if (data.quoteText.length > 120){
                quoteText.classList.add("long-quote");
        }else{
            quoteText.classList.remove("long-quote");
        }
        quoteText.innerText = data.quoteText;
        //Stop Loader, Show Quote
        removeLoadingSpinner();
        throw new Error("oops")
    }catch (error){
        console.log(error);
        getQuote(); //test code
        
    }
}

//Tweet Quote
function tweetQuote(){
    const quote = quoteText.inerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
}

//Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load
// you always want the function to be declared befor you call it
getQuote();
