const faq = {
    name : "faq",
    type : "document",
    title : "FAQ",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
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
    ],
    orderings: [
        {
            name: 'serial',
            title: 'Serial No',
          by: [
            {field: 'serial', direction: 'asc'}
          ]
        }
      ]
}

export default faq;