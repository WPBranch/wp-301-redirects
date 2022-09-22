import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import ManageLinks from './group/ManageLinks';
import Documentation from '../components/Documentation';
import Tools from '../components/Tools';
const propTypes = {};

const defaultProps = {};

export default function WP301Redirects(props) {
	return (
		<React.Fragment>
			<TopBar />
			<div className="wp301redirects__content__wrapper">
				<div className="wp301redirects__main__content">
					<ManageLinks />
					<Documentation />
				</div>
				<div className="wp301redirects__archive__sidebar">
					<Tools />
					{/* <Documentation /> */}
				</div>
			</div>
		</React.Fragment>
	);
}

WP301Redirects.propTypes = propTypes;
WP301Redirects.defaultProps = defaultProps;
