import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui';

function NoteListAddItem({ message, addNewItem, ...otherProps }) {
    const primaryText = message || '+ Add new Note';
    return <ListItem onClick={addNewItem} primaryText={primaryText} {...otherProps} />;
}

NoteListAddItem.propTypes = {
    addNewItem: PropTypes.func.isRequired,
    message: PropTypes.string
};

NoteListAddItem.defaultProps = {
    message: false
};

export default NoteListAddItem;
