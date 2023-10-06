import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Post from '@templates/Post';
import { PostContentBox } from '@templates/ReusableCSS';

const CleanCoding1 = () => {
  return (
    <Post 
      mainTitle="if else문 지양"
      tag="Clean-coding"
      date="23.08.11"
      subTitle="if-else 분기문을 지양하자"
    >
      <StaticImage src="../../../assets/imgs/review/1.png" alt="post-img" 
        style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
      <PostContentBox>
        <h2>서론</h2>
        <p>umc 활동 중, 같이 코드를 짜는 한 팀원이 내 코드에 대한 피드백을 주었다 내용은 else 대신에 if로 수정하자는 것이었다</p>
        <p>처음 그 얘기를 들었을 때는 차이가 있나? 싶었다</p>
        <p>사실 난 코드를 작성할 때 항상, if문으로만 하기 보다는 꼭 if-else if-else를 사용했었다 그래야 뭔가 같은 그룹 처럼 보인다고 할까나,,?</p>
        <p>아무튼 그 얘기를 듣고 왜 사용을 지양해야 하는지 궁금해졌고, 이에 대한 내용을 구글링 해보았다</p>
        <p>들어가기 앞서, 이런 정보를 알려준 팀원에게 감사의 인사를 보낸다 :)</p>
        <p>(감사합니다 🙇🏻‍♂️)</p>
        
        <h2>본론</h2>
        <p>핵심은 가독성을 떨어트린다는 거였다</p>
        <pre>
          <code>{`
else { return 1; }
          `}
          </code>
        </pre>
        <p>이런 식으로 작성이 되어 있으면, 이게 무엇 때문에 1이 return 되는지 파악하기 어렵다는 것이다</p>
        <p>띠용~</p>
        <p>게다가 else if는 else문 처리하고, if문 처리하는 거라, 2번의 처리가 발생하게 된다</p>
        <pre>
          <code>{`
else if {}
          `}
          </code>
        </pre>
        <p>이는 곧,</p>
        <pre>
          <code>{`
else { if {} }
      `}
          </code>
        </pre>
        <p>이와 같은 것이다</p>
        <p>😦</p>
        <p>따라서, else와 else if를 쓰기 보다는 if로 작성을 하고, 바로바로 return 시키는 것이 좋다</p>
        <p>물론 if문이 너무 많아지면, switch문을 사용하는 것이 좋다 (조건이 많을 때는 성능이 switch가 더 좋다고 한다)</p>
        
        <h3>includes 활용</h3>
        <pre>
          <code>{`
if (fruit === "apple" || fruit === "banana") {
}
// bad

const fruits = ["apple", "banana"];
if (fruits.includes(fruit)) {
} // 여기서 fruit은 동적으로 받는 값
// good
          `}
          </code>
        </pre>
        <h3>중첩 지양</h3>
        <pre>
          <code>{`
if (fruits.includes(fruit) {
  console.log('yes');

  if (count > 10) {}
// bad 😨

if (!fruits.includes(fruit) return ;
console.log('yes');
if (count > 10) {}
// good 🥳
          `}
          </code>
        </pre>
        <h3>switch 보단 map이나 객체 literal 사용하기</h3>
        <pre>
          <code>{`
switch (color) {
  case 'red'
    return [1, 2];
  case 'yellow'
    return [3, 4];
  default
    return [];
// bad

const colors = {
  red: [1, 2],
  yellow: [3, 4]
}
return colors[color] || []; // 여기서 color는 red or yellow
// good
          `}
          </code>
        </pre>
        <h3>some이나 every 이용하기</h3>
        
        <h3>삼향 연산자 이용하기</h3>
        <p>일단 지금은 너무 피곤해서 여기까지만 하고 나중에 추가로 정리해서 올려야겠다,,!</p>
      </PostContentBox>
    </Post>
  );
};

export default CleanCoding1;