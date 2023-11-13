const regularActivities = {
    name : "regularActivities",
    type : "document",
    title : "Regular Activities",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No"
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
          title: 'serial',
          name: 'Serial No',
          by: [
            {field: 'serial', direction: 'asc'}
          ]
        }
      ]
}

export default regularActivities;