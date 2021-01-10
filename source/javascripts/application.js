// Force HTTPS hack - should happen at DNS level?
if (location.host !== "localhost:4567" && location.protocol !== 'https:') {
    location.protocol = "https:";
}
