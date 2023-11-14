const peopleTalks = {
    name : "peopleTalks",
    type : "document",
    title : "Poople Talikng About Us",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
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
            name: 'serial',
            title: 'Serial No',
          by: [
            {field: 'serial', direction: 'desc'}
          ]
        }
      ]
}

export default peopleTalks;