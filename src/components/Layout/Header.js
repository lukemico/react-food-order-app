import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/glazed-donuts-pink-background.jpg';
import headerlogo from '../../assets/donut-300x300.png';

import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>DONUT-O-RAMA</h1>
				<img
					className={classes.headerLogo}
					src={headerlogo}
					alt="A table full of delicious donuts!"
				/>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</Fragment>
	);
};

export default Header;
