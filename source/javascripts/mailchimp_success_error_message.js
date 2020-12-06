const messages = {
  success: "Thank you for subscribing! 🎉",
  error: "To do: Custom error message..."
}

// Success response
var target = document.getElementById('mce-success-response');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (target.innerHTML === "Thank you for subscribing!") {
      target.innerHTML = messages.success;
    };
  });
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);


// Error response
