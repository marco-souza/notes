import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { MeetingListItem, NoteEditor } from '../../components';
import { fetchMeetings } from '../../ducks';
import { getMeetings } from '../../selectors';

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

    render() {
        const { meetings } = this.props;
        return (
            <div style={styles.container}>
                <List style={{ width: 300 }}>
                    {/* TODO add icon to view note list */}
                    {meetings.map(meeting => (
                        <MeetingListItem key={meeting.id} meeting={meeting} onClick={() => {}} />
                    ))}
                </List>

                <NoteEditor />
            </div>
        );
    }
}

MeetingsList.propTypes = {
    meetings: PropTypes.instanceOf(Immutable.List).isRequired,
    onFetchMeetings: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        meetings: getMeetings(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchMeetings: () => dispatch(fetchMeetings())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingsList);
