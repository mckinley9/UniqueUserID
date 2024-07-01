const animals = [
    'Lion', 'Tiger', 'Bear', 'Wolf', 'Fox', 'Eagle', 'Hawk', 'Dolphin', 'Shark', 'Elephant',
    'Giraffe', 'Zebra', 'Kangaroo', 'Koala', 'Panda', 'Penguin', 'Octopus', 'Cheetah', 'Gorilla', 'Rhino',
    'Sloth', 'Flamingo', 'Raccoon', 'Beaver', 'Moose', 'Owl', 'Crocodile', 'Platypus', 'Lemur', 'Meerkat'
];

function generateRandomString(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateUniqueUserID() {
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const letters = generateRandomString(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const numbers = generateRandomString(3, '0123456789');
    
    return `${animal}${letters}${numbers}`;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const userID = generateUniqueUserID();
    document.getElementById('userID').textContent = userID;
});