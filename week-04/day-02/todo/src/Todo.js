import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './Item';
import './Todo.css';
import themes from './themes';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    const { themeName } = this.props;
    this.state = {
      error: false,
      errorMessage: '',
      theme: themes[themeName],
    };
    this.handleError = this.handleError.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleError(error) {
    this.setState({
      error: true,
      errorMessage: error,
    });
  }

  handleSuccess() {
    this.setState({
      error: false,
      errorMessage: '',
    });
  }

  render() {
    const {
      todos, handleDelete, handleDone, handleSubmit,
    } = this.props;
    const { error, errorMessage, theme } = this.state;
    return (
      <div className="App" style={theme.App}>
        <main style={theme.container}>
          <h1 className="heading" style={theme.heading}>TODOS</h1>
          <form className="formGroup" style={theme.formGroup} onSubmit={(e) => handleSubmit(e, this.handleSuccess, this.handleError)}>
            <input type="text" name="text" className="inputText" style={theme.inputText} />
            <input type="submit" value="Add" className="inputButton" style={theme.inputButton} />
          </form>
          {error && <p className="errorMessage">{errorMessage}</p>}
          <ul className="itemList" style={theme.itemList}>
            {
              todos.map((item, i) => (
                <Item
                  key={item.id}
                  text={item.text}
                  done={item.done}
                  onDelete={() => handleDelete(i)}
                  onDone={() => handleDone(i)}
                />
              ))
            }
          </ul>
          <Link to="/themes" style={theme.link}>Theme Switcher</Link>
        </main>
      </div>
    );
  }
}
Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  themeName: PropTypes.string,
};

Todo.defaultProps = {
  themeName: 'default',
};
export default Todo;
