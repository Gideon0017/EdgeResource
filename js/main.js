// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 6.524379, lng: 3.379206 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({position: loc, map: map});
}

// Sticky menu background
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        this.document.querySelector('#navbar').computedStyleMap.opacity = 0.9;
    }
    else {
        this.document.querySelector('#navbar').computedStyleMap.opacity = 1;
    }
});

// Smooth Scrolling 
$('#navbar a, btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // Perform client-side validation
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var message = document.getElementById("message").value;
    
//     if (name === "" || email === "" || phone === "" || message === "") {
//       alert("Please fill in all fields.");
//       return;
//     }
    
//     // Create and send AJAX request
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "process_form.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
        //   alert("Message sent successfully!");
          // Optionally, reset the form
//           document.getElementById("contactForm").reset();
//         } else {
//           alert("Oops! Something went wrong.");
//         }
//       }
//     };
//     xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&message=" + encodeURIComponent(message));
//   });