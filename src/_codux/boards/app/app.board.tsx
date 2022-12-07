import { createBoard } from '@wixc3/react-board';
import { App } from '../../../components/app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
});
