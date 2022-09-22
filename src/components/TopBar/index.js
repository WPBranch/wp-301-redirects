import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { plugin_root_url } from './../../utils/helper';

const propTypes = {};

const defaultProps = {};

export default function TopBar(props) {
	return (
		<React.Fragment>
			<div className="wp301redirects__topbar">
				<div className="wp301redirects__topbar__logo">
					<img width="40" src={plugin_root_url + 'assets/images/logo.png'} alt="logo" />
				</div>
				<h3 className="wp301redirects__topbar__title">{__('WP 301 Redirects', 'wp-301-redirects')}</h3>
			</div>
		</React.Fragment>
	);
}

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;
