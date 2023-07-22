var mergeTwoLists = function (list1, list2) {
    let mergedArr = list1.concat(list2)
    mergedArr.sort((a, b) => {
        return a - b
    })

    return mergedArr
};

mergeTwoLists([1, 2, 4], [1, 3, 4])