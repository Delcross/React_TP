// class webSocket extends Component {

//   // instance of websocket connection as a class property
//   ws = new WebSocket('wss://srrj6.sse.codesandbox.io/')

//   componentDidMount() {
//       this.ws.onopen = () => {
//       // on connecting, do nothing but log it to the console
//       console.log('connected')
//       }

//       this.ws.onmessage = evt => {
//       // listen to data sent from the websocket server
//       const message = JSON.parse(evt.data)
//       this.setState({dataFromServer: message})
//       console.log(message)
//       }

//       this.ws.onclose = () => {
//       console.log('disconnected')
//       // automatically try to reconnect on connection loss

//       }

//   }

//   render(){
//       <ChildComponent websocket={this.ws} />
//   }
// }
