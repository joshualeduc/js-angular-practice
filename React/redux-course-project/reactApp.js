function List (props) {
  return (
    <ul>
    {props.items.map((item) => (
      <li key={item.id}>
        <span
        onClick={() => props.toggle && props.toggle(item.id)}
        style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
          {item.name}
        </span>
        <button onClick={() => props.remove(item)}>X</button>
      </li>
    ))}
    </ul>
  )
}

class Todos extends React.Component {

  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value

    this.props.store.dispatch(handleAddTodo(
      name,
      () => this.input.value = ''
    ))
  }

  removeItem = (todo) => {
    this.props.store.dispatch(handleDeleteTodo(todo))      
  }

  toggleItem = (id) => {
    this.props.store.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

class Goals extends React.Component {

  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    
    this.props.store.dispatch(handleAddGoal(
      name,
      () => this.input.value = ''
    ))
  }

  removeItem = (goal) => {
    this.props.store.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

class App extends React.Component {
  componentDidMount () {
    const { store } = this.props

    store.dispatch(handleInit())
    store.subscribe(() => this.forceUpdate()) //anti pattern, but useful since we don't have a state
  }
  render() {
    const { store } = this.props
    const { todos, goals, loading } = this.props.store.getState()

    if (loading === true) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <Todos todos={todos} store={store} />
        <Goals goals={goals} store={store} />
      </div>
    )
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('app'))
