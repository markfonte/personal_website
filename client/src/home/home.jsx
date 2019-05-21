import React from 'react';
import './home.css';
import reactLogo from '../logo.svg';
import expressLogo from '../express_logo.png';
import nodeLogo from '../nodejs_logo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            { this.state.stepNumber !== 0 ? (
                <ol className="move-list">{moves}</ol>
            ) : (
                <p></p> )
            }
            </div>
        </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    fetchInfo() {
        fetch(process.env.REACT_APP_API_URL + "home", {credentials: 'same-origin' })
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(error => console.log(error));
    }

    componentDidMount() {
        this.fetchInfo();
    }

    render() {
        const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;
        return(
            <div>
                <Typography variant="h6">{this.state.apiResponse}</Typography>
                <div className="tic-tac-toe-container">
                    <Typography variant="h5" id="tic-tac-toe-title">Here's some tic-tac-toe while you wait:</Typography>
                    <Game />
                    <Typography variant="caption" id="tic-tac-toe-caption"><Link href={reactTutorialLink}>credit: reactjs tutorial</Link></Typography>
                </div>

                <Typography variant="h6" id="built-with-title">Built With:</Typography>
                <Paper id="built-with-table">
                    <Table>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell component="th" scope="row" align="center">
                                    <Typography variant="body1">
                                        React
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <img src={reactLogo} className="profile-logo" alt="react" />
                                </TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell component="th" scope="row" align="center">
                                    <Typography variant="body1">
                                        Express
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <img src={expressLogo} className="logo-default" alt="expressjs" />
                                </TableCell>
                            </TableRow>
                            <TableRow key={3}>
                            <TableCell component="th" scope="row" align="center">
                                    <Typography variant="body1">
                                        NodeJS
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <img src={nodeLogo} className="logo-default" alt="nodejs" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Home;