const products = {
    name : "products",
    type : "document",
    title : "Products",
    fields : [
        {
            name : "name",
            type : "string",
            title : "Name"
        },
        {
            name : "slug",
            type : "slug",
            title : "slug",
            options : {
                source : "name"
            }
        },
        {
            name : "images",
            type : "array",
            title : "Images",
            of : [{type : "image"}]
        },
        {
            name : "categories",
            type : "array",
            title : "categories",
            of : [{type : "string"}]
        },
        {
            name : "sized",
            type : "array",
            title : "Sizes",
            of : [{type : "string"}]
        },
        {
            name : "colors",
            type : "array",
            title : "Colors",
            of : [{type : "string"}]
        },
        {
            name : "details",
            type : "array",
            title : "Details",
            of : [
                {
                    type : "block"
                }
            ]
        },
        {
            name : "sku",
            type : "string",
            title : "SKU"
        },
        {
            name : "currency",
            type : "string",
            title : "Currency"
        },
        {
            name : "price",
            type : "number",
            title : "Price"
        },
    ]
}

export default products;