let resultTx = (fromStore, items) => {
    return new Promise((resolve, reject) => {
        if (fromStore.includes(items)) {
            resolve(`there is ${items} here`);
        } else {
            reject(`there is no ${items} here`);
        }
    })
}


export default resultTx;