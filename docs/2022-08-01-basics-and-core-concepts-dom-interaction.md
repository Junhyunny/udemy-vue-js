## SECTION2.Basics & Core Concpets-DOM Interaction with Vue

### 1. data property in Vue Component

* data를 만들어 반환하면, Vue Component가 커버하는 DOM 트리 영역 내에서 해당 변수를 사용할 수 있다.
* 이중 중괄호({{ }})를 사용한다.
* `v-bind` 키워드
    * to set value via binding state
    * interpolation sytax 없이 state 사용 가능
* vue managed data in the HTML code

### 2. methos property in Vue Component

* serve functions
* `methods` 속성 안에 있는 기능들은 반드시 함수

### 3. v-html feature

* HTML 엘리먼트 호출이 가능하지만, XSS 공격에 취약하다.
* 반드시 무엇을 호출할지 알고 사용해야한다.
* 이중 중괄호를 이용하면 크로스 사이트 스크립팅(XSS) 공격을 막을 수 있다.

### 4. directives v-bind vs v-on

* v-bind 
    * 속성 값을 연결해줄 때 사용한다.
* v-on
    * 이벤트를 연결해줄 때 사용한다.

### 5. event modifier

* `v-on` directive를 사용하여 이벤트를 등록할 때 modifier를 이용하면 좀 더 구체적인 이벤트를 지정할 수 있다.
    * v-on:keyup.enter
    * v-on:click.middle
    * v-on:click.right

### 6. v-once

* 최초 렌더링에서만 사용하고, 그 이후에는 변경되지 않는다.

### 7. v-model

* 양방향 binding을 제공한다.
* 바인딩한 state 값 변경 이벤트를 감지한다.
* 값이 변경되면 리렌더링이 동작한다.

### 8. computed - 성능 문제

* method 처럼 생겼지만, data 프로퍼티처럼 사용된다.
* 메소드는 매번 호출되지만, computed는 의존성들이 변경되지 않는다면 재실행하지 않는다.
* 화면에 리렌더링이 발생하면 화면에서 랜더링에서 사용되는 모든 메소드는 재실행된다.
* `state`만 바뀌었음에도 methods로 지정된 함수는 재실행된다.