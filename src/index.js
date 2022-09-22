import React from 'react';
import ReactDOM from 'react-dom';
import WP301Redirects from './containers/WP301Redirects';

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(<WP301Redirects />, document.getElementById('wp301redirectsbody'));
});
