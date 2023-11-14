const advisers = {
    name : "advisers",
    type : "document",
    title : "Advisers",
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
            name : "department",
            type : "string",
            title : "Department"
        },
        {
            name : "position",
            type : "string",
            title : "Position at Cam-Sust",
            options : {
                list : ["Adviser", "Cheif Adviser"]
            }
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true
            }
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

export default advisers;