const ProgressBar = ({progressPercentage}) => {
    return (
        <div className='h-5 bg-gray-300 rounded-full font-play'>
            <div style={{ width: `${progressPercentage}%`}}
                className={`h-full relative rounded-full ${
                    progressPercentage< 20 ? 'bg-[#7900A4]' : progressPercentage >=20 && progressPercentage < 60 ? 'bg-[#F9C152]' : progressPercentage >=60 && progressPercentage < 90 ? 'bg-[#1405C4]' :  progressPercentage >=90 && progressPercentage < 100 ? 'bg-orange-500' : 'bg-green-600'}`}>
                    {/* progressPercentage< 20 ? 'bg-[#7900A4]' : progressPercentage >=20 && progressPercentage < 60 ? 'bg-[#F9C152]' : progressPercentage >=60 && progressPercentage < 90 ? 'bg-teal-500' : 'bg-green-600'; */}
                  <span className="absolute text-white">{progressPercentage}%</span> 
            </div>
        </div>
    )

}
export default ProgressBar