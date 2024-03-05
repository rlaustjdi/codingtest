function solution(s){
    let count=0;
    const str = s.toLowerCase();
    for(i=0;i<str.length;i++){
        if(str[i] ==="p") 
            count++
        else if(str[i]==="y")
            count--
    }

    return count ===0 ? true:false;
}