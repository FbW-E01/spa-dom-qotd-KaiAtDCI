const QUOTES = [
    { quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`, author: `Nelson Mandela` },
    { quote: `The way to get started is to quit talking and begin doing.`, author: `Walt Disney` },
    { quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`, author: `Steve Jobs` },
];


function getRandomQuote (quotes) {
    const numberOfQuotes = quotes.length;
    const quoteNumber = Math.floor(Math.random() * numberOfQuotes);
    return quotes[quoteNumber];
}

function createQuoteHTML(quote) {
    return `
      <div class="quote-wrapper">
        <div class="quote">${quote.quote}</div>
        <div class="separator">&nbsp-&nbsp;</div>
        <div class="author">${quote.author}</div>
      </div>
    `;
}

function insertRandomQuote() {
    const quote = getRandomQuote(QUOTES);
    const quoteWrapper = document.getElementById('quote-wrapper');
    quoteWrapper.innerHTML = '';
    quoteWrapper.insertAdjacentHTML('beforeend', createQuoteHTML(quote));
}

document.addEventListener('DOMContentLoaded', () => insertRandomQuote());
document.getElementById('randomQuoteButton').addEventListener('click', () => insertRandomQuote());





