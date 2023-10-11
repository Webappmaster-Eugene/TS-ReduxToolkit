import './Button.css';
import { memo } from 'react';

function Button({ children, ...props }) {
	console.log('Button');
	return (
		<button className='button accent' {...props}>{children}</button>
	);
}

export default memo(Button);