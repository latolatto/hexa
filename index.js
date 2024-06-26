// window.onload = function() {
//     setTimeout(function() {
//         window.scrollTo(0, 0);
//     }, 1); // Adjust delay as needed
// }

  

document.getElementById("year").innerHTML = new Date().getFullYear();


// Function to handle form submission
const form = document.getElementById('form');
const result = document.getElementById('result');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
        // Get the user's email from the form data
        const userEmail = formData.get('email');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait..."



        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Thank you for your message! We will get back to you via email as soon as possible!";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);


            });
    });


    
const curser = document.querySelector(".curser");
document.addEventListener('mousemove', function(e){
    let X = e.clientX;
    let Y = e.clientY;

    curser.style.left = X + "px";
    curser.style.top = Y + "px";
})

// Select the random ball element
const randomBall = document.querySelector('.random-ball');

// Function to generate random coordinates within the viewport
function getRandomCoordinates() {
    const maxX = window.innerWidth - randomBall.offsetWidth;
    const maxY = window.innerHeight - randomBall.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return { x: randomX, y: randomY };
}

// Function to move the random ball to a new random position
function moveRandomBall() {
    const { x, y } = getRandomCoordinates();
    randomBall.style.left = `${x}px`;
    randomBall.style.top = `${y}px`;
}

// Move the random ball initially
moveRandomBall();

// Move the random ball every 3 seconds (adjust as needed)
setInterval(moveRandomBall, 3000);

// Event listener to move the random ball on window resize (optional)
window.addEventListener('resize', moveRandomBall);


// Select the random ball element
const randomBall2 = document.querySelector('.random-ball2');

// Function to generate random coordinates within the viewport
function getRandomCoordinates2() {
    const maxX2 = window.innerWidth - randomBall2.offsetWidth;
    const maxY2 = window.innerHeight - randomBall2.offsetHeight;
    const randomX2 = Math.random() * maxX2;
    const randomY2 = Math.random() * maxY2;
    return { x: randomX2, y: randomY2 };
}

// Function to move the random ball to a new random position
function moveRandomBall2() {
    const { x, y } = getRandomCoordinates2();
    randomBall2.style.left = `${x}px`;
    randomBall2.style.top = `${y}px`;
}

// Move the random ball initially
moveRandomBall2();

// Move the random ball every 3 seconds (adjust as needed)
setInterval(moveRandomBall2, 1000);

// Event listener to move the random ball on window resize (optional)
window.addEventListener('resize', moveRandomBall2);