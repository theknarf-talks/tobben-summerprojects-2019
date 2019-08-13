import React from 'react';
import { Presentation, Slideset, Slide } from 'react-presentation';
import 'react-presentation/lib/index.css';
//import Highlight from 'react-highlight';

const Link = ({ href }) =>
	<a href={href}>{href}</a>;

export default () =>
	<Presentation>
		<Slideset i={0}>
			<Slide>
				<h1>Summer Projects 2019</h1>
				<h2>By Frank Lyder Bredland</h2>
			</Slide>
			<Slide>
				<h1>Projects</h1>
				<ul>
					<li>Isomorphic JSX</li>
					<li>RavenDesk</li>
					<li>Queryable</li>
					<li>Codemodr</li>
					<li>And others...</li>
				</ul>
			</Slide>
		</Slideset>
		<Slideset i={1}>
			<Slide>
				<p>
					<img src="https://raw.githubusercontent.com/TheKnarf/isomorphic-jsx/master/logo/logo.png" alt="isomorphic-jsx" />
				</p>
				<p><Link href="https://github.com/TheKnarf/isomorphic-jsx" /></p>
				<p>A JSX to string library</p>
				<div>
					<p>Use cases:</p>
					<ol style={{ display: 'inline-block', 'text-align': 'left' }}>
						<li>Usage with Express.js</li>
						<li>Static site generator</li>
						<li>XML</li>
					</ol>
				</div>
			</Slide>
		</Slideset>
		<Slideset i={2}>
			<Slide>
				<p>
					<img src="https://raw.githubusercontent.com/TheKnarf/RavenDesk/master/logo/Logotype102.png" alt="RavenDesk" />
				</p>
				<p><Link href="https://github.com/TheKnarf/ravendesk" /></p>
			</Slide>
		</Slideset>
		<Slideset i={3}>
			<Slide>
				<h1>Queryable</h1>
				<p><Link href="https://github.com/theknarf-experiments/queryable" /></p>
			</Slide>
		</Slideset>
		<Slideset i={4}>
			<Slide>
				<h1>And others...</h1>
				<p>Quick round of a few other projects</p>
			</Slide>
			<Slide>
				<p>
					<img src="https://raw.githubusercontent.com/TheKnarf/HeliumAnion/master/logo/HeliumAnion.png" alt="HeliumAnion" />
				</p>
				<p><Link href="https://github.com/TheKnarf/heliumanion" /></p>
			</Slide>
			<Slide>
				<h1> React Presentation </h1>
				<p><Link href="https://github.com/theknarf/react-presentation" /></p>
			</Slide>
			<Slide>
				<h1> React Terminal </h1>
				<p><Link href="https://github.com/theknarf/react-terminal" /></p>
			</Slide>
		</Slideset>
	</Presentation>;
