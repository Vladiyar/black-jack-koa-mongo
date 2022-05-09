module.exports = class Player {
    playerName = '';
    playerRealName = '';
    isCanDraw = true;
    isPlayerDraw = false;
    handValue = 0;
    cardsArray = [];

    constructor(name) {
        this.playerRealName = name;
    }
    // drawCard(cardDescription) {
    //     if (this.isCanDraw) {
    //         this.cardsArray.push(cardDescription);
    //         if (cardDescription[1] === 11) {
    //             if (this.handValue + 11 > 21) {
    //                 this.handValue += 1;
    //                 return;
    //             }
    //         }
    //         return this.handValue += cardDescription[1];
    //     }
    // }

}


