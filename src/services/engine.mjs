function process(promotions, basket, basketSubtotal) {
    //TODO: Iterate over promotions and match items in basket
    let totalVolumeDiscount = 0;
    let totalBundleDiscount = 0;
    for (const promo of promotions) {
        switch (promo.type) {
            //Volume discount
            case "VOLUME":
                let volumeOccurences = countOccurrences(basket, promo.relSku, 0)
                if (volumeOccurences > 0) {
                    console.log("Processing volume disccount")
                    //Accumulate the discount to substract based on how many times the promo can be applied
                    totalVolumeDiscount = totalVolumeDiscount + (promo.amountOff * volumeOccurences);
                }
                break;
                //Bundle discount
            case "BUNDLE":
                let bundleOccurences = countOccurrences(basket, promo.relSku, 0)
                if (bundleOccurences > 0) {
                    console.log("Processing bundle disccount")
                    totalBundleDiscount = totalBundleDiscount + (promo.amountOff * bundleOccurences);
                }
                break;

            case "PERCENTAGE":
                break;
        }
    }

    let subtotalAfterVolumePromo = basketSubtotal - totalVolumeDiscount;
    let subtotalAfterBundlePromo = basketSubtotal - totalBundleDiscount;

    console.log("Total volume discount value: " + totalVolumeDiscount)
    console.log("Total bundle discount value: " + totalBundleDiscount)
    //Apply always the most beneficial promotion for the customer, but only one.
    return Math.min(subtotalAfterVolumePromo, subtotalAfterBundlePromo);
}

//Finds the ammount of times a given promotion pattern appears in the basket
function countOccurrences(basket, toFindItems, count) {
    if (toFindItems.every(i => basket.includes(i))) {
        for (const item of toFindItems) {
            let index = basket.indexOf(item);
            if (index > -1) {
                //Remove from the array and continue
                basket.splice(index, 1);
            } else return count;
        }
        count++;
        //Recursively keep finding matches
        return countOccurrences(basket, toFindItems, count)
    } else return count;
}

export {
    process
}