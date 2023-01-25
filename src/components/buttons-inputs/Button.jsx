// [<0>]
const Button = ({ textContent, emoji, onClick, className }) => {
	// code

	return (
		<button className={className} onClick={onClick}>
			{emoji} {textContent}
		</button>
	);
};

export default Button;