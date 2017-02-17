import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { connect } from "inferno-mobx";

function clickMe(instance,  event) {
  console.log('Clicked !');
  instance.props.myStore1.title = Math.random();
  instance.props.myStore2.title = Math.random();
  console.log(instance.props.array[1]);
}

const TodoView = connect (['myStore1', 'myStore2', 'array'],
class TodoView extends Component {

    render({ myStore1, myStore2, array }) {
        return (
          <div>
            <h3>{ myStore1.title }</h3>
            <h3>{ myStore2.title }</h3>
            <button onClick={ linkEvent(this, clickMe) }>test</button>
          </div>
        )
    }
})

export default TodoView;
