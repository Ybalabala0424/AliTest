const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});
const mergePromise = ajaxArray => {
    async function achieve(ajaxArray) {
        const one=await ajaxArray[0];
        const two=await ajaxArray[1];
        const three=await ajaxArray[2];
        var list=[one,two,three];
        return list;
    }
    return achieve(ajaxArray);
};
mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});
