let body = document.getElementById("background-change");
body.style.backgroundColor = "#0000FF"; 

var botones = document.querySelector(".botones");

let quotes = document.getElementById("text");

document.getElementById("new-quote").addEventListener("click", function(click){
    let color ="#"
    let textQuotes = ['Don\'t cry because it\'s over, smile because it happened. - Dr. Seuss',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. - Albert Einstein',
  'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind. - Bernard M. Baruch',
  'You only live once, but if you do it right, once is enough. - Mae West',
  'Be the change that you wish to see in the world. - Mahatma Gandhi',
  'In three words I can sum up everything I\'ve learned about life: it goes on. - Robert Frost',
  'If you tell the truth, you don\'t have to remember anything. - Mark Twain',
  'Always forgive your enemies; nothing annoys them so much. - Oscar Wilde',
  'Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi',
  'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde',
  'Life is what happens to us while we are making other plans. - Allen Saunders',
  'I have not failed. I\'ve just found 10,000 ways that won\'t work. - Thomas A. Edison',
  'The man who does not read has no advantage over the man who cannot read. - Mark Twain',
  'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living. Dr. Seuss',
  'That which does not kill us makes us stronger. - Friedrich Nietzsche',
  'If you judge people, you have no time to love them. - Mother Teresa',
  'For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson',
  'It is never too late to be what you might have been. - George Eliot',
  'I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you. - Friedrich Nietzsche',
  'Everything you can imagine is real. - Pablo Picasso',
  'Sometimes the questions are complicated and the answers are simple. - Dr. Seuss',
  'We don\'t see things as they are, we see them as we are. - Anaïs Nin'            ]

    click.preventDefault();
    
    var randomNumber = Math.floor(Math.random() * (textQuotes.length));
    console.log(randomNumber);  

    document.getElementById('text').innerHTML = textQuotes[randomNumber];

    color += Math.random().toString(16).slice(2,8);
    body.style.backgroundColor = color; 
    botones.style.backgroundColor = color;

    document.getElementById( 'tweet-quote' ).href="https://twitter.com/intent/tweet/?text=" +  textQuotes[randomNumber];

});

