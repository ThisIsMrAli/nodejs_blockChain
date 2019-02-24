import {calcHash} from './calcHash';
export default class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.prevHash = prevHash;
        this.timestamp = Date.now();
        this.data = data;
        this.hash = calcHash([this.index, this.timestamp, this.data, this.prevHash]);
    }
}

export const createGenesisBlock = () => new Block(0, 'Genesis Block', '0');

export const generateNextBlock = (lastBlock, data) => new Block(lastBlock.index + 1, data, lastBlock.hash );
