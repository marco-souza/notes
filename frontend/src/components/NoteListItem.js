import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui';
import { Note } from '../models';

export default class NoteListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            primaryText: this.parseDateToLocalTimezone(props.note.updatedAt || props.note.createdAt),
        };
    }

    parseDateToLocalTimezone(date) {
        const TZ_OFFSET = date.getTimezoneOffset() * 60 * 1000;
        date.setTime(date.getTime() + TZ_OFFSET);
        return date.toISOString();
    }

    handleClick() {
        const { note, onClick } = this.props;
        onClick(note.id);
    }

    render() {
        const { note } = this.props;

        return (
            <ListItem
                onClick={this.handleClick}
                primaryText={this.state.primaryText}
                secondaryText={note.text}
            />
        );
    }
}

NoteListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    note: PropTypes.instanceOf(Note).isRequired
};
