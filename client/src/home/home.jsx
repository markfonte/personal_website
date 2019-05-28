import React from 'react';
import './home.css';
import digitalOceanLogo from '../digital_ocean_logo.png';
import reactLogo from '../logo.svg';
import expressLogo from '../express_logo.png';
import nodeLogo from '../nodejs_logo.png';
import materialUILogo from '../material_ui_logo.png';
import travisCILogo from '../travis_ci_logo.png';
import nginxLogo from '../nginx_logo.png';
import githubLogo from '../github_logo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

function Square(props) {
    return (
        <Button variant="outlined" className="square" onClick={props.onClick}>
            <Typography variant="h5">
                {props.value}
            </Typography>
        </Button>
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
        const stepNum = this.state.stepNumber;

        const moves = history.map((step, move) => {
            const desc = move ?
                'move #' + move :
                'game start';
            return (
                <li key={move}>
                <Button variant="contained" onClick={() => this.jumpTo(move)}>{desc}</Button>
                </li>
            );
        });

        let status;

        if (winner) {
            status = "Winner: " + winner;
        } else if (stepNum === 9) {
            status = "Cat's game!"
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
            <div><Typography variant="subtitle1" color="primary"> {status}</Typography></div>
            { stepNum !== 0 ? (
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

class BuiltWithTable extends React.Component {
    render() {
        const digitalOceanLink = `https://www.digitalocean.com/`;
        const reactLink = `https://reactjs.org/`;
        const materialUILink = `https://material-ui.com/`;
        const expressLink = `https://expressjs.com/`;
        const nodeLink = `https://nodejs.org/`;
        const travisCILink = `https://travis-ci.org/`;
        const nginxLink = `https://www.nginx.com/`;
        const githubLink = `https://github.com/`;
        const rows = [
            { title: 'DigitalOcean', subtitle: 'cloud provider', link: digitalOceanLink, logo: digitalOceanLogo },
            { title: 'Express', subtitle: 'backend framework', link: expressLink, logo: expressLogo },
            { title: 'GitHub', subtitle: 'repository hosting', link: githubLink, logo: githubLogo },
            { title: 'Material-UI', subtitle: 'UI framework', link: materialUILink, logo: materialUILogo },
            { title: 'Nginx', subtitle: 'web server', link: nginxLink, logo: nginxLogo },
            { title: 'NodeJS', subtitle: 'server environment', link: nodeLink, logo: nodeLogo },
            { title: 'React', subtitle: 'frontend framework', link: reactLink, logo: reactLogo },
            { title: 'TravisCI', subtitle: 'continuous integration', link: travisCILink, logo: travisCILogo }
        ];
        return (
            <div>
                <Typography variant="h5" id="built-with-title">
                    Built With:
                </Typography>
                <Paper id="built-with-table-root">
                    <div id="built-with-table-wrapper">
                        <Table id="built-with-table">
                            <TableBody>
                                {rows.map( (row, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row" align="left">
                                            <Link href={row.link}>
                                                <Typography variant="title">
                                                    {row.title}
                                                </Typography>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <img src={row.logo} className="logo-default" alt="express" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography variant="subtitle2">
                                                {row.subtitle}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </div>
        );
    }
}
class Home extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {apiResponse: ""};
    // }

    // fetchInfo() {
    //     fetch(process.env.REACT_APP_API_URL + "home", {credentials: 'same-origin' })
    //     .then(res => res.text())
    //     .then(res => this.setState({apiResponse: res}))
    //     .catch(error => console.log(error));
    // }

    // componentDidMount() {
    //     this.fetchInfo();
    // }

    render() {
        const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;
        return(
            <div>
                <Typography variant="title">Welcome to my website! It is under active development (last updated 5/27/2019). Please check back soon!</Typography>
                <Typography variant="subtitle1">Incoming Software Engineering Intern at J.P. Morgan · 4rd year CSE student at the University of Michigan · Minor in Entrepreneurship · Focus on Web &amp; Android development</Typography>
                <div className="tic-tac-toe-container">
                    <Typography variant="subtitle1" id="tic-tac-toe-title">Here's some tic-tac-toe while you wait:</Typography>
                    <Game />
                    <Typography variant="caption" id="tic-tac-toe-caption" >
                        <Link color="textPrimary" href={reactTutorialLink}>
                            credit: reactjs tutorial
                        </Link>
                    </Typography>
                </div>
                <BuiltWithTable/>
            </div>
        );
    }
}

export default Home;