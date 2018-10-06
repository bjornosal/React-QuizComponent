import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false
    };
  }

  setIncorrectAnswerState(isIncorrect) {
    this.setState(() => {
      return {incorrectAnswer: isIncorrect}
    })
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
      this.setIncorrectAnswerState(false);
    } else {
      this.setIncorrectAnswerState(true);
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    clickHandler={this.handleClick.bind(this)}
                    key={index}
                    button_text={answer_option}
                  />
                );
              }
            )}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>That is not correct</p> : null}
      </main>
    );
  }
}

export default QuizQuestion;
