const regularActivities = {
    name : "regularActivities",
    type : "document",
    title : "Regular Activities",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
        {
            name : "icon",
            type : "image",
            title : "Icon"
        },
        {
            name : "name",
            type : "string",
            title : "Activity Name"
        },
        {
            name : "activity",
            type : "text",
            title : "Activity"
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

export default regularActivities;