import { React } from './lib/react.js';
import { ReactDOM } from './lib/reactDom.js';
import DesktopWars from './DesktopWars.jsx';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element');

ReactDOM.createRoot(root).render(<DesktopWars />);

