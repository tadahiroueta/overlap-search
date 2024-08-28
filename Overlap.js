export default class Overlap {

    /** Node for highest points and indices of previous node (where it came from) */
    static Node = class {
        /**
         * @param {boolean} isMatch whether two characters match 
         * @param {number} points number of character matches so far 
         * @param {number} previousA index of previous character in A 
         * @param {number} previousB index of previous character in B 
         */
        constructor(isMatch, points, previousA, previousB) {
            this.isMatch = isMatch;
            this.points = points;
            this.previousA = previousA;
            this.previousB = previousB;
        }
    }

    /**
     * Immediately calculates the matches between the strings
     * 
     * @param {string} a the first string to be considered
     * @param {string} b the second string to be considered
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.longestPaths = [];

        calculateLongestPaths();
        // comparing all characers always leads to the last path with the most points (best alignment)
        this.matches = this.longestPaths[this.a.length][this.b.length].points;
    }

    /**
     * Finds potential alignments (path with a graph analogy)
     * 
     * @param {number} aTh the index of string a we are using for the overlap
     * @param {number} bTh the index of string b we are using for the overlap
     * @param {Node[]} workingRow a vector including the left-neighbouring node
     */
    getOptions(aTh, bTh, workingRow) {
        let options = [];

        // first 
        if (aTh == 0 && bTh == 0) {
            // therefore there's only one option
            options.push(new Node(false, 0, null, null));
            return options;
        }

        // top
        if (aTh > 0) options.push(new Node(false, this.longestPaths[aTh - 1][bTh].points, aTh - 1, bTh));

        // diagonal
        if (aTh > 0 && bTh > 0) {
            const match = this.a[aTh - 1] === this.b[bTh - 1];
            options.push(new Node(match, this.longestPaths[aTh - 1][bTh - 1].points + (match ? 1 : 0), aTh - 1, bTh - 1));
        }

        // left
        if (bTh > 0) options.push(new Node(false, workingRow[workingRow.length - 1].points, aTh, bTh - 1));

        return options;
    }

    /** Calculates the best possible alignment leading up to a point in the matrix (i.e. fill in longestPaths) */
    calculateLongestPaths() {
        for (aTh = 0; aTh <= this.a.length; aTh++) {
            let row = [];
            for (bTh = 0; bTh <= this.b.length; bTh++) {
                let options = getOptions(aTh, bTh, row);
                let bestOption = options.reduce((a, b) => a.points > b.points ? a : b);
                row.push(bestOption);
            }
            this.longestPaths.push(row);
        }
    }
}