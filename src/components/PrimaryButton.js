import React from 'react';

import '../SCSS/PrimaryButton.scss';

export default ({ value, onClick }) => <input className="primaryButton" type="button" value={value} onClick={onClick}/>;
