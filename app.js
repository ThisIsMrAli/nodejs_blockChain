import { createGenesisBlock, generateNextBlock } from "./block";



const createBlockChain = num =>{
    const blockChain = [createGenesisBlock()];
    let prevBlock = blockChain[0];
    for(let i = 1; i< num; i++){
        const newBlock = generateNextBlock(prevBlock, `this is block number ${i}.`);
        blockChain.push(newBlock);
        prevBlock = newBlock;
    }
    console.log(blockChain);
}

createBlockChain(12);