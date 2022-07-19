
const Actors = ['jerry', 'roy', 'erica', 'james', 'dustin', 'eleven', 'willy', 'mike', 'jenny', 'steve', 'nancy'];

const secretMessage = Actors.map(firstLetter => {
    return firstLetter[0]
});


for (var i = 0; i < 10; i++) {
    if (secretMessage[i] == 'j') {
        console.log("Goodbye ", Actors[i]);
    }
    else {
        console.log("Hello", Actors[i]);
    }
}
