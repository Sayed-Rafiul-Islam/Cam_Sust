const counter = {
    name : "counter",
    type : "document",
    title : "Counter",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No",
            validation: (Rule) => Rule.required(),
        },
        {
            name : "eventName",
            type : "string",
            title : "Event Name"
        },
        {
            name : "eventCount",
            type : "number",
            title : "Number of Successful Events"
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

export default counter;