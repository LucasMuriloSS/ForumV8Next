import { createContext, useEffect, useState } from "react";

type Post = {

    Title:String,
    Message:String,
    Id:String,//salva o id do usuario para mostrar a foto dele 
    System: String // subsistema onde o post irá aparecer

}

export const PostContext = createContext({} as Post)