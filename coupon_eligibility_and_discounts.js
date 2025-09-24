const UserInput = require('C:/Users/v-shanmugm/Music/New folder/js_challenge.json')

function getBestDiscountsTransactionsDetails(UserInput) {

    const result = [];
    const transactionsArray = UserInput.transactions;
    const couponArray = UserInput.coupons;

    if (!Array.isArray(transactionsArray) || !Array.isArray(couponArray)) {
        console.error("Invalid Inputs!");
        return [];
    }

    for (let i = 0; i < transactionsArray.length; i++) {  //currentTransaction transactions
        const currentTransaction = transactionsArray[i];
        let couponName = '';

        if (currentTransaction.status.toLowerCase() === 'success') {  // level 1 ok
            const billAmt = currentTransaction.amount;
            const couponsArrayOfTrans = currentTransaction.couponCodes;
            let BestDiscountAmt = 0;
            let discountAmt = 0;
            let netPayable = 0;
            let BestCouponName = '';
            if (typeof billAmt !== 'number' || billAmt === null || billAmt === undefined) {
                console.error("Invalid Input!");
                return [];
            }

            if (couponsArrayOfTrans.length >= 1) {
                for (let i = 0; i < couponsArrayOfTrans.length; i++) {
                    couponName = couponsArrayOfTrans[i];                   // deciding part which coupen is

                    for (let j = 0; j < couponArray.length; j++) {
                        if (couponArray[j].code === couponName) {

                            const minOrderVal = couponArray[j].minOrder;
                            const transactionDetailsTs = currentTransaction.ts;

                            if (typeof minOrderVal !== 'number' || minOrderVal === null || minOrderVal === undefined) {
                                console.error("Invalid Input!");
                                return [];
                            }

                            if (billAmt >= minOrderVal &&
                                (transactionDetailsTs >= couponArray[j].validFrom &&
                                    transactionDetailsTs <= couponArray[j].validTo)) {

                                if (couponArray[j].type === 'percent') {
                                    discountAmt = currentTransaction.amount * (couponArray[j].value / 100);
                                    if (discountAmt > couponArray[j].maxDiscount) { discountAmt = couponArray[j].maxDiscount; }

                                }
                                else if (couponArray[j].type === 'flat') {
                                    discountAmt = couponArray[j].value;
                                    if (discountAmt > couponArray[j].maxDiscount) { discountAmt = couponArray[j].maxDiscount; }
                                }
                            }
                        }
                    }
                    if (BestDiscountAmt < discountAmt) {
                        BestDiscountAmt = discountAmt;
                        BestCouponName = couponsArrayOfTrans[i];
                    }

                }

                for (let j = 0; j < couponArray.length; j++) {
                    if (couponArray[j].code === BestCouponName) {
                        const minOrderVal = couponArray[j].minOrder;
                        const transactionDetailsTs = currentTransaction.ts;

                        if (billAmt >= minOrderVal &&
                            (transactionDetailsTs >= couponArray[j].validFrom &&
                                transactionDetailsTs <= couponArray[j].validTo)) {

                            if (couponArray[j].type === 'percent') {

                                discountAmt = currentTransaction.amount * (couponArray[j].value / 100);
                                if (discountAmt > couponArray[j].maxDiscount) {
                                    discountAmt = couponArray[j].maxDiscount;
                                }
                            }

                            else if (couponArray[j].type === 'flat') {

                                discountAmt = couponArray[j].value;
                                if (discountAmt > couponArray[j].maxDiscount) {
                                    discountAmt = couponArray[j].maxDiscount;
                                }

                            }
                            netPayable = currentTransaction.amount - discountAmt;
                            result.push({
                                "txId": currentTransaction.id, "chosenCoupon": BestCouponName, "dsic": discountAmt, "payable": netPayable
                            })
                        }
                    }
                }
            }
        }
    } return result;
}

console.log(getBestDiscountsTransactionsDetails(UserInput));

// [ { choosenCoupon: 'FEST50', discount: 500, net: 700, txid: 't1' },
//   { choosenCoupon: null, discount: 0, net: 400, txid: 't2' },
//   { choosenCoupon: null, discount: 0, net: 600, txid: 't3' },
//   { choosenCoupon: 'FEST50', discount: 500, net: 4700, txid: 't4' },
//   { choosenCoupon: 'DIWALI1000',
//     discount: 1000,
//     net: 5500,
//     txid: 't5' },
//   { choosenCoupon: null, discount: 0, net: 800, txid: 't7' },
//   { choosenCoupon: null, discount: 0, net: 1000, txid: 't8' } ]
