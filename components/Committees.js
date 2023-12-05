"use client"
import React, { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import './module.committee.css'
import Image from 'next/image';




const builder = imageUrlBuilder({
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset : "production",
  apiVersion : "2023-11-05",
  useCdn : true
})

function urlFor(source) {
  return builder.image(source)
}

export default function Committees({committees}) {

    const [committee,setCommittee] = useState(committees[0])
    const {name,president,gs,ags,treasurer,ofs,os,aos,rp,arp,sc,asc,fe,afe,pva,apva,it,ait,ps,aps} = committee
    const handleCommittee = (_id) =>{
        const selectedCommittee = committees.filter(committee => committee._id === _id)
        setCommittee(selectedCommittee[0])
    }

    committees.sort(function(a, b) { 
        return b.serial - a.serial
      });
  return (
    <div>
        
        <div>
            <h1 className='text-5xl text-white font-bold text-center'>{name}</h1>
            <div className='text-center my-5'>
            <form className=''>
                    <select className='ec-btn' onChange={(e)=>handleCommittee(e.target.value)}>
                        {
                            committees.map(({name,_id})=>
                            <option key={_id} value={_id}>{name}</option>
                            )
                        }
                    </select>
            </form>
        </div>
            <div className='pb-10 mt-10'>
                <div className='grid grid-cols-1'>
                    {   president &&
                        <div className='mx-auto ec-card'>
                        {
                            president.link ?
                            <Link href={president.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(president.image).url()} alt='president' />
                                </div>
                                <h2>{president.name}</h2>
                                <h3 className='position'>President</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(president.image).url()} alt='president' />
                                </div>
                                <h2>{president.name}</h2>
                                <h3 className='position'>President</h3>
                            </div>
                        }
                    </div>
                    }
                </div>
                {/* ------------------------------ */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { gs &&
                        <div className='mx-auto ec-card'>
                        {
                            gs.link ?
                            <Link href={gs.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(gs.image).url()} alt='president' />
                                </div>
                                <h2>{gs.name}</h2>
                                <h3 className='position'>General Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(gs.image).url()} alt='president' />
                                </div>
                                <h2>{gs.name}</h2>
                                <h3 className='position'>General Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                     { ags &&
                        <div  className='mx-auto ec-card'>
                        {
                            ags.link ?
                            <Link href={ags.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ags.image).url()} alt='president' />
                                </div>
                                <h2>{ags.name}</h2>
                                <h3 className='position'>Asst. General Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ags.image).url()} alt='president' />
                                </div>
                                <h2>{ags.name}</h2>
                                <h3 className='position'>Asst. General Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { treasurer &&
                        <div  className='mx-auto ec-card'>
                        {
                            treasurer.link ?
                            <Link href={treasurer.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(treasurer.image).url()} alt='Tresurer' />
                                </div>
                                <h2>{treasurer.name}</h2>
                                <h3 className='position'>Treasurer</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(treasurer.image).url()} alt='Tresurer' />
                                </div>
                                <h2>{treasurer.name}</h2>
                                <h3 className='position'>Treasurer</h3>
                            </div>
                        }
                    </div>
                    }
                    { ofs &&
                        <div  className='mx-auto ec-card'>
                        {
                            ofs.link ?
                            <Link href={ofs.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ofs.image).url()} alt='Office Secretary' />
                                </div>
                                <h2>{ofs.name}</h2>
                                <h3 className='position'>Office Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ofs.image).url()} alt='Office Secretary' />
                                </div>
                                <h2>{ofs.name}</h2>
                                <h3 className='position'>Office Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { os &&
                        <div className='mx-auto ec-card'>
                        {
                            os.link ?
                            <Link href={os.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(os.image).url()} alt='Organizing Secretary' />
                                </div>
                                <h2>{os.name}</h2>
                                <h3 className='position'>Organizing Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(os.image).url()} alt='Organizing Secretary' />
                                </div>
                                <h2>{os.name}</h2>
                                <h3 className='position'>Organizing Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { aos &&
                        <div className='mx-auto ec-card'>
                        {
                            aos.link ?
                            <Link href={aos.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(aos.image).url()} alt='Asst. Organizing Secretary' />
                                </div>
                                <h2>{aos.name}</h2>
                                <h3 className='position'>Asst. Organizing Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(aos.image).url()} alt='Asst. Organizing Secretary' />
                                </div>
                                <h2>{aos.name}</h2>
                                <h3 className='position'>Asst. Organizing Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { rp &&
                        <div className='mx-auto ec-card'>
                        {
                            os.link ?
                            <Link href={rp.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(rp.image).url()} alt='Research & Project Secretary' />
                                </div>
                                <h2>{rp.name}</h2>
                                <h3 className='position'>Research & Project Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(rp.image).url()} alt='Research & Project Secretary' />
                                </div>
                                <h2>{rp.name}</h2>
                                <h3 className='position'>Research & Project Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { arp &&
                        <div className='mx-auto ec-card'>
                        {
                            arp.link ?
                            <Link href={arp.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(arp.image).url()} alt='Asst. Research & Project Secretary' />
                                </div>
                                <h2>{arp.name}</h2>
                                <h3 className='position'>Asst. Research & Project Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(arp.image).url()} alt='Asst. Research & Project Secretary' />
                                </div>
                                <h2>{arp.name}</h2>
                                <h3 className='position'>Asst. Research & Project Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { sc &&
                        <div className='mx-auto ec-card'>
                        {
                            os.link ?
                            <Link href={sc.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(sc.image).url()} alt='Study Circle Secretary' />
                                </div>
                                <h2>{sc.name}</h2>
                                <h3 className='position'>Study Circle Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(sc.image).url()} alt='Study Circle Secretary' />
                                </div>
                                <h2>{sc.name}</h2>
                                <h3 className='position'>Study Circle Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { asc &&
                        <div className='mx-auto ec-card'>
                        {
                            asc.link ?
                            <Link href={asc.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(asc.image).url()} alt='Asst. Study Circle Secretary' />
                                </div>
                                <h2>{asc.name}</h2>
                                <h3 className='position'>Asst. Study Circle Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(asc.image).url()} alt='Asst. Study Circle Secretary' />
                                </div>
                                <h2>{asc.name}</h2>
                                <h3 className='position'>Asst. Study Circle Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { fe &&
                        <div className='mx-auto ec-card'>
                        {
                            fe.link ?
                            <Link href={fe.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(fe.image).url()} alt='Field Education Secretary' />
                                </div>
                                <h2>{fe.name}</h2>
                                <h3 className='position'>Field Education Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(fe.image).url()} alt='Field Education Secretary' />
                                </div>
                                <h2>{fe.name}</h2>
                                <h3 className='position'>Field Education Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { afe&&
                        <div className='mx-auto ec-card'>
                        {
                            afe.link ?
                            <Link href={afe.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(afe.image).url()} alt='Asst. Field Education Secretary' />
                                </div>
                                <h2>{afe.name}</h2>
                                <h3 className='position'>Asst. Field Education Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(afe.image).url()} alt='Asst. Field Education Secretary' />
                                </div>
                                <h2>{afe.name}</h2>
                                <h3 className='position'>Asst. Field Education Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { pva &&
                        <div className='mx-auto ec-card'>
                        {
                            pva.link ?
                            <Link href={pva.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(pva.image).url()} alt='Publicity & Visual Arts Secretary' />
                                </div>
                                <h2>{pva.name}</h2>
                                <h3 className='position'>Publicity & Visual Arts Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(pva.image).url()} alt='Publicity & Visual Arts Secretary' />
                                </div>
                                <h2>{pva.name}</h2>
                                <h3 className='position'>Publicity & Visual Arts Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { apva &&
                        <div className='mx-auto ec-card'>
                        {
                            apva.link ?
                            <Link href={apva.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(apva.image).url()} alt='Asst. Publicity & Visual Arts Secretary' />
                                </div>
                                <h2>{apva.name}</h2>
                                <h3 className='position'>Asst. Publicity & Visual Arts Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(apva.image).url()} alt='Asst. Publicity & Visual Arts Secretary' />
                                </div>
                                <h2>{apva.name}</h2>
                                <h3 className='position'>Asst. Publicity & Visual Arts Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    { it &&
                        <div className='mx-auto ec-card'>
                        {
                            os.link ?
                            <Link href={it.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(it.image).url()} alt='IT Secretary' />
                                </div>
                                <h2>{it.name}</h2>
                                <h3 className='position'>IT Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(it.image).url()} alt='IT Secretary' />
                                </div>
                                <h2>{it.name}</h2>
                                <h3 className='position'>IT Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    { ait &&
                        <div className='mx-auto ec-card'>
                        {
                            ait.link ?
                            <Link href={ait.link}>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ait.image).url()} alt='Asst. IT Secretary' />
                                </div>
                                <h2>{ait.name}</h2>
                                <h3 className='position'>Asst. IT Secretary</h3>
                            </Link>
                            :
                            <div>
                                <div className='ec-image'>
                                    <Image fill src={urlFor(ait.image).url()} alt='Asst. IT Secretary' />
                                </div>
                                <h2>{ait.name}</h2>
                                <h3 className='position'>Asst. IT Secretary</h3>
                            </div>
                        }
                    </div>
                    }
                    
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                   { ps &&
                     <div className='mx-auto ec-card'>
                            {
                                ps.link ?
                                <Link href={ps.link}>
                                    <div className='ec-image'>
                                        <Image fill src={urlFor(ps.image).url()} alt='Publication Secretary' />
                                    </div>
                                    <h2>{ps.name}</h2>
                                    <h3 className='position'>Publication Secretary</h3>
                                </Link>
                                :
                                <div>
                                    <div className='ec-image'>
                                        <Image fill src={urlFor(ps.image).url()} alt='Publication Secretary' />
                                    </div>
                                    <h2>{ps.name}</h2>
                                    <h3 className='position'>Publication Secretary</h3>
                                </div>
                          
                            }
                        </div>
                      }
                       {  aps &&
                        <div className='mx-auto ec-card'>
                            {
                                aps.link ?
                                <Link href={aps.link}>
                                    <div className='ec-image'>
                                        <Image fill src={urlFor(aps.image).url()} alt='Asst. Publication Secretary' />
                                    </div>
                                    <h2>{aps.name}</h2>
                                    <h3 className='position'>Asst. Publication Secretary</h3>
                                </Link>
                                :
                                <div>
                                    <div className='ec-image'>
                                        <Image fill src={urlFor(aps.image).url()} alt='Asst. Publication Secretary' />
                                    </div>
                                    <h2>{aps.name}</h2>           
                                    <h3 className='position'>Asst. Publication Secretary</h3>
                                </div>
                            }
                        </div>
                    }
                </div>
                {/* ----------------------------------- */}
            </div>
        </div>
    </div>
  )
}
