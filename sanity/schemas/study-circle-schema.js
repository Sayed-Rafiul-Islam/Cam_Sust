const studyCircles = {
    name : "studyCircles",
    type : "document",
    title : "Study Circles",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
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
        {
            name : "text",
            type : "text",
            title : "Text"
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

export default studyCircles;