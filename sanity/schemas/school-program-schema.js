const schoolPrograms = {
    name : "schoolPrograms",
    type : "document",
    title : "School Programs",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
         {
            name : "style",
            type : "string",
            title : "Style",
            options : {
                list : ["normal", "reversed"]
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name : "schoolName",
            type : "string",
            title : "School Name"
        },
        {
            name : "text",
            type : "text",
            title : "Text"
        },
        {
            name : "images",
            type : "array",
            title : "Images",
            of : [
                {type : "image",
                options: {
                    hotspot: true
                  }}
            ]
        },
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

export default schoolPrograms;