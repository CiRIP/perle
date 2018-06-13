import './style';
import { Component } from 'preact';
import { quotes } from './config';

export default class App extends Component {
	render() {
		const r = Math.floor(Math.random() * quotes.length);
		return (
			<main>
				<section>
					<link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i&amp;subset=latin-ext" rel="stylesheet" />
					<q>{quotes[r].text}</q>
					<cite>&mdash; {quotes[r].source}</cite>
				</section>
				<footer>Un website marca <a href="https://cip.fun">CIP.FUN</a>.</footer>
			</main>
		);
	}
}
