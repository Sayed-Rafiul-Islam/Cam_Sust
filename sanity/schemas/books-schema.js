const books = {
    name : "books",
    type : "document",
    title : "Books",
    fields : [
        {
            name : "serial",
            type : "string",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
        {
            name : "title",
            type : "string",
            title : "Title"
        },
        {
            name : "author",
            type : "string",
            title : "Author"
        },
        {
            name : "publisher",
            type : "string",
            title : "Publisher"
        }
    ],
    orderings: [
        {
            name: 'serial',
            title: 'Serial No',
          by: [
            {field: 'serial', direction: 'desc'}
          ]
        }
      ]
}

export default books;