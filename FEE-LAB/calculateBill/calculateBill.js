const categories = [
    { id: "C1", categoryName: "Platters", superCategory: { superCategoryName: "South Indian", id: "SC1" } },
    { id: "C2", categoryName: "Breads", superCategory: { superCategoryName: "North Indian", id: "SC2" } }
];

const menu = [
    { id: "item1", itemName: "Butter Roti", rate: 20, taxes: [{ name: "Service Charge", rate: 10, isInPercent: false }, { name: "GST", rate: 5, isInPercent: true }], category: { categoryId: "C2" } },
    { id: "item2", itemName: "Paneer Butter Masala", rate: 120, taxes: [{ name: "Service Charge", rate: 10, isInPercent: true }, { name: "GST", rate: 18, isInPercent: true }, { name: "Service Tax", rate: 10, isInPercent: true }], category: { categoryId: "C1" } },
    { id: "item3", itemName: "Masala Dosai", rate: 50, taxes: [{ name: "Service Charge", rate: 5, isInPercent: false }], category: { categoryId: "C1" } },
    { id: "item4", itemName: "Dosai Platter", rate: 150, taxes: [{ name: "GST", rate: 18, isInPercent: true }], category: { categoryId: "C1" } }
];


function calculateBill(bill) {
    let totalAmount = 0;
    let billItems = [];


    bill.billItems.forEach(billItem => {

        let menuItem = menu.find(item => item.id === billItem.id);  //bill is here or not
        if (menuItem) {
            let basePrice = menuItem.rate;

            let discountedPrice = basePrice;
            if (billItem.discount.isInPercent) {
                discountedPrice -= (discountedPrice * billItem.discount.rate) / 100;
            } else {
                discountedPrice -= billItem.discount.rate;
            }

            let finalPrice = discountedPrice;
            
            menuItem.taxes.forEach(tax => {
                if (tax.isInPercent) {
                    finalPrice += (discountedPrice * tax.rate) / 100;
                } else {
                    finalPrice += tax.rate;
                }
            });


            let totalItemPrice = finalPrice * billItem.quantity;


            let billItemInfo = `${menuItem.itemName}@${basePrice} x ${billItem.quantity} = ${totalItemPrice.toFixed(2)}`;
            billItems.push(billItemInfo);


            totalAmount += totalItemPrice;
        }
    });


    return [totalAmount.toFixed(2), billItems];
}

// Example test case
const bill = {
    id: "B1",
    billNumber: 10,
    openTime: "12/01/2021, 10:43:39",
    customerName: "CodeQuotient",
    billItems: [
        { id: "item2", quantity: 3, discount: { rate: 10, isInPercent: false } },
        { id: "item1", quantity: 15, discount: { rate: 10, isInPercent: true } },
        { id: "item4", quantity: 2, discount: { rate: 20, isInPercent: false } },
        { id: "item3", quantity: 5, discount: { rate: 5, isInPercent: true } }
    ]
};

// Call the function
console.log(calculateBill(bill));
