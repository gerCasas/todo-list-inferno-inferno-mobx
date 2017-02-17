import Inferno from 'inferno';
import TodoList from './Todo/TodoList';
import TodoStore from './Todo/TodoStore';
import MyComponent from './Component/MyComponent';
import TodoView from './Todo/TodoView'
import { Provider } from 'inferno-mobx'
import { observable } from 'mobx'

const myStore1 = observable({
    title: 'Hello World'
})
const myStore2 = observable({
    title: 'Bonjour tout le monde'
})
const myArray = observable(['some', 'array'])

Inferno.render(<Provider myStore1={ myStore1 } myStore2={ myStore2 } array={ myArray }>
  <TodoView />
  </Provider>, document.getElementById('app')
);
