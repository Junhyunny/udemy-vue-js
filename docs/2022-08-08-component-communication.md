
## SECTION 8. Component Communication

### 1. Event / Props Fallthrough

* you can set props (and listen to event) on a component which you haven't registered inside of the component. 
* Props and events added on a custom component tag automatically fall through to the root component in the template if that component.
* you can get access to these fallthrough props on a built-in $attrs property

### 2. Binding all props

* props 를 객체로 전달할 수 있음

### 3. 