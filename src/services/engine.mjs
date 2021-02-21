function process(promotions, basket) {
    //TODO: Iterate over promotions and match items in basket
    let totalVolumeDiscount = 0;
    let totalBundleDiscount = 0;
    for (const promo of promotions) {
        switch (promo.type) {
            //Volume discount
            case "VOLUME":
                let volumeOccurences = countOccurrences(basket, promo.relSku, 0)
                break;
                //Bundle discount
            case "BUNDLE":
                break;

            case "PERCENTAGE":
                break;
        }
    }

    return null;
}


function countOccurrences(basket, toFindItems, count) {
    //TODO Find the ammount of times a given promotion appears in the basket

    return null;
}

export {
    process
}