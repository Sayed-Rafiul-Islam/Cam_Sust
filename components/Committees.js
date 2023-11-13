"use client"
import React, { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import './module.committee.css'




const builder = imageUrlBuilder({
  projectId : "f89xy3cs",
  dataset : "production",
  apiVersion : "2023-11-05",
  useCdn : true
})

function urlFor(source) {
  return builder.image(source)
}

export default function Committees({committees}) {

    const [committee,setCommittee] = useState(committees[0])
    const {name,president,gs,ags,treasurer,ofs,os,aos,rp,arp,sc,asc,fe,afe,pva,apva,it,ait} = committee
    console.log(gs.link)
    const handleCommittee = (_id) =>{
        const selectedCommittee = committees.filter(committee => committee._id === _id)
        setCommittee(selectedCommittee[0])

    }
  return (
    <div>
        
        <div>
            <h1 className='text-5xl text-white font-bold text-center'>{name}</h1>
            <div className='text-center my-5'>
            <form className=''>
                    {/* <label for="cars">Choose a car:</label> */}
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
                    <div className={president ? 'mx-auto ec-card' : 'hidden'}>
                        {
                            president.link ?
                            <Link href={president.link}>
                                <img src={urlFor(president.image).url()} alt='president' />
                                <h2>{president.name}</h2>
                                <h3 className='position'>President</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(president.image).url()} alt='president' />
                                <h2>{president.name}</h2>
                                <h3 className='position'>President</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ------------------------------ */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div  className={gs ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            gs.link ?
                            <Link href={gs.link}>
                                <img src={urlFor(gs.image).url()} alt='president' />
                                <h2>{gs.name}</h2>
                                <h3 className='position'>General Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(gs.image).url()} alt='president' />
                                <h2>{gs.name}</h2>
                                <h3 className='position'>General Secretary</h3>
                            </div>
                        }
                    </div>
                    <div  className={ags ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            ags.link ?
                            <Link href={ags.link}>
                                <img src={urlFor(ags.image).url()} alt='president' />
                                <h2>{ags.name}</h2>
                                <h3 className='position'>Asst. General Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(ags.image).url()} alt='president' />
                                <h2>{ags.name}</h2>
                                <h3 className='position'>Asst. General Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div  className={treasurer ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            treasurer.link ?
                            <Link href={treasurer.link}>
                                <img src={urlFor(treasurer.image).url()} alt='Tresurer' />
                                <h2>{treasurer.name}</h2>
                                <h3 className='position'>Treasurer</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(treasurer.image).url()} alt='Tresurer' />
                                <h2>{treasurer.name}</h2>
                                <h3 className='position'>Treasurer</h3>
                            </div>
                        }
                    </div>
                    <div  className={ofs ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            ofs.link ?
                            <Link href={ofs.link}>
                                <img src={urlFor(ofs.image).url()} alt='Office Secretary' />
                                <h2>{ofs.name}</h2>
                                <h3 className='position'>Office Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(ofs.image).url()} alt='Office Secretary' />
                                <h2>{ofs.name}</h2>
                                <h3 className='position'>Office Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={os ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            os.link ?
                            <Link href={os.link}>
                                <img src={urlFor(os.image).url()} alt='Organizing Secretary' />
                                <h2>{os.name}</h2>
                                <h3 className='position'>Organizing Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(os.image).url()} alt='Organizing Secretary' />
                                <h2>{os.name}</h2>
                                <h3 className='position'>Organizing Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={aos ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            aos.link ?
                            <Link href={aos.link}>
                                <img src={urlFor(aos.image).url()} alt='Asst. Organizing Secretary' />
                                <h2>{aos.name}</h2>
                                <h3 className='position'>Asst. Organizing Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(aos.image).url()} alt='Asst. Organizing Secretary' />
                                <h2>{aos.name}</h2>
                                <h3 className='position'>Asst. Organizing Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={rp ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            os.link ?
                            <Link href={rp.link}>
                                <img src={urlFor(rp.image).url()} alt='Research & Project Secretary' />
                                <h2>{rp.name}</h2>
                                <h3 className='position'>Research & Project Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(rp.image).url()} alt='Research & Project Secretary' />
                                <h2>{rp.name}</h2>
                                <h3 className='position'>Research & Project Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={arp ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            arp.link ?
                            <Link href={arp.link}>
                                <img src={urlFor(arp.image).url()} alt='Asst. Research & Project Secretary' />
                                <h2>{arp.name}</h2>
                                <h3 className='position'>Asst. Research & Project Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(arp.image).url()} alt='Asst. Research & Project Secretary' />
                                <h2>{arp.name}</h2>
                                <h3 className='position'>Asst. Research & Project Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={sc ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            os.link ?
                            <Link href={sc.link}>
                                <img src={urlFor(sc.image).url()} alt='Study Circle Secretary' />
                                <h2>{sc.name}</h2>
                                <h3 className='position'>Study Circle Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(sc.image).url()} alt='Study Circle Secretary' />
                                <h2>{sc.name}</h2>
                                <h3 className='position'>Study Circle Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={asc ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            asc.link ?
                            <Link href={asc.link}>
                                <img src={urlFor(asc.image).url()} alt='Asst. Study Circle Secretary' />
                                <h2>{asc.name}</h2>
                                <h3 className='position'>Asst. Study Circle Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(asc.image).url()} alt='Asst. Study Circle Secretary' />
                                <h2>{asc.name}</h2>
                                <h3 className='position'>Asst. Study Circle Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={fe ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            fe.link ?
                            <Link href={fe.link}>
                                <img src={urlFor(fe.image).url()} alt='Field Education Secretary' />
                                <h2>{fe.name}</h2>
                                <h3 className='position'>Field Education Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(fe.image).url()} alt='Field Education Secretary' />
                                <h2>{fe.name}</h2>
                                <h3 className='position'>Field Education Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={afe ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            afe.link ?
                            <Link href={afe.link}>
                                <img src={urlFor(afe.image).url()} alt='Asst. Field Education Secretary' />
                                <h2>{afe.name}</h2>
                                <h3 className='position'>Asst. Field Education Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(afe.image).url()} alt='Asst. Field Education Secretary' />
                                <h2>{afe.name}</h2>
                                <h3 className='position'>Asst. Field Education Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={pva ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            pva.link ?
                            <Link href={pva.link}>
                                <img src={urlFor(pva.image).url()} alt='Publicity & Visual Arts Secretary' />
                                <h2>{pva.name}</h2>
                                <h3 className='position'>Publicity & Visual Arts Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(pva.image).url()} alt='Publicity & Visual Arts Secretary' />
                                <h2>{pva.name}</h2>
                                <h3 className='position'>Publicity & Visual Arts Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={apva ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            apva.link ?
                            <Link href={apva.link}>
                                <img src={urlFor(apva.image).url()} alt='Asst. Publicity & Visual Arts Secretary' />
                                <h2>{apva.name}</h2>
                                <h3 className='position'>Asst. Publicity & Visual Arts Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(apva.image).url()} alt='Asst. Publicity & Visual Arts Secretary' />
                                <h2>{apva.name}</h2>
                                <h3 className='position'>Asst. Publicity & Visual Arts Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className={it ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            os.link ?
                            <Link href={it.link}>
                                <img src={urlFor(it.image).url()} alt='IT Secretary' />
                                <h2>{it.name}</h2>
                                <h3 className='position'>IT Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(it.image).url()} alt='IT Secretary' />
                                <h2>{it.name}</h2>
                                <h3 className='position'>IT Secretary</h3>
                            </div>
                        }
                    </div>
                    <div className={ait ? 'mx-auto ec-card' : 'hidden'}>
                    {
                            ait.link ?
                            <Link href={ait.link}>
                                <img src={urlFor(ait.image).url()} alt='Asst. IT Secretary' />
                                <h2>{ait.name}</h2>
                                <h3 className='position'>Asst. IT Secretary</h3>
                            </Link>
                            :
                            <div>
                                <img src={urlFor(ait.image).url()} alt='Asst. IT Secretary' />
                                <h2>{ait.name}</h2>
                                <h3 className='position'>Asst. IT Secretary</h3>
                            </div>
                        }
                    </div>
                </div>
                {/* ----------------------------------- */}
            </div>
        </div>
    </div>
  )
}
