const committees = {
    name : "committees",
    type : "document",
    title : "Committees",
    fields : [
        {
            name : "name",
            type : "string",
            title : "Committee Name"
        },
        {
            name : "electedYear",
            type : "number",
            title : "Elected Year"
        },
        {
            name : "president",
            type : "object",
            title : "President",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
                        hotspot: true
                      }
                },
                {
                    name: "link",
                    type: "url",
                    title: "Linkedin Profile Link"
                }
            ]
        },
        {
            name : "gs",
            type : "object",
            title : "General Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
                        hotspot: true
                      }
                },
                {
                    name: "link",
                    type: "url",
                    title: "Linkedin Profile Link"
                }
            ]
        },
        {
            name : "ags",
            type : "object",
            title : "Assistant General Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
                        hotspot: true
                      }
                },
                {
                    name: "link",
                    type: "url",
                    title: "Linkedin Profile Link"
                }
            ]
        },
        {
            name : "treasurer",
            type : "object",
            title : "Tresurer",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
                        hotspot: true
                      }
                },
                {
                    name: "link",
                    type: "url",
                    title: "Linkedin Profile Link"
                }
            ]
        },
        {
            name : "ofs",
            type : "object",
            title : "Office Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "os",
            type : "object",
            title : "Organizing Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "aos",
            type : "object",
            title : "Assistant Organizing Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "rp",
            type : "object",
            title : "Research & Project Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "arp",
            type : "object",
            title : "Assistant Research & Project Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "sc",
            type : "object",
            title : "Study Circle Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "asc",
            type : "object",
            title : "Assistant Study Circle Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "fe",
            type : "object",
            title : "Field Education Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "afe",
            type : "object",
            title : "Assistant Feild Education Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "pva",
            type : "object",
            title : "Publicity & Visual Arts Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "apva",
            type : "object",
            title : "Assistant Publicity & Visual Arts Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "it",
            type : "object",
            title : "IT Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
        {
            name : "ait",
            type : "object",
            title : "Assistant IT Secretary",
            fields : [
                {
                    name: "name",
                    type : "string"
                },
                {
                    name: "image",
                    type : "image",
                    options: {
              hotspot: true
            }
                }
            ]
        },
    ],
    orderings: [
        {
          title: 'electedYear',
          name: 'Elected Year',
          by: [
            {field: 'electedYear', direction: 'desc'}
          ]
        }
      ]
}
    


export default committees;