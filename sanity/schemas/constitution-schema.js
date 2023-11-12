const constitution = {
    name : "constitution",
    type : "document",
    title : "Constitution",
    fields : [
        {
            name : "title",
            type : "string",
            title : "Title"
        },
        {
            name : "content",
            type : "array",
            title : "Content",
            of : [
                {
                    type : "object",
                    fields : [
                        {   name : "sectionName",
                            type : "string"
                        },
                        {
                            name : "section",
                            type : "array",
                            title : "Section",
                            of : [
                                {
                                    type : "block"
                                },
                                {
                                    type : "image",
                                    fields: [
                                        {
                                          name: 'alt',
                                          type: 'string',
                                          title: 'Alt',
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
}

export default constitution;