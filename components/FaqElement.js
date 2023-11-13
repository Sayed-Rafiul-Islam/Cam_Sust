"use client" 
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PortableText from 'react-portable-text';
import './module.faqElement.css'

export default function FaqElement({faq}) {
  return (
    <div >
        <div className='w-11/12 mx-auto'>
        <h1 className='text-white text-5xl font-bold text-center mb-10'>Frequently Asked Questions</h1>
        {
            faq.map(({question,answer,_id})=> 
            <Accordion className='faq-accord' key={_id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
             {question}
            </AccordionSummary>
            <AccordionDetails>
            
              <PortableText
                  projectId='f89xy3cs'
                  dataset='production'
                  content={answer}
                  serializers={{
                    h1: ({props}) => <h1 className=" text-6xl mt-1" {...props} />,
                    h2: ({props}) => <h2 className=" text-5xl mt-1" {...props} />,
                    h3: ({props}) => <h3 className=" text-4xl mt-1" {...props} />,
                    h4: ({props}) => <h4 className=" text-3xl mt-1" {...props} />,
                    h5: ({props}) => <h5 className=" text-2xl mt-1" {...props} />,
                    h6: ({props}) => <h6 className=" text-xl mt-1" {...props} />,
                    li: ({ children }) => <li className="tex-5xl">{children}</li>,
                    normal: ({ children }) => {
                      if (children.length === 1 && children[0] === '') {
                        return <br />
                      }
                      return <p className=''>{children}</p>
                    },

                    em : ({children}) => {<i className='inline-block text-center'>{children}</i>}
                    
                  }}
                  
                  
                  />
            
            </AccordionDetails>
          </Accordion>
            )
        }
    </div>
    </div>
  )
}
