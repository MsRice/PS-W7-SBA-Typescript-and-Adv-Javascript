function calculateTax(price: number , discount: number = .0475 , category: string): number{
    discount = (category == 'groceries') ? .03 : discount 
    return price * discount
}