        
    const shopCardColors = {
        "Normal": "linear-gradient(225deg, #DEDDDD 0%, #969696 100%)",
        "Fire": "linear-gradient(225deg, #FC3D00 0%, #FEF361 100%)",
        "Water": "linear-gradient(180deg, #A4EBFD 0%, #0C5C99 100%)",
        "Electric": "linear-gradient(180deg, #FEF361 0%, #FA9C22 100%)",
        "Grass": "linear-gradient(180deg, #67A848 0%, #446539 100%)",
        "Ice": "linear-gradient(226deg, #33AFB5 0%, #91CDCB 98.82%)",
        "Fighting": "linear-gradient(180deg, #C0444A 0%, #DC777A 100%)",
        "Poison": "linear-gradient(225deg, #A32890 0%, #C155A0 100%)",
        "Ground": "linear-gradient(210deg, #B14D11 0%, #ECB368 84.5%)",
        "Flying": "linear-gradient(225deg, #648ABB 0%, #99B2D2 66.5%, #FFF 100%)",
        "Psychic": "linear-gradient(135deg, #C837AB 0%, #DE87CD 100%)",
        "Bug": "linear-gradient(180deg, #A1C352 0%, #53A93A 100%)",
        "Rock": "linear-gradient(180deg, #796245 0%, #9F7B50 100%)",
        "Ghost": "linear-gradient(221deg, #110B17 0.65%, #4E356E 70.19%)",
        "Dragon": "linear-gradient(225deg, #06469D 0%, #7767BD 100%)",
        "Dark": "linear-gradient(180deg, #302D40 0%, #686570 100%)",
        "Steel": "linear-gradient(222deg, #3A3A3A 0%, #787878 50.6%)",
        "Fairy": "linear-gradient(180deg, #C24E9F 0%, #F2B8DE 100%)"
    };

    const typeColors = {
        "Normal": "#A4A4A4",
        "Fire": "#EA9447",
        "Water": "#65AAD4",
        "Electric": "#E1E14D",
        "Grass": "#53A93A",
        "Ice": "#A5D7D8",
        "Fighting": "#D64123",
        "Poison": "#954B98",
        "Ground": "#A47C41",
        "Flying": "linear-gradient(180deg, #77C5EB 0%, #77C5EB 50%, #B7B8A8 51%, #B7B8A8 100%)",
        "Psychic": "#E66289",
        "Bug": "#A1C352",
        "Rock": "#928358",
        "Ghost": "#705C99",
        "Dragon": "linear-gradient(180deg, #748CC8 0%, #748CC8 50%, #D64123 51%, #D64123 100%)",
        "Dark": "#577784",
        "Steel": "#B8B9CE",
        "Fairy": "#DAB0D4"
    };

    document.addEventListener('DOMContentLoaded', () => {
        const shopCards = document.querySelectorAll('.shop-cards-all > div');
        
        shopCards.forEach(card => {
            const type1Element = card.querySelector('.pokemon-type1 .pokemon-type-text');
            const type2Element = card.querySelector('.pokemon-type2 .pokemon-type-text');
            
            const type1RecElement = card.querySelector('.pokemon-type-rec-1');
            const type2RecElement = card.querySelector('.pokemon-type-rec-2');

            const shopCardRec1 = card.querySelector('.shop-card-rec-2');
            
            if (type1Element && type2Element && type1RecElement && type2RecElement) {
                const type1 = type1Element.textContent.trim();
                const type2 = type2Element.textContent.trim();
                
                // Set background for type1
                if (typeColors[type1]) {
                    type1RecElement.style.background = typeColors[type1];
                }
                
                // Set background for type2 or hide it
                if (typeColors[type2]) {
                    type2RecElement.style.background = typeColors[type2];
                    type2RecElement.style.opacity = '1'; // Make it visible
                } else if (type2 === "" || type2.toUpperCase() === "NULL") {
                    type2RecElement.style.opacity = '0'; // Hide it
                }

                if (shopCardColors[type1]) {
                    shopCardRec1.style.background = shopCardColors[type1];
                }

            }
        });
    });

    //This function opens the page in new tab... useful if want to lead to a youtube video or any other page
function openPage(url) {
    window.open(url, '_blank');
}

    //This function redirects to the page in the same tab
function redirectToPage(url) {
    window.location.href = url;
}
