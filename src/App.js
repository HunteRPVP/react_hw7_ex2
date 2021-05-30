import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [{ id: 1, text: "тестовое задание 1", crossed: false }],
      counter: 1,
    };

    this.inputRef = React.createRef();
  }

  add = () => {
    this.setState({
      array: [
        ...this.state.array,
        { id: this.state.counter + 1, text: this.inputRef.current.value, crossed: false },
      ],
      counter: this.state.counter + 1,
    });
  };

  delete = () => {
    const array = this.state.array;
    array.splice(-1, 1);
    this.setState({
      array,
    });
  };

  cross = (targetId, text) => {
    this.setState({
      array: this.state.array.map((el) =>
        el.id !== targetId
          ? el
          : {
              id: targetId,
              text: text,
              crossed: true,
            }
      ),
    });
  };

  render() {
    const { array } = this.state;
    return (
      <div className="App">
        <ul>
          {array.map((el) => {
            return (
              <li key={el.id}>
                {el.crossed ? (
                  <s>{el.text}</s>
                ) : (
                  <span>
                    {el.text}
                    &nbsp;
                    <button onClick={() => this.cross(el.id, el.text)}>
                      Зачеркнуть
                    </button>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.add}>Добавить</button>
        <br />
        <button onClick={this.delete}>Удалить</button>
      </div>
    );
  }
}

export default App;
