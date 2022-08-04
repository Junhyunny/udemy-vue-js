
## Rendering Conditional Content and Lists

### 1. v-if / v-show 차이점

* 실제 DOM 요소 렌더링 여부
* display: none; 속성을 이용한 화면 표시 여부
* 보통 v-if를 사용하고, 컴포넌트 변경이 많은 경우에만 v-show를 사용한다.

### 2. v-for 

* 요소 반복하여 출력하기

### 3. @click.stop

* 클릭이 되지 않도록 변경

### 4. key 가 없는 경우 dom을 재사용함으로써 생기는 버그 존재

* key는 HTML 기본 속성이 아니다. vue가 DOM을 식별하기 위해 사용한다.