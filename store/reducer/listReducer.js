let stateApp = {
    Data: [
        {
            id: '1',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: "300,000đ"
        },
        {
            id: '2',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '400.000đ'
        },
        {
            id: '3',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '200.000đ'
        },
        {
            id: '4',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '250.000đ'
        },
        {
            id: '5',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '200.000đ'
        },
        {
            id: '6',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '250.000đ'
        },
        {
            id: '7',
            image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
            titile: "Admitox 100SL – Sạch rầy hiệu quả",
            price: '250.000đ'
        },
    ],
    Cart: [],
    active: true,
    quality: 0,
    isLoading: false
}

const listReducer = (state = stateApp, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            console.log("product is : ", action)
            // let addProduct = 
            return {
                ...state,
                Cart: [...state.Cart, action.payload],
                quality: state.quality + 1,
                //active: false
            }
            break;
        case "DELETE_PRODUCT":
            console.log("product delete is : ", action)
            let deleteProduct = state.Data
            deleteProduct = deleteProduct.filter(item => item.id !== action.payload.id)
            console.log("check deleteProduct :", deleteProduct)
            return {
                ...state, deleteProduct
                // quality: state.quality - 1
            }
            break;
        case "LOAD":
            console.log("Load : ", action)
            let Loaddata = state.Data
            return {
                Data: [...state.Data.concat(Loaddata)]
                // quality: state.quality - 1
            }
            break;
        default:
            return state;
    }
}

export default listReducer;