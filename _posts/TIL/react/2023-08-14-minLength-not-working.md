---
title: "[React] minLength not working"

categories:
  - React
tags:
  - [React]

toc: true
toc_sticky: true

date: 2023-08-14
last_modified_at: 2023-08-14
---

# input minLength={2}가 작동되지 않음

## 문제

```javascript
<S.SearchFriendsInput
  ref={enteredValueRef}
  type="text"
  minLength={2}
  placeholder={`${searchBy === "지역명" ? "읍, 면, 동으로 입력해주세요" : ""}`}
  onKeyDown={onKeyDownHandler}
/>
```

```javascript
<form>
  <S.SearchFriendsInput
    ref={enteredValueRef}
    type="text"
    minLength={searchBy !== "이름" ? 2 : 0}
    maxLength={10}
    required={true}
    placeholder={`${
      searchBy === "지역명" ? "읍, 면, 동으로 입력해주세요" : ""
    }`}
    onKeyDown={onKeyDownHandler}
  />
  <button type="submit" onClick={onSearchHandler}>
    <Image src={searchIcon} alt="my_page_icon" width={17} height={17} />
  </button>
</form>
```

겉을 form으로 싸고, required까지 넣어도 오류가 해결되지 않았다 심지어 maxLength도 설정해 줬는데 될 생각을 안 한다

이렇게 minLength를 2로 설정해 주었는데 한 글자만 입력하도 작동이 된다

## 해결 과정

required={true}를 넣어줘도
