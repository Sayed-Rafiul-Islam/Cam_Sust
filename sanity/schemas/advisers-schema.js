const advisers = {
    name : "advisers",
    type : "document",
    title : "Advisers",
    fields : [
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
    ]
}

export default advisers;