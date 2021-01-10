// This is where it all goes :)

console.log('Running application.js...');

// Force HTTPS hack - needs to happen at server
// UNLESS LOCALHOST!!!

if (location.host !== "localhost:4567" && location.protocol !== 'https:') {
    console.log('Replacing location.protocol...');
    location.protocol = "https:";
}
