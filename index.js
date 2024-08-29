import Overlap from './Overlap.js';

/** Represents a search result and its number of matches */
class Result {
    /**
     * @param {number} index the index of the option
     * @param {number} matches the number of matches
     */
    constructor(index, matches) {
        this.index = index;
        this.matches = matches;
    }
}

/**
 * Searches for parts of the searchKey in the options
 * 
 * @param {string} searchKey the keywords and phrases to search for in the options
 * @param {string[]} options the strings to search through
 * @returns {number[]} the indexes of the options that contain the searchKey
 */
export default function search(searchKey, options) {
    const results = options.map((option, index) => new Result(index, new Overlap(searchKey, option).matches));
    results.sort((a, b) => b.matches - a.matches);
    return results.map(result => result.index);
}