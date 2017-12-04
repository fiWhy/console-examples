function clearConsole() {
    console.clear();
}

function createTile(maxHeight, color) {
    var height = Math.ceil(Math.random() * maxHeight);
    return "display: block; background-color: " + color + "; float: left; width: 20px; padding-bottom: " + height + "px; height: " + height + "px;";
}

function drawTiles(tiles) {
    var preparedArguments = ["%c ".repeat(tiles.length)].concat(tiles);
    console.log.apply(null, preparedArguments);
}

function playMusic(options) {
    clearConsole();
    var defaultOptions = {
        color: "#ccc",
        tilesCount: 10,
        height: 100
    };

    var calculatedOptions = options ? Object.assign(options, defaultOptions) : defaultOptions;

    var tilesColor = calculatedOptions.color,
        tilesCount = calculatedOptions.tilesCount,
        tilesMaxHeight = calculatedOptions.height;

    var interval = setInterval(function () {
        var tiles = [];

        for (var i = 0; i < tilesCount; i++) tiles.push(createTile(tilesMaxHeight, tilesColor));

        clearConsole();
        drawTiles(tiles);
    }, 200);

    return function () {
        clearInterval(interval);
    }
}
