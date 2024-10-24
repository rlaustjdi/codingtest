function solution(s) {
    let wordArr = s.split(' ');
    let numberArr = wordArr.map((word)=>Number(word));
    let min = Math.min(...numberArr);
    let max = Math.max(...numberArr);
    return `${min} ${max}`;
}