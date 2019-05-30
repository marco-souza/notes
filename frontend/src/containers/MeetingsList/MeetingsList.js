import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { MeetingListItem, SideBar } from '../../components';
import { NotesList } from '../index';
import { fetchMeetings, setNotesVisibility, setNotes } from '../../ducks';
import { getMeetings, getNotes } from '../../selectors';

class MeetingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    componentDidMount() {
        const { onFetchMeetings } = this.props;
        onFetchMeetings();
    }

    handleClick({ id, notes }) {
        const { onSetNotesVisibility, onSetNotes } = this.props;
        onSetNotes(notes);
        onSetNotesVisibility(true);
        this.setState({ selected: id });
    }

    render() {
        const { meetings } = this.props;
        const { selected } = this.state;
        return (
            <SideBar title="Meetings" rightSide={<NotesList />}>
                {meetings.map(meeting => (
                    <MeetingListItem
                        isSelected={selected === meeting.id}
                        key={meeting.id}
                        meeting={meeting}
                        onClick={() => this.handleClick(meeting)}
                    />
                ))}
            </SideBar>
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
