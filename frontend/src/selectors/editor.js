/**
 * Get the Editor from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Object} Editor Data.
 */
export function getEditor(state) {
    return state.get('editor');
}
