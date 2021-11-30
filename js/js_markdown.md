# JS 용어 정리 

## ✨변수(타입)
- Array(배열) 
  * 형태 : ['하나', '둘', '셋'], [100, 200, 300],
  * 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index])
- String(문자열)
  * 형태 : 'abcde', "abcde", \`abcde`
  * 호출 : 변수명, 변수명[0] (변수명[index])
- Number(숫자)
  * 형태 : 10, 10.123
  * 호출 : 변수명
- Boolean(논리값)
  * 형태 : true, false
  * 호출 : 변수명
- Object(객체)
  * 형태 : { <br>
              "지역이름": "전국",<br>
              "확진자수": 24889,<br>
              "격리해제수": 23030,<br>
              "사망자수": 438,<br>
              "십만명당발생율": 48.0<br>
            }
            {key: value} 쌍으로 이루어짐
  * 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (변수명.key, 변수명[key])
ex) koreaRegionalData 첫번째 객체의 확진자수의 접근할려면?<br>
 📝 koreaRegionalData[0].확진자수 
 <br>
<br>
📌자바스크립트 규칙 
- undefine
   * typeof(undefined)
   * 'undefined'
- null 
   * typeof(null)
   * 'object'
- NaN 
  * typeof(NaN)
  * 'number'
  
<br>
<br>
<br>
<br>
<br>

>연산 : 주어진 정보를 통해 수나 식을 일정한 규칙에 따라 어떤 값이나 결과를 구하는 과정
<br>
## ➕➖✖➗ 연산 
📌 우선순위 가장 높은 연산자 ( )
* 산술연산
    -  ( ' - ', ' + ' , ' * ',  ' / ' , ' % ', ' ** ' ) 더하기, 빼기, 곱하기, 나누기, 나머지, 제곱
    -  우선순위 <u>** > *, /, % > + -</u>
- 논리연산
   -  (!(not) &&(and) ||(or))
   -  우선순위 <u> ! > && > ||</u>
- 비교연산
  - ( >, <, >=, <=, ==, === !=, !== )
  - 크다, 작다, 크거나 같다,작거나 같다,
  - == 같다(타입X) ===같다(타입 확인)
  - != 같지 않다(타입X) !==같지 않다(타입확인)

## ✅ 조건문, 반복문
- 조건문
  - (if, else if, else, switch)
  - 논리적 참,거짓보다 다양한 상황에 따라 코드 블록을 결정할때 switch문
  - if문 많은 비교연산은 가독성이 떨어진다
  <br>
  <br>
  - 삼항조건문 
    - const result= num > 0 ? '양수' : '음수';
    - 삼항조건문 (조건 ? / true일때 값: false 일때 값)
    - 삼항조건문 조건에 따라 단순히 값을 결정하여 변수에 할당하는 경우 사용
- 반복문
   - (for, for in, for of, forEach, while, do while,   break,  continue)
     - for <br>
       -for(let i = 0; i < 10; i++) { <br>
    console.log(i)<br>
} 

    -for in <br>
        -for