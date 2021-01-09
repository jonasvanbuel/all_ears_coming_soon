// This is where it all goes :)

// Force HTTPS hack - needs to happen at server
// UNLESS LOCALHOST!!!
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
