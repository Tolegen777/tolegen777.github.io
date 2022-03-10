
type ProductsType = {
    id: number,
    name:string,
    img:string,
    description:string,
    price:string
}

let initialState = {
    burgers: [
        {id:0, name:"The President Burger", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 20 +"$"},
        {id:1, name:"Beefy Burgers", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 5 + "$"},
        {id:2, name:"Burger Bizz", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 6 +"$"},
        {id:3, name:"Bull Burgers", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 7 +"$"},
        {id:4, name:"Smokin Burger", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 10 +"$"},
        {id:5, name:"Crackles Burger", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 3 +"$"},
        {id:6, name:"Burger Boys", img:"",
            description:"",price: 5 +"$"},
        {id:7, name:"Crackles Burger", img:"",
            description:"",price: 7 +"$"},
        {id:8, name:"Rocket Burgers", img:"",
            description:"",price: 8 +"$"},
        {id:9, name:"Delish Burger", img:"", description:"",price: 10 +"$"},
        {id:10, name:"Bull Burgers", img:"", description:"",price: 12 +"$"},
        {id:11, name:"Beefy Burgers", img:"", description:"",price: 7 +"$"},
        {id:12, name:"Burger Bizz", img:"", description:"",price: 8 +"$"},
        {id:13, name:"Bull Burgers", img:"", description:"",price: 10 +"$"},
        {id:14, name:"Smokin Burger", img:"", description:"",price: 12 +"$"},
        {id:15, name:"Crackles Burger", img:"", description:"",price: 11 +"$"},
        {id:16, name:"Burger Boys", img:"", description:"",price: 10 +"$"}

    ] as Array<ProductsType>,
    drinks: [
        {id:0, name:"COCA-COLA CLASSIC", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 20 +"$"},
        {id:1, name:"PEPSI", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 5 +"$"},
        {id:2, name:"SPRITE", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 6 +"$"},
        {id:3, name:"DIET COKE", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 7 +"$"},
        {id:4, name:"MOUNTAIN DEW", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 10 +"$"},
        {id:5, name:"DR PEPPER", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 3 +"$"},
        {id:6, name:"COPELLA", img:"",
            description:"",price: 5 +"$"},
        {id:7, name:"FRIJJ", img:"",
            description:"",price: 7 +"$"},
        {id:8, name:"MAXI TEA", img:"",
            description:"",price: 8 +"$"},

    ] as Array<ProductsType>,

    elseThings: [
        {id:0, name:"Free", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 20 +"$"},
        {id:1, name:"WAFFLE FRIES", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 5 +"$"},
        {id:2, name:"CHICKEN POPEYES", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 6 +"$"},
        {id:3, name:"CURLY FRIES ", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 7 +"$"},
        {id:4, name:"MCNUGGETS", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 10 +"$"},
        {id:5, name:"SOFT TACOS", img:"",
            description:"Great way to make your business appear trust and relevant.",price: 3 +"$"},
        {id:6, name:"ANIMAL STYLE FRIES", img:"",
            description:"",price: 5 +"$"},
        {id:7, name:"CAJUN FRIES", img:"",
            description:"",price: 7 +"$"},
        {id:8, name:"BAKED APPLE PIE", img:"",
            description:"",price: 8 +"$"},
    ] as Array<ProductsType>,
    elementsSize: 4,

}

type InitialStateType = typeof initialState;

const menuListsReducer = (state = initialState, action):InitialStateType => {

    // switch (action.type) {
    //     case GET_BURGERS: {
    //         let stateCopy = {...state};
    //         stateCopy.burgers = [...state.burgers];
    //         return stateCopy;
    //     }
    //     case GET_DRINKS: {
    //         let stateCopy = {...state};
    //         stateCopy.drinks = [...state.drinks];
    //         return stateCopy;
    //     }
    //     case GET_ELSE_THINGS: {
    //         let stateCopy = {...state};
    //         stateCopy.elseThings = [...state.elseThings];
    //         return stateCopy;
    //     }
    //     default: return state;
    //
    //
    // }
    return state;

}

export default menuListsReducer;