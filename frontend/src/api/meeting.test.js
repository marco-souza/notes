import { get, post } from '../lib/HTTP';
import { getMeetingsFromAPI, upsertNoteForMeetingsFromAPI } from './meeting';

jest.mock('../lib/HTTP');
afterEach(() => jest.resetAllMocks());

describe('getMeetingsFromAPI', () => {
    it('should send a GET request', async () => {
        await getMeetingsFromAPI();
        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith('/meetings');
    });

    it('should send a POST request', async () => {
        const data = ['testID', { text: 'bla' }];
        await upsertNoteForMeetingsFromAPI(...data);
        expect(post).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenCalledWith('/meetings/testID/notes', null, data[1]);
    });
});
