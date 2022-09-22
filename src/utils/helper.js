import axios from 'axios';
export const {
	wpr_nonce,
	plugin_root_url,
	plugin_root_path,
	site_url,
	route_path,
} = window.Wp301Redirects;

export const copyToClipboard = (copyText) => {
	var tempInput = document.createElement('input');
	tempInput.value = copyText;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand('copy');
	document.body.removeChild(tempInput);
	return;
};

export const installPlugin = (slug) => {
	let form_data = new FormData();
	form_data.append('action', 'wp301redirects/admin//install_plugin');
	form_data.append('security', wpr_nonce);
	form_data.append('slug', slug);
	return axios.post(ajaxurl, form_data).then(
		(response) => {
			return response.data;
		},
		(error) => {
			console.log(error);
		}
	);
};

export const activePlugin = (slug) => {
	let form_data = new FormData();
	form_data.append('action', 'wp301redirects/admin//activate_plugin');
	form_data.append('security', wpr_nonce);
	form_data.append('basename', slug);
	return axios.post(ajaxurl, form_data).then(
		(response) => {
			return response.data;
		},
		(error) => {
			console.log(error);
		}
	);
};
