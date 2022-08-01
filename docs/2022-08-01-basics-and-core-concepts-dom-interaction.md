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