import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';

// class TodoStore {
//
// }

// @connect(['englishStore', 'frenchStore'])
class TodoStore extends Component {
    // render({ englishStore, frenchStore }) {
    //     return <div>
    //         <p>{ englishStore.title }</p>
    //         <p>{ frenchStore.title }</p>
    //     </div>
    // }
}

var store = window.store = new TodoStore;

export default store;
