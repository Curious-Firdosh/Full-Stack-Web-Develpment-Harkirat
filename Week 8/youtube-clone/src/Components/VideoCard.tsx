

export  const VideoCard = (props :any) => {
  return (
    <div className="p-7">
        <img src={props.image} alt="/"  className="h-[250px] w-[400px] rounded-sm"/>
        
        <div className="grid grid-cols-12 mt-7 ">
           
           <div className="col-span-1 mt-3 ">
                <img src= {props.thumbImage} alt="" className="rounded-full w-20 h-10 " />
            </div>
            <div className="col-span-11 gap-1.5 ml-4 ">
                {props.title}

                <div className="col-span-11  text-gray-400  text-sm font-medium">
                     {props.author}
                 </div>
                 <div className="col-span-11 text-gray-400 text-sm font-medium">
                     {props.timeStamp}
                 </div>

            </div>

            
        </div>
    </div>
  )
}

