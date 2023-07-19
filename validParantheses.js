var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

isValid("()[]{}")

// if currentParanthesis s[i] / c === '(' push ')' to the stack array.
// break to start loop frrom next char
// if secondCharacter s[i] / c !=== from the one stored in the stack return false
// stack holds only closing bracket. If every second element is different from the stack ten it is not a closing bracket