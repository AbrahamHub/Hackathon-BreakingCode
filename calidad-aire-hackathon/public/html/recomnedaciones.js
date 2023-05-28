function displayLetters(pos) {
    const letterGroups = [['N', 'X', 'G', 'C'], ['P', 'J', 'A', 'D'], ['H', 'Y', 'I', 'Z'], ['O', 'Q', 'T', 'B'], ['K', 'V', 'E', 'U'], ['M', 'S', 'W'], ['R', 'F', 'L']];
    var letterGroup = letterGroups[pos]; // Example letter group
    var letterGroupContainer = document.getElementById('letterGroupContainer');
    letterGroupContainer.textContent = letterGroup.join(', ');
}