---
route: presentation/index.html
---

import { dom } from 'isomorphic-jsx';
/*
 * TODO: import the React app thats the presentation (that uses my react-presentation package)
 *       use webpack code splitting to get it into its own output file
 *       import it in the header below
 *
 *       Use babels special comment to set JSX correct in the React part of the app: https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
 */

export default () =>
	<html>
		<head>
			<title> Presentation </title>
		</head>
		<body>
			presentation
		</body>
	</html>;
