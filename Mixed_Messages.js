// Mixed messages JS file to print random messages to terminal when this program is executed.

Messages_Storage = ["You know nothing Jon Snow!", "King of the North!", "A small man wiht a big brain and an even bigger cock!"];

const randomFunction = () =>{
    let rNum = Math.floor(Math.random() * Messages_Storage.length);
    return rNum;
};

const message_Breakdown = () => {
    const messages_array = Messages_Storage.slice();
    const brokenupMessages = [];
    let count = 0;

    /*
    while (count < 3){
        let begin = randomFunction()
        let end = randomFunction()
        console.log( begin, end)
        let newWord = messages_array.slice(begin, end);
        brokenupMessages.push(newWord);
        count++;
    }
    */
    console.log(brokenupMessages)
};

console.log(message_Breakdown(Messages_Storage))