function parseBankAccount(bankAccount) {
  
    const numberArray = bankAccount.split('\n');
    
    const byteMap = {0: {}, 1:{}, 2: {}}
    const numStruct = {
      " _ | ||_|": "0",
      "     |  |": "1",
      " _  _||_ ": "2",
      " _  _| _|": "3",
      "   |_|  |": "4",
      " _ |_  _|": "5",
      " _ |_ |_|": "6",
      " _   |  |": "7",
      " _ |_||_|": "8",
      " _ |_| _|": "9"
    }
    
    const combinedNumber= {};
    
    numberArray.forEach((each, parentIndex)=>{
      const current = each.split('')
      const columns = current.length / 3;
      let pointer = 1;
      for(let index=0; index<=columns+1; index++){
          
          if(!current[pointer] || !current[pointer+1]) return;
          const currentMap =  byteMap[parentIndex][index] || []
          byteMap[parentIndex][index] = [...currentMap, current[pointer-1], current[pointer], current[pointer+1]];
      pointer = pointer+3;        
      }
    });
    
    Object.values(byteMap).forEach((each, index)=>{
      Object.values(each).forEach((eachChild, childIndex)=>{
          const current = combinedNumber[childIndex] || [];
          combinedNumber[childIndex] = [...current, ...eachChild]
      })
    });
    
    
    return Object.values(combinedNumber).reduce((accum, current)=>{
      const currentChild = numStruct[current.join('')]
      return `${accum}${currentChild}`
     },'');
    
}