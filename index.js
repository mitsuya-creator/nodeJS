import { Store, Customer } from "./module/market.js";
import resultTx from "./module/resulttx.js";

let order = (fromStore, items) => {
    try {
        const order = resultTx(fromStore, items);
        order.then(res => console.log(res))
            .catch(res => console.log(res));
    } catch (e) {
        console.log(e);
    }

};

const rzkyStore = new Store('Rzkystore', 'SHD');
const productRzky = rzkyStore.product('nabati', 'kopiko', 'vegetable', 'coffee', 'mizone');

const mitsuya = new Customer('mitsuya', 'kopiko');
const draken = new Customer('draken', 'vege');

order(productRzky, draken.order);
order(productRzky, mitsuya.order);





