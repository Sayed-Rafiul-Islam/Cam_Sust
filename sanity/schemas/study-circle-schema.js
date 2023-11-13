const studyCircle = {
    name : "studyCircle",
    type : "document",
    title : "Study Circle",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No"
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
          title: 'serial',
          name: 'Serial No',
          by: [
            {field: 'serial', direction: 'asc'}
          ]
        }
      ]
}

export default studyCircle;