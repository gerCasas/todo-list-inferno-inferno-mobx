import Inferno from 'inferno';
import Component from 'inferno-component';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       time: Date.now(),
       value : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
        this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
      // stop when not renderable
      clearInterval(this.timer);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }


  render(){
  //   return (
  //    <div>
  //      <h1>Header!</h1>
  //      <span>Counter is at: { this.state.counter }</span>
  //    </div>
  //  )
    let time = new Date(this.state.time).toLocaleTimeString();
    return (
      <div>
        <h1>{ time }</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onInput={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

export default MyComponent;
