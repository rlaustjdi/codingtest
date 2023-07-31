function solution(n, k) {
    var answer = 0;
    var service = 0 ;
    service = parseInt(n/10);
    answer = (n*12000) + (k*2000) - (service*2000);
    return answer;
}