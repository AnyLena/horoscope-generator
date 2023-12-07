const prompt1 = [
  "Mars is in the sign of Scorpio,",
  "The sun enters the house of Leo,",
  "Mercury is in Aquarius,",
  "Venus moves into Pisces,",
  "Saturn is in Capricorn,",
  "Uranus enters Taurus,",
  "Neptune enters Virgo,",
  "Pluto moves through Sagittarius,",
  "Jupiter is in Aquarius,",
  "Mercury enters the sign of Cancer,",
];
const prompt2 = [
  "influencing your emotional stability.",
  "bringing success in your career.",
  "leading to clear communications.",
  "positively impacting your love life.",
  "and urges you to hold onto your long-term goals.",
  "and brings changes to your financial area.",
  "and fosters your spiritual development.",
  "which can lead to profound transformations.",
  "encouraging you to explore new ideas.",
  "promoting emotional openness.",
];
const prompt3 = [
  "A new opportunity is on the horizon for you.",
  "Your creativity will soar to new heights this month.",
  "Financial abundance is coming your way.",
  "An unexpected encounter could lead to a significant relationship change.",
  "Stay open to new connections, as the universe has exciting plans for you.",
  "Travel plans are in your future, and they will bring positive changes.",
  "Your career is about to take off in a big way.",
  "A major breakthrough in personal growth awaits you this year.",
  "Love and romance are in the stars for you right now.",
  "You will find success by following your intuition and taking risks.",
];


const horoscopeDiv = document.getElementById('horoscope-text')
const horoscopeBtn = document.getElementById('start-btn')


const handleText = () => {
    event.preventDefault();
    
    const randomNum1 = Math.floor(Math.random() * prompt1.length)
    const randomNum2 = Math.floor(Math.random() * prompt2.length)
    const randomNum3 = Math.floor(Math.random() * prompt3.length)
    
    const horoscope = `${prompt1[randomNum1]} ${prompt2[randomNum2]} ${prompt3[randomNum3]}`
    
    horoscopeDiv.innerHTML = horoscope
}

horoscopeBtn.addEventListener("click", handleText);