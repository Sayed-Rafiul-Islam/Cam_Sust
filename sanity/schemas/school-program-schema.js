const schoolProgram = {
    name : "schoolProgram",
    type : "document",
    title : "School Program",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No"
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
          title: 'serial',
          name: 'Serial No',
          by: [
            {field: 'serial', direction: 'asc'}
          ]
        }
      ]
}

export default schoolProgram;