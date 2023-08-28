---
title: "[CSS] overflow시 컨텐츠 잘리는 오류"

categories:
  - CSS
tags:
  - [CSS]

toc: true
toc_sticky: true

date: 2023-08-10
last_modified_at: 2023-08-10
---

# overflow: auto;시에 contents cut off

## 왜지?

```HTML
<main className="main-layout__main">
  <article className="main-layout__main__contents">Lorem.</article>
</main>
```

```SASS
&__main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 240px);
    height: 100%;
    padding: 83px 90px 101px;
    overflow: auto;
    background-color: $white_05;
    border: 1px solid blue;

    &__contents {
      width: 1500px;
      min-width: 1500px;
      height: 805px;
      min-height: 805px;
      margin: 0 auto;
      border: 1px solid red;
    }
  }
```

![스크린샷 2023-08-28 오후 3 31 46](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/1e6b6450-f1a2-4f9f-a311-61eaeaf8c3ec)  
이런 식으로 컨텐츠가 짤리면 안 되는데

![스크린샷 2023-08-28 오후 3 32 13](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/85683ddf-42c6-480a-adf2-ec848e4655e6)  
무슨 이유에선지 화면이 작아지면 저런 식으로 왼쪽 부터 컨텐츠가 짤리게 된다

![스크린샷 2023-08-28 오후 3 51 38](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/548429bc-5af4-4f1b-aecb-8ef4dcdf127b)  
컨텐츠가 밖으로 빠져서 보이지가 않게 된다

## 원인

이유는 간단했다

```SASS
display: flex;
align-items: center;
justify-content: center;
```

이것들 때문이었다  
항상 가운데 정렬을 유지하기 때문에, 컨텐츠가 짤려 보였던 것이다

바로 제거를 해주니, 컨텐츠가 잘 보였다

## 그럼 가운데 정렬은 어떻게 하나?

### 오류

내가 원하는 건, 컨텐츠가 화면 정중앙에 정렬 되어 있으면서, 화면 사이즈가 작아지면 padding 83px 90px 101px 남기고 더이상은 줄어들지 않게 되는 것이다

![스크린샷 2023-08-28 오후 4 01 04](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/0163a136-e381-4aa5-83f6-387cd8d21e2c)  
이제는 화면이 잘리지는 않는데, 대신 중앙 정렬이 되지 않았다

```SASS
&__contents {
  width: 1500px;
  min-width: 1500px;
  height: 805px;
  min-height: 805px;
  margin: 50vh auto;  // 추가
  border: 1px solid red;
  transform: translateY(calc(-50% - 83px)); // 추가
}
```

이를 위해 위와 같이 변경을 해주었다  
그러니 가운데 정렬은 되었지만 화면 사이즈가 줄어듦에따라 컨텐츠가 또 잘리게 되었다  
![스크린샷 2023-08-28 오후 4 03 45](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/ae3da07d-d79b-4246-a9bb-619ebd176e71)  
정말 최악이야 🤯

![스크린샷 2023-08-28 오후 4 05 13](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/52a0ef01-283b-4d6c-a329-ae6398600c18)  
왼쪽은 사이즈가 줄어들어도 padding 유지하는데, 왜 위 아래는 컨텐츠가 짤리는 것일까?

https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/1f440ba2-17c1-4212-8c5f-04866020e710

### 해결

```SASS
&__contents {
  width: 1500px;
  min-width: 1500px;
  height: 805px;
  min-height: 805px;
  margin: 50vh auto;
  background-color: transparent;
  transform: translateY(calc(-50% - 83px));

  @media only screen and (height <= 971px) {
    margin: 0 auto;
    transform: translateY(0);
  }
}
```

media query를 이용해서 해결해 주었다

media query 안 쓰고 해보고 싶었는데 도저히 생각이 안 났다  
어쩌면 그냥 media query 써야 했던 걸지도??
