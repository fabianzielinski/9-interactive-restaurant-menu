class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: false },
      { id: 2, name: "kawa", active: true },
      { id: 3, name: "woda", active: false },
      { id: 4, name: "sok", active: false },
      { id: 5, name: "lemoniada", active: true },
      { id: 6, name: "herbata", active: false },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} />
      </React.Fragment>
    );
  }
}
