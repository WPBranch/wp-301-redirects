import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import axios from 'axios';
import { wpr_nonce } from './../../utils/helper';

const propTypes = {};

const defaultProps = {};

export default function Tools(props) {
	const [isOpen, setOpen] = useState(false);
	const [importResponse, setImportResponse] = useState(false);
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('isImport') == 'true') {
			axios.post(`${ajaxurl}?action=wp301redirects/admin/get_import_info&security=${wpr_nonce}`).then(
				(response) => {
					setImportResponse(response.data.data);
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}, []);
	return (
		<React.Fragment>
			<div className="wp301redirects__panel__divider">
				<div className="wp301redirects__import">
					<div className="wp301redirects__import__head">
						<h4>{__('Import Redirect Rules', 'wp-301-redirects')}</h4>
						<p>{__('Import your 301 Redirect Links from your Device', 'wp-301-redirects')}</p>
					</div>
					<form action={'admin.php?page=wp_redirect_options&isImport=true'} method="POST" encType="multipart/form-data">
						<div role="group" className="wp301redirects-button-group" aria-labelledby="my-radio-group">
							<input type="hidden" name="import" value={true} />
							<input type="hidden" name="security" value={wpr_nonce} />
							<input type="file" id="upload_file" name="upload_file" size="25" />
							<input
								type="submit"
								name="submit"
								id="submit"
								className="button button-primary"
								style={{ marginTop: 10 }}
								value={__('Import File', 'wp-301-redirects')}
								disabled=""
							/>
						</div>
						{importResponse && (
							<p>
								<strong>{importResponse.replace(/"|"/g, '')}</strong>
							</p>
						)}
					</form>
				</div>
				<div className="wp301redirects__export">
					<div className="wp301redirects__export__head">
						<h4>{__('Export Redirect Rules', 'wp-301-redirects')}</h4>
						<p>{__('Export your 301 Redirect Links in .csv format', 'wp-301-redirects')}</p>
					</div>
					<form action={'admin.php?page=wp_redirect_options'} method="POST">
						<input type="hidden" name="export" value={true} />
						<input type="hidden" name="security" value={wpr_nonce} />
						<div className="wp301redirects-button-group">
							<button type="submit" className="btl-export-download-button">
								{__('Export File', 'wp-301-redirects')}
							</button>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
}

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;
