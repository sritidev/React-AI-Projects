function Card ({title="Default",para,img}){
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden shadow transition-shadow">
        <img src={img} alt="" srcset=""/>
          <h2 className='text-gray-500 text-lg font-semibold'>{title}</h2>
          <p className='text-gray-500'>{para}</p>
          <button className='px-2 py-1 bg-blue-600 rounded-md text-sm my-2 shadow text-white'>Click Me</button>
        </div>
    )
}

export default Card

