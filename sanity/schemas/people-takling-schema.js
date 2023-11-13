const peopleTalks = {
    name : "peopleTalks",
    type : "document",
    title : "Poople Talikng About Us",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No"
        },
        {
            name : "name",
            type : "string",
            title : "Name"
        },
        {
            name : "image",
            type : "image",
            title : "Image",
            options: {
                hotspot: true
              }
        },
        {
            name : "words",
            type : "array",
            title : "Words",
            of : [
                {
                    type : "block"
                }
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

export default peopleTalks;