gsap.to(".image-siuu svg", {
    scale: 100,
    opacity: 1,
    stagger: 0.25,
    duration: 1,
    transformOrigin: "50% 57%",
    scrollTrigger: {
      trigger: ".hero-4",
      pin: true,
      end: `+=${innerHeight * 1}`, // Adjust this value to reduce scrolling distance
      scrub: 2,
      ease: Power4.easeIn,
      onUpdate: (self) => {
        // Update the opacity based on the scroll progress
        gsap.to(".image-suii", {
          opacity: self.progress,
        });
      }
    }
  });
  
  var rellax = new Rellax('.rellax');









let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
let tl2 = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl2.to("#create", {y:'0%', duration:0.7, stagger:0, delay:3.5});





var purchase = document.getElementById('purchase');
var vehicles = document.getElementById('vehicles');
var accessories = document.getElementById('accessories');

var detailsPurchase = document.querySelector('.details-purchase');
var detailsVehicles = document.querySelector('.details-vehicles');
var detailsAccessories = document.querySelector('.details-accessories');

function purchaseSection() {
    purchase.style.color = '#fff';
    vehicles.style.color = '#939393';
    accessories.style.color = '#939393';

    detailsPurchase.style.display = 'block';
    detailsVehicles.style.display = 'none';
    detailsAccessories.style.display = 'none';

    detailsPurchase.style.animation = 'fade 0.5s forwards';
}

function vehiclesSection() {
    purchase.style.color = '#939393';
    vehicles.style.color = '#fff';
    accessories.style.color = '#939393';

    detailsPurchase.style.display = 'none';
    detailsVehicles.style.display = 'block';
    detailsAccessories.style.display = 'none';

    detailsVehicles.style.animation = 'fade 0.5s forwards';
}

function accessoriesSection() {
    purchase.style.color = '#939393';
    vehicles.style.color = '#939393';
    accessories.style.color = '#fff';

    detailsPurchase.style.display = 'none';
    detailsVehicles.style.display = 'none';
    detailsAccessories.style.display = 'block';

    detailsAccessories.style.animation = 'fade 0.5s forwards';
}





// Audio ON/OFF for video button

var audioBtn = document.querySelector('.audio-btn');
var audio = document.getElementById('audioPlayer');
var audioBtnLine1 = document.querySelector('.line-visible');
var audioBtnLine2 = document.querySelector('.line');

let isPlaying = false;

audioBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        audioBtn.innerHTML = 'Audio OFF';
        audioBtnLine2.classList.remove('show-line');
    } else {
        audio.play();
        audioBtn.innerHTML = 'Audio ON';
        audioBtnLine2.classList.toggle('show-line');
    }
    isPlaying = !isPlaying;
});




// Pause/resume video button

var video = document.querySelector('video');
const pauseButton = document.querySelector('.pause-button');

pauseButton.addEventListener('click', function() {
    if (video.paused) {
        // Play the video
        video.play();
        pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        // Pause the video
        video.pause();
        pauseButton.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
});

// Parallax scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var opacity = 1 - (scroll / $(document).height());

    $(".hero-1 video").css({
        height: (100 + scroll / 4) + "%",
        opacity: opacity
    })
})




// scroll fade
var navbar = document.querySelector('.navbar');
var title = document.getElementById('title-1');
var title2 = document.getElementById('title-2');
var scrollParagraph = document.querySelector('.hero-1 p');
var downArrow1 = document.querySelector('.arrow-1');
var downArrow2 = document.querySelector('.arrow-2');
var prevScrollpos = window.scrollY;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    if (currentScrollPos >= 1300) {
        tl2.to("#create2", {y:'0%', duration:0.7, stagger:0.2, delay:0});
        tl2.to("#create3", {x:'0%', duration:0.7, stagger:0.2, delay:0});
    } 
}
   




window.addEventListener("scroll", () => {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past 74px
    if (scrollPosition > 73) {
        // Calculate the opacity based on scroll position (linear gradient from 1 to 0)
        const opacity = 1 - (scrollPosition - 73) / 100;
    
        // Set the opacity of the image
        title.style.opacity = opacity;
        title2.style.opacity = opacity;

        audioBtn.style.opacity = opacity;

        pauseButton.style.opacity = opacity;

        downArrow1.style.opacity = opacity;
        downArrow2.style.opacity = opacity;

        scrollParagraph.style.opacity = opacity;

        audioBtnLine1.style.opacity = opacity;
    } else {
        // Reset the opacity to 1 if the user scrolls back up
        title.style.opacity = 1;
        title2.style.opacity = 1;

        audioBtn.style.opacity = 1;

        pauseButton.style.opacity = 1;

        downArrow1.style.opacity = 1;
        downArrow2.style.opacity = 1;

        scrollParagraph.style.opacity = 1;

        audioBtnLine1.style.opacity = 1;
    }
});




const scrollImage = document.querySelector("video");

window.addEventListener("scroll", () => {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past 74px
    if (scrollPosition > 300) {
        // Calculate the opacity based on scroll position (linear gradient from 1 to 0)
        const opacity = 1 - (scrollPosition - 300) / 200;
    
        // Set the opacity of the image
        scrollImage.style.opacity = opacity;
    } else {
        // Reset the opacity to 1 if the user scrolls back up
        scrollImage.style.opacity = 1;
    }
    // console.log(scrollPosition);
});


// Navbar

// var all = document.getElementById('all');
// var navItems = document.querySelector('.nav-items');
// var menuIcon = document.querySelector('.menu-icon');
// var topIconPart = document.querySelector('.top');
// var bottomIconPart = document.querySelector('.bottom');
// var blackSpace = document.querySelector('.black-space');

// function openMenu() {
//     navItems.style.display = 'flex';
//     blackSpace.style.display = 'block';
//     document.documentElement.style.overflowY = 'hidden';
//     document.body.style.overflowY = 'hidden';
//     // menuIcon.style.marginRight = '17px';
//     topIconPart.classList.add('active-top');
//     bottomIconPart.classList.add('active-bottom');
//     // Apply the slide animation when opening the menu
//     navItems.style.animation = 'slide 0.5s forwards';
//     blackSpace.style.animation = 'slide 0.5s forwards';
// }

// function closeMenu() {
//     // Apply the "back" animation to the entire nav-items element
//     navItems.style.animation = 'back 0.5s forwards';
//     blackSpace.style.animation = 'back 0.5s forwards';
//     setTimeout(function () {
//         navItems.style.display = 'none';
//         blackSpace.style.display = 'none';
//         document.documentElement.style.overflowY = 'auto';
//         document.body.style.overflowY = 'auto';
//         // menuIcon.style.marginRight = '0';
//         topIconPart.classList.remove('active-top');
//         bottomIconPart.classList.remove('active-bottom');
//         // Reset the animation properties for the nav-items element
//         navItems.style.animation = '';
//         blackSpace.style.animation = '';
//     }, 500); // Adjust the timeout value to match the animation duration
// }

// menuIcon.addEventListener('click', function () {
//     if (navItems.style.display === 'none' || navItems.style.display === '') {
//         openMenu();
//     } else {
//         closeMenu();
//     }
// });





var navItems = document.querySelector('.navvv');
var menuIcon = document.querySelector('.menu-icon');
var topIconPart = document.querySelector('.top');
var bottomIconPart = document.querySelector('.bottom');
var createNav = document.getElementById('create6');

function openMenu() {
    tl.to("#create6", {y:'0%', duration:0.7, stagger: 0.1, delay:1});
    navItems.style.display = 'flex';
    navItems.style.animation = 'fade-in 1s';
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    topIconPart.classList.add('active-top');
    bottomIconPart.classList.add('active-bottom');
}

function closeMenu() {
    tl.to("#create6", {y:'100%', duration:0.7, stagger: 0, delay:0.5});
    setTimeout(function () {
        navItems.style.display = 'none';
    }, 1500)
    setTimeout(function () {
        navItems.style.animation = 'fade-out 1s';
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
        topIconPart.classList.remove('active-top');
        bottomIconPart.classList.remove('active-bottom');
    }, 1000); // Adjust the timeout value to match the animation duration
}

menuIcon.addEventListener('click', function () {
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        openMenu();
    } else {
        closeMenu();
    }
});

  



// HERO 2

const track = document.getElementById("image-track");
const slideFriction = 20;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {

    if (track.dataset.mouseDownAt === "0") return;

    var mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth * slideFriction;

    // Check if track.dataset.percentage is a number. If it is not, set it to 0.
    if (isNaN(parseFloat(track.dataset.percentage))) {
        track.dataset.percentage = 0;
    }

    var percentage = - (mouseDelta / maxDelta) * 100,
    nextPercentageUnconstrained = parseFloat(track.dataset.percentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -72);

    track.dataset.percentage = nextPercentage;

    track.animate(
        {
            transform: `translate(${nextPercentage}%, -50%)`
        }, 
        {
            duration: 1200, fill: "forwards"
        }
    )

    for (const image of track.getElementsByClassName("hero-2-image")){
        image.animate(
            {
                objectPosition: `${nextPercentage + 100}% 50%`
            }, 
            {
                duration: 1200, fill: "forwards"
            }
        )
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = 0;
    track.dataset.prevPercentage = track.dataset.percentage;
}

const dragMessage = document.getElementById('drag-message');

// Add a click event listener to the div
dragMessage.addEventListener('mousedown', function () {
    // Hide the div by setting its display property to 'none'
    dragMessage.style.opacity = '0';
    setTimeout(function() {
        dragMessage.style.display = 'none';
    }, 500)
});



// const hero2Image = document.getElementsByClassName('hero-2-image');
// const hero2Video = document.getElementsByClassName('hero-2-video');

// hero2Image.addEventListener('mouseenter', () => {
//     hero2Video.style.opacity = 1;
//     hero2Video.play();
// });

// hero2Image.addEventListener('mouseleave', () => {
//     hero2Video.style.opacity = 0;
//     hero2Video.pause();
// });

// Function to add event listeners to a video element
function setupVideoHoverBehavior(videoElement) {
    let isMouseDown = false;

    // Add an event listener to track the mouse button state
    document.body.addEventListener('mousedown', function (event) {
        if (event.button === 0) {
            isMouseDown = true;
        }
    });

    document.body.addEventListener('mouseup', function (event) {
        if (event.button === 0) {
            isMouseDown = false;
        }
    });

    videoElement.addEventListener('mouseenter', function () {
        if (!isMouseDown) {
            videoElement.style.opacity = '1';
            videoElement.play();
        }
    });

    videoElement.addEventListener('mouseleave', function () {
        videoElement.style.opacity = '0';
        videoElement.pause();
    });
}

// Get all the video elements by their IDs and set up the event listeners for each
const hero2Video1st = document.getElementById('hero-2-video-1');
const hero2Video2nd = document.getElementById('hero-2-video-2');
const hero2Video3rd = document.getElementById('hero-2-video-3');
const hero2Video4th = document.getElementById('hero-2-video-4');
const hero2Video5th = document.getElementById('hero-2-video-5');
const hero2Video6th = document.getElementById('hero-2-video-6');
const hero2Video7th = document.getElementById('hero-2-video-7');
// Add more elements as needed

// Set up event listeners for each video element
setupVideoHoverBehavior(hero2Video1st);
setupVideoHoverBehavior(hero2Video2nd);
setupVideoHoverBehavior(hero2Video3rd);
setupVideoHoverBehavior(hero2Video4th);
setupVideoHoverBehavior(hero2Video5th);
setupVideoHoverBehavior(hero2Video6th);
setupVideoHoverBehavior(hero2Video7th);
// Call setupVideoHoverBehavior for each additional element






// HERO 3 Accordion


var accordion = document.getElementsByClassName('accordion-btn');
var i;

const acc1 = document.getElementById('acc-btn-1');
const acc2 = document.getElementById('acc-btn-2');
const acc3 = document.getElementById('acc-btn-3');
const acc4 = document.getElementById('acc-btn-4');









var img1 = document.getElementById('image-1-hero-3');
var img2 = document.getElementById('image-2-hero-3');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        // Find the associated panel by skipping the <span>
        var panel = this.nextElementSibling;
        while (panel && panel.tagName !== 'DIV' && !panel.classList.contains('accordion-panel')) {
            panel = panel.nextElementSibling;
        }

        // Toggle the "active" class for the clicked accordion button
        this.classList.toggle('active');

        // Close all open panels except the one being clicked
        for (var j = 0; j < accordion.length; j++) {
            var otherPanel = accordion[j].nextElementSibling;
            while (otherPanel && otherPanel.tagName !== 'DIV' && !otherPanel.classList.contains('accordion-panel')) {
                otherPanel = otherPanel.nextElementSibling;
            }
            var otherButton = accordion[j];
            if (otherPanel !== panel) {
                otherPanel.style.maxHeight = null;
                otherButton.classList.remove('active');
                // Set opacity to 0 for the info element of the closing accordion
                var infoElement = otherPanel.querySelector('.info');
                if (infoElement) {
                    infoElement.style.opacity = 0;
                }
            }
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            // Set opacity to 0 for the info element when closing the accordion
            var infoElement = panel.querySelector('.info');
            if (infoElement) {
                infoElement.style.opacity = 0;
            }
        } else {
            // Set opacity to 0 initially with a 100ms delay
            var infoElement = panel.querySelector('.info');
            if (infoElement) {
                infoElement.style.opacity = 0;
                setTimeout(function() {
                    infoElement.style.opacity = 1;
                }, 300); // Adjust the delay time as needed
            }
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


let button1Clicked = false;
let button2Clicked = false;
let button3Clicked = false;
let button4Clicked = false;

acc1.addEventListener('click', function () {
    if (button1Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "nissan-gtr-35-iphone-12-pro-max.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx8.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button1Clicked = !button1Clicked;
});

acc2.addEventListener('click', function () {
    if (button2Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "peakpx5.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx4.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button2Clicked = !button2Clicked;
});


acc3.addEventListener('click', function () {
    if (button3Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "43eb5f61-076f-4627-80b9-71d5435edf96.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "tumblr_puj4dtEnTg1tvarkwo1_1280.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';

        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button4Clicked) {
            button4Clicked = false;
        }
    }

    button3Clicked = !button3Clicked;
});

acc4.addEventListener('click', function () {
    if (button4Clicked) {
        img1.src = "peakpx2.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "peakpx3.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
    } else {
        img1.src = "31ba97d4180a07a9b43466f55cb20bfd.jpg";
        // Reset the animation
        img1.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img1.style.animation = '1s pannel-opacity-1';

        img2.src = "lexus-lfa-630-x-1280-wallpaper-9r3zx4m5x78fsbfd.jpg";
        // Reset the animation
        img2.style.animation = 'none';
        void img1.offsetWidth; // Trigger a reflow to apply the reset
        img2.style.animation = '1s pannel-opacity-1';
        
        if (button1Clicked) {
            button1Clicked = false;
        }
        if (button2Clicked) {
            button2Clicked = false;
        }
        if (button3Clicked) {
            button3Clicked = false;
        }
    }

    button4Clicked = !button4Clicked;
});









const links = [
    document.querySelector('.navbar-brand'),
    document.getElementById('nav-links-1'),
    document.getElementById('nav-links-2'),
    document.getElementById('nav-links-3'),
    // document.getElementById('nav-links-4'),
    document.getElementById('nav-links-5'),
    acc1,
    acc2,
    acc3,
    acc4,
    document.getElementById('purchase'),
    document.getElementById('vehicles'),
    document.getElementById('accessories'),
    document.getElementById('brand-footer')
];
  
  function addRandomTextEffect(link) {
    link.onmouseover = (event) => {
      let iterations = 0;
  
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('')
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
  
            return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random capital letter
          })
          .join('');
  
        if (iterations >= 15) clearInterval(interval);
  
        iterations += 1;
      }, 40);
    };
  }
  
  links.forEach(link => {
    addRandomTextEffect(link);
  });


























paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from(".hero-1", 2, {
         delay: 1.2,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });


