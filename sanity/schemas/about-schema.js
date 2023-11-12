const about = {
    name : "about",
    type : "document",
    title : "About Us",
    fields : [
        {
            name : "content",
            type : "array",
            title : "Content",
            of : [
                {
                    type : "block"
                }
            ]
        }
    ]
}

export default about;