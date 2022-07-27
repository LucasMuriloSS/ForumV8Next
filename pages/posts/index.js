
import Nav from "../navbar"
import styles from '../../styles/post.module.css'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect } from "react"

function Post(){


    useEffect(()=>{
        Router.push('/')   
    })

}

export default Post