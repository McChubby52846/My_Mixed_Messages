// Mixed messages JS file to print random messages to terminal when this program is executed.

Messages_Storage = ["You know nothing Jon Snow!", "King of the North!", "A small man wiht a big brain and an even bigger cock!"];

const randomFunction = () =>{
    let rNum = Math.floor(Math.random() * Messages_Storage.length);
    return rNum;
};

