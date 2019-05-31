import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ListItem } from 'material-ui';
import { Note } from '../models';

const styles = {
    selected: {
        background: 'rgba(0, 0, 0, 0.15)'
    }
};

export default class NoteListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            primaryText: this.parseDateToLocalTimezone(props.note.createdAt)
        };
    }

    parseDateToLocalTimezone(date) {
        const TZ_OFFSET = date.getTimezoneOffset() * 60 * 1000;
        date.setTime(date.getTime() + TZ_OFFSET);
        return moment(date.toISOString()).format('MMMM Do YY, h:mm a');
    }

    handleClick() {
        const { note, onClick } = this.props;
        onClick(note.id);
    }

    render() {
        const { note, isSelected } = this.props;

        return (
            <div style={isSelected ? styles.selected : null}>
                <ListItem
                    onClick={this.handleClick}
                    primaryText={this.state.primaryText}
                    secondaryText={note.text}
                />
            </div>
        );
    }
}

NoteListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    note: PropTypes.instanceOf(Note).isRequired,
    isSelected: PropTypes.bool
};

NoteListItem.defaultProps = {
    isSelected: false
};
