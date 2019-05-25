import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { MeetingListItem } from '../../components';
import { NotesList } from '../index';
import { fetchMeetings, setNotesVisibility, setNotes } from '../../ducks';
import { getMeetings, getNotes } from '../../selectors';

const styles = {
    container: {
        display: 'flex'
    }
};

class MeetingsList extends Component {
    componentDidMount() {
        const { onFetchMeetings } = this.props;
        onFetchMeetings();
    }

    handleClick(notes) {
        const { onSetNotesVisibility, onSetNotes } = this.props;
        onSetNotes(notes);
        onSetNotesVisibility(true);
    }

    render() {
        const { meetings } = this.props;
        return (
            <div style={styles.container}>
                <List style={{ width: 300 }}>
                    {/* TODO add icon to view note list */}
                    {meetings.map(meeting => (
                        <MeetingListItem
                            key={meeting.id}
                            meeting={meeting}
                            onClick={() => this.handleClick(meeting.notes)}
                        />
                    ))}
                </List>
                <NotesList />
            </div>
        );
    }
}

MeetingsList.propTypes = {
    meetings: PropTypes.instanceOf(Immutable.List).isRequired,
    onFetchMeetings: PropTypes.func.isRequired,
    onSetNotesVisibility: PropTypes.func.isRequired,
    onSetNotes: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        meetings: getMeetings(state),
        notes: getNotes(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Meetings Actions
        onFetchMeetings: () => dispatch(fetchMeetings()),

        // Notes Actions
        onSetNotesVisibility: isVisible => dispatch(setNotesVisibility(isVisible)),
        onSetNotes: notes => dispatch(setNotes({ notes }))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingsList);
