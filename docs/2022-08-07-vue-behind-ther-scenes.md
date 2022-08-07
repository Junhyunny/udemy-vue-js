
## SECTION 5. Vue Behind the Scenes

### 1. Proxy 객체

* JavaScript에서 기본적으로 제공하는 객체
* 내부 프로퍼티의 변경을 감지할 수 있다.

### 2. Understanding Templates

* Vue Component의 템플릿은 Vue 컴포넌트 내부에 필요한 HTML 코드를 추가하는 방식이다.

### 3. refs

* `this.$refs` - vue에서 사용하는 예약어

### 4. How Vue Updates The DOM

* Vue Instanace 
    * Stores data, computed properties, methods
    * data and computed properties may change (because of user input)
* Browser DOM
    * Vue-controlled template is rendered in the DOM
    * Updates should be reflected, but Vue should not re-render everything
* Virtual DOM
    * Browser DOM을 직접 핸들링하는 것은 비용이 크다.
    * JS-Based DOM 을 메모리에 띄워둔다.
    * Updates are made to the virtual DOM first, only differences are then rendered to the real DOM

### 5. Vue Instance Lifecycle

* createApp({...})
* beforeCreate()
    * fully initialized
    * nothing on the screen 
* created()
    * Vue knows data, app's general configuration

* compile template
* beforeMount()
    * right before view is going to bring somethign to the screen
    * right before we can see something on the screen
* mounted()
    * the browser really adds all the HTML elements

* Mounted Vue Instance
* Data Changed
* beforeUpdate()
* updated()
    * the update is visible on the screen 

* Instance Unmounted
* beforeUnmount()
* unmounted()
    * cleanup, http request things