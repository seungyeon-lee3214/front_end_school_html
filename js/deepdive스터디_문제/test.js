{
    // Q1. 다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.
    var nums = [100, 200, 300, 400, 500];
    const result = nums.slice(0, 3);
    console.log(result);
}

{
    // Q2. 별 찍기 문제
    // 그림과 같이 첫째 줄에는 별 1개, 둘째 줄에는 별 2개,,, 다섯째 줄에는 별 5개가 출력되는 코드를 입력하세요.
// 출력만 되어도 좋고, 숫자(N)를 입력 받아서 N번째 (1<=N<=100) 줄에는 별 N개가 찍히도록 해도 좋습니다
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j <= i; j++) {
            console.log('*');
        }
         console.log('\n');
    }
}

{
    // Q3. 어떤 사람의 성적이 주어졌을 때, 평점은 몇 점인지 출력하세요!
    // 예를 들어, 'A+'가 주어지면 평점은 4.3 입니다. '+'는 0.3을 더하고 '-'는 0.3을 빼면 됩니다.
    // 아래 참고에 나온 성적 이외에는 주어지지 않는다고 가정하겠습니다. ('E'는 없어요!)

    let grade = 'c-';
    let result = 0;
    if (grade[1] === '+') {
        result += 0.3;
    } else if (grade[1] === '-') {
        result -= 0.3;
    } else {
        result = 0;
    }
    switch (grade[0].toUpperCase()) {
        case 'A':
            result += 4;
            break;
        case 'B':
            result += 3;
            break;
        case 'C':
            result += 2;
            break;
        case 'D':
            result += 1;
            break;
        case 'F':
            result += 0;
            break;
        default:
            console.log('Invalid grade');
    }
}


{
    // Q4. for문을 사용하여 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하세요!
    let count = 0;
    for (let i = 0; i < 20; i++) {
        if (i % 2 !== 0 && i % 3 !== 0) {
            count += i;
        }
    }
    console.log(count);
}

{
    // Q6. 조건문 또는 삼항연산자으로 num 이 짝수인 경우에는 '짝수입니다.' 를 반환하고 홀수인 경우에는 '홀수입니다.'를 반환하세요.
    let num = 3;
    let result = num % 2 === 0 ? '짝수입니다' : '홀수입니다';
    console.log(result);
}


