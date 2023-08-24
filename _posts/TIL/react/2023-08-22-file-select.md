---
title: "[React] File 선택 기능 구현 (진행중)"

categories:
  - React
tags:
  - [React]

toc: true
toc_sticky: true

date: 2023-08-22
last_modified_at: 2023-08-22
---

# React에서 파일 선택 기능을 구현해보쟈

## 서론

회사에서 파일 탐색기(선택기? 뭐가 맞는 거지?)를 구현하라고 하였다  
않이,, 똑똑한 사람들이 이미 잘 구현해 놓은 finder 놔두고 왜 내가 그걸 직접 구현해야 하는 건지 의문이 들었지만 🫨  
하라면 해야 하니 일단 진행시켰다,,!

얘기를 들어보니, {value === 맞는 거 ? '파일 탐색기' : '파일 선택기'}를 이용하여 로컬 파일을 사용하는 것이 아니라, 서버에서 api로 파일 목록들을 불러오는데, 이를 화면에 출력하고, 선택할 수 있게 하기 위함이라고 하였다,, (납득 🤔)

처음에는 그냥 ui 구현하고, 각 해당 파일 클릭하면, background-color 변하게 해서, 선택된 파일들이 어떤 게 있는지 알 수 있도록 하였다  
여기까지 오는 것도 꽤나 힘든 여정이었다  
하지만 해당 기능을 구현했다는 나 자신에게 뿌듯함을 느끼며 (다른 구현 못한 기능 500만 개가 있었지만,,), 점검을 받으러 갔다

<br />

`사수님: 이거 이렇게 구현하는 거 아니에요`

<br />

😱  
<br />

알고보니,  
<img width="776" alt="스크린샷 2023-08-22 오후 5 42 26" src="https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/9e97f9ac-1b94-493e-9bef-e24ba5c2288d">  
실제 finder처럼 cmd 누르면 여러 개 선택할 수 있고, shift를 이용해서 한 번에 선택하고, 막 그런 내 기준 휘항찬란한(?) 기능을 구현했어야 하는 것이었다,,,!! 🫠

그래서, 다시 처음부터 시작해보기로 했다,,

## 과정

### 시작

일단, file 목록이 담긴 list(importedFiles)가 있고, 각 item들의 데이터는 id, name, info로 구성되어 있다  
여기서 선택된 파일들의 id를 새로운 배열(setSelectedFilesIdxList)에 저장한 뒤, 이를 이용하여 기능들을 구현할 생각이다  
파일 선택하는 곳은 여러 군데 있어서, useSelectFile 훅으로 빼줄 생각이다  
추가로, 배열 이름이 너무 길고 그지 같아가지고, 나중에 다 짠 뒤, rename 해줄 생각이다 (완료!!)  
(이름 짓는 거 너무 어려워,,,,😿)

시작 코드

- 파일 목록 보여주기

```javascript
<ul className="imported__list">
  {importedFiles.map(({ id, name, info: { gender } }, idx) => (
    <li key={`${name}-${id}`}>
      <button
        className={`imported__list-item 
          ${selectedFilesIdxList.includes(id) ? "imported__selected-file" : ""} 
          ${gender !== "" ? "info-entered" : ""}`}
      >
        {name}
      </button>
    </li>
  ))}
</ul>
```

- useSelectFiles 사용자 훅

```javascript
import { useState } from 'react';

const useSelectFiles = () => {
  const [selectedID, setSelectedID] = useState<number[]>([]);

  const selectedIDHandler = (id: number) => {
    // 선택 안 된 파일이면 리스트에 추가
    if (!selectedID.includes(id)) return setSelectedID((prev) => ([...prev, id]));

    // 이미 선택된 파일이면 리스트에 제거
    const reSelectedFiles = selectedID.filter(item => item !== id);

    return setSelectedID(reSelectedFiles);
  };

  return { selectedID, setSelectedID, selectedIDHandler };
};

export default useSelectFiles;
```

### 단일 클릭

파일을 한 번 클릭했을 때, 그 파일만이 선택되어야 한다  
기존에 선택된 파일들은 선택 취소 되어야 한다

```javascript
const { selectedID, setSelectedID } = useSelectFiles();
```

이 친구를 파일 목록 코드 있는 곳에 import 해준 뒤,  
li tag에

```javascript
onClick={() => { setSelectedID([id]); }}
```

onClick을 추가해 주었다  
여기서 id는 클릭된 아이템의 id이다  
구현 성공 👻  
(쉽네 쉬워 ㅎㅎㅎㅎㅎ)

### 더블 클릭

이젠 두 번 클릭 시에도 하나의 파일만 선택되도록 설정을 해보았다  
단일 클릭과 마찬가지로 li tag에

```javascript
onDoubleClick={() => { setSelectedID([id]); }}
```

를 추가해 주었다

얘는 여기서 끝이 아니다,,,!!!!

더블 클릭시, 모달창이 닫히면서 파일이 업로드가 되어야 한다  
그렇기에, handler함수 하나를 만들어주었다

```javascript
const selectFinishedHandler = () => {
  setIsImportedOpen(true); // Imported 토글(아코디언) 오픈
  onCancel(); // 모달창 닫기

  const addedImportedFiles = DUMMY_LIST.filter(({ id }) =>
    selectedID.includes(id)
  ); // 클릭된 파일들 모은 배열

  setImportedFiles((prev) => [...new Set([...prev, ...addedImportedFiles])]); // imported된 파일 목록에 중복 제거해서 파일 추가
};
```

구현 성공,,!!! 🤗

### shift 클릭

- 아무것도 클릭되지 않은 상태에서의 shift 클릭

onClick 일 때 함수를 생성해 주었다

```javascript
const clickHandler = (
  id: number,
  idx: number,
  e: MouseEvent<HTMLLIElement>
) => {
  e.preventDefault();

  if (e.shiftKey && selectedIDLen === 0) {
    // 아무것도 안 선택된 상태에서 shift로 선택
    return setSelectedID(DUMMY_LIST.slice(0, idx + 1).map((item) => item.id));
  }

  setSelectedID([id]);
};
```

인덱스 값을 가져와서, slice 해준 뒤, map을 이용하여, id만 뽑아주었다

```javascript
onClick={(e) => { clickHandler(id, idx, e); }}
```

구현 성공!!! 😈

- 파일이 선택된 상태에서 shift 클릭
