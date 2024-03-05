function solution(numer1, denom1, numer2, denom2) {
    const sumNumer = numer1*denom2 + numer2*denom1;
    const sumDenom = denom1*denom2;
    const gcd = findGcd(sumNumer,sumDenom);
    return[sumNumer/gcd,sumDenom/gcd];
    
   
} 
function findGcd(a,b){
        return b ===0 ? a : findGcd(b,a%b);
    }