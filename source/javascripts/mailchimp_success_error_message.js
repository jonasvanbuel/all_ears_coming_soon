// VALIDATION BEFORE SUBMITTING
const targetNode = document.getElementById('mc_embed_signup');
const mcConfig = { attributes: true, childList: true, subtree: true };
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for(const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes[0].classList[0] === 'mce_inline_error') {
      const mceInlineError = mutation.addedNodes[0];
      mceInlineError.setAttribute('style', 'margin-bottom:0;padding-bottom:0;background:none;color:#f02917;font-size:12px;font-weight:700');
    }
  }
};
const mcOberserver = new MutationObserver(callback);
mcOberserver.observe(targetNode, mcConfig);


// API RESPONSE AFTER SUBMITTING
const messages = {
  success: "Thank you for subscribing! 🎉",
  error: "To do: Custom error message..."
}

// Success server response
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

// TO DO: Error server response
