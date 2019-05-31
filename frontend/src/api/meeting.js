import { get, post } from '../lib/HTTP';

export function getMeetingsFromAPI() {
    return get(`/meetings`);
}

export function upsertNoteForMeetingsFromAPI(id, body) {
    return post(`/meetings/${id}/notes`, null, body);
}
