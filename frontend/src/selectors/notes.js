/**
 * Get the Notes from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Immutable.List} The list of Notes.
 */
export function getNotes(state) {
    return state.get('notes');
}
