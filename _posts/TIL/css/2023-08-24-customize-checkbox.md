---
title: "[Customize] checkbox customize"

categories:
  - CSS
tags:
  - [CSS]

toc: true
toc_sticky: true

date: 2023-08-24
last_modified_at: 2023-08-24
---

# checkbox 커스텀화하기

## 바로 본론

```html
<label htmlFor="remember-me" className="container">
  <input type="checkbox" id="remember-me" />
  <span className="check-mark" />
  <p>Remember me</p>
  /label></label
>
```

```scss
/* checkbox customize */
.container {
  position: relative;
  display: block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  p {
    margin-left: 24px;
  }
}

/* 브라우저 default checkbox 없애기 */
.container input {
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
  opacity: 0;
}

/* custom checkbox 만들기 */
.check-mark {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  background-color: $white_05;
  border-radius: 2px;
}

/* hover시 배경색 변경 */
.container:hover input ~ .check-mark {
  background-color: $white_15;
}

/* checkbox 선택 시 */
.container input:checked ~ .check-mark {
  background-color: $primary_blue;
}

/* checkbox 선택 후 hover */
.container:hover input:checked ~ .check-mark {
  background-color: $secondary_blue;
}

/* 체크 표시 생성 */
.check-mark::after {
  position: absolute;
  display: none;
  content: "";
}

/* 체크 표시 스타일 */
.container .check-mark::after {
  top: 3px;
  left: 5px;
  width: 3px;
  height: 6px;
  border: solid $white_100;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* 체크 시 체크 표시 보이기 */
.container input:checked ~ .check-mark::after {
  display: block;
}
```
