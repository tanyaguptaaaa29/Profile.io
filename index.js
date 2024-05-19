// Function to animate the numbers
function animateNumbers(targetElement, startValue, endValue, duration) {
  let current = startValue;
  const increment = (endValue - startValue) / duration;
  const element = document.getElementById(targetElement);

  const timer = setInterval(function () {
    current += increment;
    element.textContent = Math.round(current);

    if (current >= endValue) {
      clearInterval(timer);
      element.textContent = endValue;
    }
  }, 10); // Adjust the interval for smoother animation
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumbers("projectCount", 0, 15, 600); // Change the duration as needed
  animateNumbers("clientsCount", 0, 5, 600);
  animateNumbers("hoursCount",0,1000,600);
});




document.addEventListener("DOMContentLoaded", function() {
    const workSection = document.querySelector(".work");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        if (isElementInViewport(workSection)) {
            workSection.classList.add("visible");
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});


document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll("#feature");

    features.forEach(function(feature) {
        feature.addEventListener("mouseenter", function() {
            feature.classList.add("hovered");
        });

        feature.addEventListener("mouseleave", function() {
            feature.classList.remove("hovered");
        });
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Send an AJAX request to the server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/mqkrnndb', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(new FormData(event.target));

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Replace the form with a thank you message
      document.querySelector('#contact').innerHTML = '<h2>Thank you for your message!</h2>';
    } else {
      // Handle the error
      console.error('An error occurred:', xhr.responseText);
    }
  };
});

