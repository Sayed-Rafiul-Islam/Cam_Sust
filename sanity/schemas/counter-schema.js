const counter = {
    name : "counter",
    type : "document",
    title : "Counter",
    fields : [
        {
            name : "serial",
            type : "number",
            title : "Serial No"
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
          title: 'serial',
          name: 'Serial No',
          by: [
            {field: 'serial', direction: 'asc'}
          ]
        }
      ]
}

export default counter;