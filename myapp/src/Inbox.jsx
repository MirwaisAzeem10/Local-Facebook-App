import React from 'react'
import { Avatar } from '@mui/material'
import {useState} from "react"



function Inbox() {

 const [myData, setMyData] = useState(
    [{

        name: "amjad",
        text: "hey how are you bro!",
     
     
       },
     {
         name: "paul",
         text: "hey how are you bro!",
      
     },
     {
         name: "ali",
         text: "hey how are you bro!",
      
     },
     {
         name: "loly",
         text: "hey how are you bro!",
      
     },
     
     {
         name: "bobby",
         text: "hey how are you bro!",
      
     },
     ]
 )



  return (
    <div>
        <div>
          

            <div className='flex flex-row gap-4'>
            <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
            <div className='flex flex-col gap-2'>
            <p className='font-bold'>{myData.name}</p>
            <p>{myData.text}</p>
            </div>
            </div>

            <div className='flex flex-row gap-4'>
            <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
            <div className='flex flex-col gap-2'>
            <p className='font-bold'>{myData.name}</p>
            <p>{myData.text}</p>
            </div>
            </div>

            <div className='flex flex-row gap-4'>
            <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
            <div className='flex flex-col gap-2'>
            <p className='font-bold'>{myData.name}</p>
            <p>{myData.text}</p>
            </div>
            </div>

            <div className='flex flex-row gap-4'>
            <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
            <div className='flex flex-col gap-2'>
            <p className='font-bold'>{myData.name}</p>
            <p>{myData.text}</p>
            </div>
            </div>

            <div className='flex flex-row gap-4'>
            <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
            <div className='flex flex-col gap-2'>
            <p className='font-bold'>{myData.name}</p>
            <p>{myData.text}</p>
            </div>
            </div>

            </div>

        </div>
       




  )
}

export default Inbox