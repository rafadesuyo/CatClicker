//cookie amount and text changes
let currency = 0.0;
let currencyAmountText;
let pageTitle;

//upgrades
let milkUpgradeActive = false;
let milkUpgradePrice = 15;
let milkText;

//audio references
const clickSound = new Audio("resources/click.mp3");

//updates the amount of cat owned text and title
function updateCurrency(amount){

    //adding the currency to the click amount
    currency += amount;

    //getting references from html
    document.getElementById("cat");
    currencyAmountText = document.getElementById("currency");
    pageTitle = document.getElementById("title");

    //setting the currency to text.
    currencyAmountText.textContent = currency.toFixed() + " cats";
    //setting the title to the currency
    pageTitle.textContent = currency.toFixed() + " Cats - Cat Clicker";

    console.log("You have: ", currency, " cats");
    return amount;
}

//checks whenever you click on the cat and updates the cat and plays a sound.
function clickCat()
{
    updateCurrency(1);
    playSound(clickSound); 
}

//plays a sound with the specified name
function playSound(audioName)
{
    audioName.play();
}

//checks if you have enough currency to upgrade the cat, if you do, upgrade.
function activateUpgrade()
{
    document.getElementById("upgradeButton");
    
    if(currency < milkUpgradePrice)     
    {
        console.log("Not enough cats");
    }
    else
    {
        updateCurrency(-milkUpgradePrice);
        calculateUpgradePrice();
        milkUpgradeActive = true;
        console.log("Upgrading cat");
    }
    
}

//this is checking if every upgrade is active and adding the currency each second to the player.
let upgrade = setInterval(function(){
    if(milkUpgradeActive)
    {
        updateCurrency(0.1);
    }
}, 1000);

//this function handles the price adjustment of each upgrade.
function calculateUpgradePrice()
{
    //TODO:round the price up.
    milkUpgradePrice *= 1.2;
    milkUpgradePrice = Math.ceil(milkUpgradePrice);
    milkText = document.getElementById("upgradeButton");
    milkText.textContent = "Upgrade Cat Price: " +  milkUpgradePrice.toString();
    console.log(milkUpgradePrice);
    return milkUpgradePrice;
}