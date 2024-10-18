////////////CountDown/////////////

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".num");
    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        startCounting(element);
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCounting(element) {
  var target = parseInt(element.getAttribute("data-val"));
  var current = parseInt(element.textContent);
  var increment = Math.ceil(target / 100);
  var countInterval = setInterval(function () {
    if (current + increment >= target) {
      element.textContent = target;
      clearInterval(countInterval);
    } else {
      current += increment;
      element.textContent = current;
    }
  }, 10);
}


/////////Contact icons/////////

  function dialPhoneNumber(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
  }

  function composeEmail(emailAddress) {
    const encodedEmail = encodeURIComponent(emailAddress);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`, '_blank');
  }

  function openMap(address) {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  }


  /////////Grievance//////////////////
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('grievanceForm');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Additional validation logic can be added here
      if (validateForm()) {
        // Display success message
        successMessage.textContent = "Form submitted successfully!";
        successMessage.classList.add('show');
        setTimeout(function() {
          successMessage.classList.remove('show');
        }, 3000); // Hide message after 3 seconds
  
        // Reset form (optional)
        form.reset();
      }
    });
  
    function validateForm() {
      // Placeholder validation for demonstration
      return true;
    }
  });
  

//////////////////Gallery///////////////////
//////////////////Gallery///////////////////
//////////////////Gallery///////////////////


// Firebase storage reference
const storageRef = firebase.storage().ref();

function fetchImages() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(imageRef) {
            displayImage(imageRef);
        });
    }).catch(function(error) {
        console.error("Error fetching images:", error);
    });
}

function displayImage(imageRef) {
    imageRef.getDownloadURL().then(function(url) {
        const gallery = document.getElementById('gallery');
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <img src="${url}" alt="Gallery Image">
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
        `;
        gallery.appendChild(div);

        // Add click event to enlarge the image
        div.addEventListener('click', function() {
            enlargeImage(url);
        });
    }).catch(function(error) {
        console.error("Error displaying image:", error);
    });
}

function enlargeImage(url) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" src="${url}">
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Fetch images on load
document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
});
