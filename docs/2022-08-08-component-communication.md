
## SECTION 8. Component Communication

### 1. Event / Props Fallthrough

* you can set props (and listen to event) on a component which you haven't registered inside of the component. 
* Props and events added on a custom component tag automatically fall through to the root component in the template if that component.
* you can get access to these fallthrough props on a built-in $attrs property

### 2. Binding all props

* props 를 객체로 전달할 수 있음

### 3. Provide / Inject 패턴

* 부모 컴포넌트가 하위 컴포넌트로 데이터를 전달할 때 사용
* props 를 계속 전달하는 방법이 아니라 필요한 자식 컴포넌트에서 직접 주입 받아서 사용하는 방식

### 4. Overview

* Components are used to build UIs by combining them
* "parent-child" relations and use "unidirectional data flow"
* passing data down
    * using props
    * props are used to pass data from a parent to a child
    * props should define in advance possibly in greate detail
* custom events
    * custom events are emitted(via $emit) to trigger a method in a parent component
    * custom events can carry data which can be used in the called method
* provide-Inject
    * if data needs to be passed across multiple components(pass-through), you can use provide/inject
    * Provide data in a parent component, inject it into a child component