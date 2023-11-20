var canPlaceFlowers = function (flowerbed, n) {

    for (let i = 0; i < flowerbed.length; i++) {

        if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            flowerbed[i] = 1
            n--
        }
        return n <= 0
    }
};

canPlaceFlowers([1, 0, 0, 0, 1], 1)

