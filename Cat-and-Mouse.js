function catMouse(x, j) {

    let status = ''


    if (!x.includes('C') || !x.includes('D') || !x.includes('m')) {
        status = 'boring without all three'
    } else {

        if (x.includes('C')) {
            let index = x.indexOf('C')
            let subStr = x.slice(index, index + j + 1)
    
    
            for (let i = 0; i < subStr.length; i++) {
                let currentLetter = subStr[i]
    
                if (currentLetter === 'D') {
                    status = 'Protected!'
                    break
                } else if (currentLetter === 'm') {
                    status = 'Caught!'
                    break
                }   else {
                    status = 'Escaped!'
                }
    
            }
    
        } else {
            status = 'Protected!'
        }

    }

console.log(status);}

catMouse ("...D..mC.", 15)