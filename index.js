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
 * @param {number} threshold the minimum percentage of character matches on the results
 * @returns {number[]} the indexes of the options that contain the searchKey
 */
export default function search(searchKey, options, threshold = 0) {
    // missing searching key
    if (!searchKey) return options.map((_, index) => index);

    const results = options
        .map((option, index) => new Result(index, new Overlap(searchKey, option).matches))
        .filter((result) => result.matches / searchKey.length >= threshold)
        .sort((a, b) => b.matches - a.matches);
    return results.map(result => result.index);
}