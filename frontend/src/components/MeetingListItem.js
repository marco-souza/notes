import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ListItem } from 'material-ui';
import { Meeting } from '../models';

const styles = {
    selected: {
        background: 'rgba(0, 0, 0, 0.15)'
    }
};

export default class MeetingListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            secondaryText: this.parseDateToLocalTimezone(
                props.meeting.updatedAt || props.meeting.createdAt
            )
        };
    }

    parseDateToLocalTimezone(date) {
        const TZ_OFFSET = date.getTimezoneOffset() * 60 * 1000;
        date.setTime(date.getTime() + TZ_OFFSET);
        return moment(date.toISOString()).fromNow();
    }

    handleClick() {
        const { meeting, onClick } = this.props;
        onClick(meeting.id);
    }

    render() {
        const { meeting, isSelected } = this.props;
        return (
            <div style={isSelected ? styles.selected : null}>
                <ListItem
                    onClick={this.handleClick}
                    primaryText={meeting.title}
                    secondaryText={this.state.secondaryText}
                />
            </div>
        );
    }
}

MeetingListItem.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    meeting: PropTypes.instanceOf(Meeting).isRequired
};
