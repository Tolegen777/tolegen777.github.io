import * as React from "react"
import {useEffect, useState} from "react";
// @ts-ignore
import style from "./BlogContent.module.css"
import axios from "axios";

type PropsType = {

}

const BlogContent:React.FC<PropsType> = (props) => {
    const [data, setData] = useState([])
    // console.log(data)

    let newPost = {
        userId: 1,
        title: 'A new post',
        body: 'Tolik',
        id: 101
    }




    // useEffect(
    //     async () => {
    //         try {
    //             const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{newPost});
    //             // setData(response.data)
    //             console.log(response.data)
    //             // setData(data,response.data);
    //             // debugger
    //         } catch (err) {
    //             // Handle Error Here
    //             console.error(err);
    //         }
    //
    //
    //     },[]
    // )


    useEffect(
        // @ts-ignore
        async () => {
            debugger
                const response = await axios.get('https://movie-database-imdb-alternative.p.rapidapi.com/',{
                    // withCredentials: true,
                    params: {s: 'Avengers Endgame', r: 'json', page: '1'},
                    headers: {
                        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                        'x-rapidapi-key': '867cbb625fmsh5ef1a5053239267p1c695c'
                }});

            debugger

                // setData(response.data);
                console.log(response.data);



            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            //
            //  setData(response.data)

        },[setData]
    )

    return (
        <div>
            <div>Blog Content</div>
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <p>{item.title}</p><b/>
                            <div>{item.body}</div>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}
export default BlogContent