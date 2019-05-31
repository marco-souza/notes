import { all, call, put, takeLatest, take } from 'redux-saga/effects';
import { fetchMeetings, fetchMeetingsCompleted, saveNoteCompleted } from '../ducks';
import { getMeetingsFromAPI, upsertNoteForMeetingsFromAPI } from '../api';
import { getNotes, getEditor } from '../selectors';

function* fetchMeetingsSaga() {
    try {
        const meetings = yield call(getMeetingsFromAPI);
        yield put(fetchMeetingsCompleted({ meetings }));
    } catch (error) {
        yield put(fetchMeetingsCompleted(error));
    }
}

function* saveNoteForMeeting() {
    try {
        const { meetingId } = yield call(getNotes);
        const { value } = yield call(getEditor);
        // eslint-disable-next-line no-debugger
        debugger;
        const note = yield call(upsertNoteForMeetingsFromAPI, meetingId, value.toString());
        yield put(saveNoteCompleted({ note }));
    } catch (error) {
        yield put(saveNoteCompleted(error));
    }
}

export default function* meetingSaga() {
    yield all([takeLatest(fetchMeetings, fetchMeetingsSaga), take(saveNoteForMeeting)]);
}
