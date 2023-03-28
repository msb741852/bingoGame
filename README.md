# BingoGame

- 개인적으로 사용하기 위해 제작하였습니다.
- 오프라인에서 레크레이션을 진행할 때, 한 팀이 이길 때 마다 빙고판을 채워갈 수 있는 사이트를 제작하려 합니다.
- 먼저 빙고라인을 만드는 팀이 이기는 룰로 제작예정입니다.

---

### 실행 방법

npm start

## Version 1

#### Feat

- 첫 화면 제작
- 빙고판 사이즈 정하는 페이지 제작
- 빙고판 페이지까지 제작

#### 알게 된 점

- useNavigate에서 인자값을 넘기기 위해선 자식 컴포넌트에서 useLoaction을 사용해서 인자값을 받아야 합니다.
- 다시 한 번 깨닫게 된 것은 React에서는 직접적으로 DOM을 건드리면 안된다는 점 입니다.

#### 막히는 부분

- 빙고판을 클릭했을 때 td별로 색상이 변하게 하고 싶은데 DOM을 직접 건드리지 말아야 한다는 부분에서 막히고 있습니다.

---

## Version 1.1

### Feat

- Green / Navy버튼으로 색상을 정해준 뒤 td 박스 클릭 시 td 박스가 정해졌던 색상으로 변경

### Update

- Version 1에서 예를 들어 5x5 빙고판을 만든다고 하면 BingoBoard에서 BingoSize만큼의 배열을 만들었습니다.
- Version 1.1에서 배열을 BingoSize \* BingoSize 사이즈로 만들었습니다.
- why: td별로 배경색을 다르게 하기 위해 각각 값을 가져야 할 것으로 판단하였습니다.

- Version 1에서 배열 안에 숫자만 넣었습니다.
- Version 1.1에서 배열 안에 숫자와 배경색을 가지고 있는 객체를 담았습니다.
- why: td별로 배경색을 다르게 하기 위해 각각 값을 가져야 할 것으로 판단하였습니다.

- Version 1에서 빙고판을 만들 때 TableData 컴포넌트를 BingoBoard의 자식 컴포넌트로 사용했습니다.
- Version 1.1에서 빙고판을 만들 때 BingoBoard만 사용했습니다.
- why: Version 1에서 tr 태그 안에 자식 컴포넌트 TableData를 넣고 tr 태그 안에 bingoSize만큼의 열을 만들어 넣는 방법을 사용했었습니다. Version1.1 에서 bingoArr를 bingoSize \* bingoSize로 만들고 보니 굳이 넘길 이유가 없을 것 같아서 TableData 컴포넌트는 삭제했습니다.

### 알게 된 점

```
map 함수를 사용할 때
중괄호 {}를 사용하면 return을 생략할 수 없고,
소괄호 ()를 사용하면 return을 생략할 수 있다.

중괄호를 사용하고 return을 작성하지 않아도 에러가 뜨지 않았다. 조심해야겠다.
```

### 막히는 부분

- table태그에서 td태그를 tr태그 안에 넣어야 한다고 알고 있는데, 현재 코드 상황은 tr태그로 행 나눔만 하고 있을 뿐인 느낌입니다.

```html
<table>
  <td id="1" style="background-color: white;">1</td>
  <td id="2" style="background-color: white;">2</td>
  <td id="3" style="background-color: white;">3</td>
  <tr></tr>
</table>
```
