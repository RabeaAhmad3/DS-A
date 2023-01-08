/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //lowercase string and remove all non alphanumeric characters
    s = s.toLowerCase();
    s = s.replace(/\W/g, "");
    s = s.replace("_","");

    //two pointer method
    let left = 0;
    let right = s.length - 1;
    while(left <= right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};