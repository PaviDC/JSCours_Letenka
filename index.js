const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

  /*zadání úkolu letenka 
  Proveďte následující:  
    1. Vypište do stránky název startovní a cílové země - já jsem zvolila celou destinaci - jelikož letenka by měla být z místo do místa
    */
    document.body.innerHTML +=  " <h2> From </h2>" + "<h3>" +  flight.cityFrom + " (" + flight.flyFrom + ")" + ", " + flight.countryFrom.name + " " + flight.countryFrom.code + "</h3>"; // destination + code - city and country - from where
    document.body.innerHTML += " <h2> To </h2>" + "<h3>" + flight.cityTo + " (" + flight.cityCodeTo +  ")" + ", " + flight.countryTo.name + " " + flight.countryTo.code + "</h3>"; // destination + code - city and country - to where

    /* luggages limits and prices
    2. Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.
     */

   // const handLuggageLimit = 
    // const holdLuggageLimit =

    document.body.innerHTML +=  "<h3> Bag limits: </h3>"; //title - bag limits
    document.body.innerHTML +=  "<h4> Hand luggage: </h4>" + "<p> size (cm): " + flight.baglimit.hand_width + " (width) x " + flight.baglimit.hand_height + " (height) x " + flight.baglimit.hand_length + " (length) " +  "</p>"; //title - hand luggage
   // document.body.innerHTML +=  "<p> size (cm): " + flight.baglimit.hand_width + " (width) x " + flight.baglimit.hand_height + " (height) x " + flight.baglimit.hand_length + " (length) " +  "</p>"; // hand luggage size
    document.body.innerHTML +=  "<p>" + "weight limit: " + flight.baglimit.hand_weight + " Kg" + "</p>" ;// weight limit - hand luggage
    document.body.innerHTML +=  "<h4> Hold luggage: </h4>"; // title hold luggage
    document.body.innerHTML +=  "<p> size (cm): " + flight.baglimit.hold_width  + " (width) x " + flight.baglimit.hold_height + " (height) x " +  flight.baglimit.hand_length  + " (length) " +  "</p>"; // hold lugagge size
    document.body.innerHTML +=  "<p>" + "weight limit: " + flight.baglimit.hold_weight + " Kg" + "</p>"; //hold luggage weight limit

    /*  3. Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište  do stránky.
    */
    document.body.innerHTML +=  "<h4> Hand luggage: </h4>" + "<p> size (cm): " + flight.baglimit.hand_width + " (width) x " + flight.baglimit.hand_height + " (height) x " + flight.baglimit.hand_length + " (length) " +  "</p>"; 
    
    /*  4. Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.
        5. Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.
    */
    const exchangeRateCzk = Math.round(flight.conversion.EUR * flight.bags_price[2]); // if exchange rate is 36 as conversion ??
    document.body.innerHTML +=  "<h5> Price for 2nd luggage: " + exchangeRateCzk + " CZK" + "</h5>";  // price 2nd  luggage
