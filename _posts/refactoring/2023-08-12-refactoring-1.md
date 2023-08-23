---
title: "[Refactor] NextJS 페이지 분할 (진행중)"

categories:
  - refactoring
tags:
  - [refactoring]

toc: true
toc_sticky: true

date: 2023-08-12
last_modified_at: 2023-08-13
---

# NextJS 페이지 잘게 나누기

## 현 상황

![스크린샷 2023-08-12 오후 4 10 39](https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/75e2e44f-7bac-4d80-bd40-04870af186ab)  
페이지 하나에 모든 내용을 다 때려 박아 놨다,,,  
이런 페이지 나누는 거에 익숙하지 않아서, 이런 일이 발생하였는데, API를 붙이려고 시도를 하다보니 계속해서 불편한 일들이 생겼다  
이건 좀 아닌 거 같다는 생각이 점점 스멀스멀 기어오르는 걸 바쁘고 귀찮아서 못 본 척 하고 있었는데 진짜 이건 좀 아닌 거 같아서 페이지 분할을 진행하기로 했다 🫠

지난 날의 나야,, 코드 짜기 전에 구상을 미리 해었어야지,,,  
꽤나 큰 공사가 될 거 같다,,,  
23.08.12 16:25 start  
~~,,더운데 그냥 하지 말까,,?~~

## 진행 상황

![스크린샷 2023-08-13 오전 12 50 06](https://github.com/stockOneQ/front/assets/121864459/f8ffea7b-728f-49ca-beab-fabe91d0bee9)  
이런 식으로 구조를 짜주었다  
Friends component에 children을 넣어주고, 각 페이지 마다 해당하는 component를 children으로 넘겨주었다

```javascript
import ...

const FriendsPage = ({
  friendsList,
  children,
}: PropsWithChildren<IFriendsListContextProps>) => {
  const contextValue = { friendsList };

  return (
    <FriendsListContext.Provider value={contextValue}>
      <Friends>{children}</Friends>
    </FriendsListContext.Provider>
  );
};

export async function getStaticProps() {
  let friendsList: IFriendsListContextProps['friendsList'] = [];
  let offset = 0;
  const FRIENDS_COUNT = 8; // 백에서 8명 씩 끊어서 전송

  while (true) {
    try {
      const res = await API.get(`/api/friends?last=${offset}`);
      const friendsData = res.data.friends;

      friendsList = [...friendsList, ...friendsData];
      offset += FRIENDS_COUNT;

      if (friendsData.length < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return {
    props: {
      friendsList,
    },
    revalidate: 10,
  };
}

export default FriendsPage;
```

친구 목록은 3개의 페이지 모두 공통적으로 보이는 부분이니, 중첩 레이아웃으로 빼려고 하였다

```javascript
import ...

const SearchFriendsPage = () => {
  const { friendsList } = useContext(FriendsListContext);

  return (
    <FriendsPage friendsList={friendsList}>
      <SearchFriend />
    </FriendsPage>
  );
};

export default SearchFriendsPage;
```

이런 식으로 구현을 해보았다  
그런데 도대체 왜 인지 모르겠는데, 친구 목록이 계속 초기화가 된다,,,,, 😫

<img width="459" alt="스크린샷 2023-08-12 오후 11 36 48" src="https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/07f780b9-bb19-4d24-9667-1d6178a4933d">
<img width="439" alt="스크린샷 2023-08-12 오후 11 36 54" src="https://github.com/eonseok-jeon/test_electron-vite/assets/121864459/385dbcc5-5e1b-4ae0-a556-bfe72253e376">

오른쪽 사진처럼 떠야 하는데, 왼쪽 처럼 내가 초기에 설정한 값으로 초기화가 되는 것이다,,,,  
으아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ,,,,  
api 받아오는 로직 util로 빼고, 각 페이지 마다 getStaticProps 사용해서, 구현을 할 수는 있지만, 뭔가 이건 너무 비효율적인 거 같다  
페이지 불러올 때마다 계속 api 요청 받아야 하는 거니까,,?  
일단 오늘은 여기까지 하고, 내일 다시 해봐야겠다

내일도 안 되면 빠른 손절!

###### 참고 - Instagram DM Page
