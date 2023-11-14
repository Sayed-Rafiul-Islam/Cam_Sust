const camTalks = {
    name : "camTalks",
    type : "document",
    title : "Cam Talks",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
        {
            name : "titleColored",
            type : "string",
            title : "Title Orange Portion"
        },
        {
            name : "titleUnColored",
            type : "string",
            title : "Title White Portion"
        },
        {
            name : "subtitle",
            type : "string",
            title : "Subtitle"
        },
        {
            name : "details",
            type : "array",
            title : "Details",
            of : [
                {
                    type : "block"
                }
            ]
        },
        {
            name : "url",
            type : "url",
            title : "Youtube Video link"
        },
        {
            name : "additionalWords",
            type : "array",
            title : "Additional Words",
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

export default camTalks;