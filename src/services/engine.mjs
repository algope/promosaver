function process(promotions, basket) {
    //TODO: Iterate over promotions and match items in basket

    for (const promo of promotions) {
        switch (promo.type) {
            //Volume discount
            case "VOLUME":
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

export {
    process
}