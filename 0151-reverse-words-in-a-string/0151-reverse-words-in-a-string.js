/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //remove white spaces at start and end and remove two white spaces in a row everywhere
    s = s.trim().replace(/  +/g, ' ');
    
    //convert to array as strings are immutable in javascript
    let arrayS = [...s];
    
    
    //two pointer approach
    let start = 0;
    let end = arrayS.length-1;
    
    while(start < end){
        let temp = arrayS[start];
        arrayS[start] = arrayS[end];
        arrayS[end] = temp;
        start++;
        end--;
    }
    start = 0;
    end = 0;
    for(let i = 0; i < arrayS.length; i++){
        if(arrayS[i] === ' '){
            end = i-1;
            while(start < end){
                let temp = arrayS[start];
                arrayS[start] = arrayS[end];
                arrayS[end] = temp;
                start++;
                end--;
            }
            start = i+1;
        }
        else if(i === arrayS.length-1){
            end = i;
            while(start < end){
                let temp = arrayS[start];
                arrayS[start] = arrayS[end];
                arrayS[end] = temp;
                start++;
                end--;
            }
            start = i+1;
        }
    }
    return arrayS.join("")
};
