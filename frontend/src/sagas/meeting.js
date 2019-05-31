import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { stateToHTML } from 'draft-js-export-html';

import { fetchMeetings, fetchMeetingsCompleted, saveNote, saveNoteCompleted } from '../ducks';
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

export function* saveNoteForMeeting() {
    try {
        const { meetingId, editingNote } = yield select(getNotes);
        const { value } = yield select(getEditor);

        const note = yield call(upsertNoteForMeetingsFromAPI, meetingId, {
            text: stateToHTML(value.getCurrentContent()),
            id: editingNote !== true ? editingNote : undefined
        });
        yield put(saveNoteCompleted({ note }));
    } catch (error) {
        yield put(saveNoteCompleted(error));
    }
}

export default function* meetingSaga() {
    yield all([
        takeLatest(fetchMeetings, fetchMeetingsSaga),
        takeLatest(saveNote, saveNoteForMeeting)
    ]);
}
