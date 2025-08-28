import { VideoCard } from "./VideoCard"


const Videos = [
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage : 'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },

    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },
    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },

    {
        title :`New Cartoon (Hindi) | Warch Full Video `,
        image:'photo1.jpg',
        thumbImage:'logo.jpg',
        author:'Firdosh Khan ' ,
        timeStamp :"100M Views | 13 Days Ago " ,
    },



]


export function VideoGrid () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            {
                Videos.map((video ,index) => {
                    return <div key={index}>
                            <VideoCard 
                                title  = {video.title}
                                image = {video.image}
                                thumbImage = {video.thumbImage}
                                author = {video.author}
                                timeStamp = {video.timeStamp}
                            />
                        </div>
                })
            }
        </div>
    )
}