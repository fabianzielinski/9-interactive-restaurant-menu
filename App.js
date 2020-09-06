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
  handleChangeStatus = (id) => {
    console.log(id);
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
