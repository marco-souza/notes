import { Record } from 'immutable';

export default class Meeting extends Record({
    id: null,
    text: null,
    createdAt: null,
    updatedAt: null
}) {
    constructor(json = {}) {
        const properties = {
            ...json,
            createdAt: json.createdAt ? new Date(json.createdAt) : null,
            updatedAt: json.startAt ? new Date(json.updatedAt) : null
        };
        super(properties);
    }
}
