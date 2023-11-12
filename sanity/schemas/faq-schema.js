const faq = {
    name : "faq",
    type : "document",
    title : "FAQ",
    fields : [
        {
            name : "question",
            type : "string",
            title : "Question"
        },
        {
            name : "answer",
            type : "array",
            title : "Answer",
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

export default faq;