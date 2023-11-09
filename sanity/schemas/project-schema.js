const blogs = {
    name : "blogs",
    type : "document",
    title : "Blogs",
    fields : [
        {
            name : "title",
            type : "string",
            title : "Title"
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt',
              }
            ]
          },
        {
            name : "author",
            type : "string",
            title : "Author"
        },
        {
            name : "slug",
            type : "slug",
            title : "Slug",
            options : {
                source : 'title'
            }
        },
        {
            name : "category",
            type : "string",
            title : "Category"
        },
        {
            name : "content",
            type : "array",
            title : "Content",
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

export default blogs;