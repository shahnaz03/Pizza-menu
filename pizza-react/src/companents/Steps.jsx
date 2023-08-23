import React, {useState} from 'react'


const advice=[
    "Yaxında yerləşən idman zallarına müraciət edin.",
    "Fitness müəllimləri ilə məşqə üstünlük verin.",
    "Düzgün proqram təşkil edin.",
    "Qidalanmağınıza diqqətli yanaşın.",
    "Ağır məşqlərdən qaçın.",
    "Nəticə üçün tələsməyin.",
    "İdmanı əyləncəli hala gətirin.",
    "Özünüzü mükafatlandırın!",
    "İntermittent fasting edin.",
    "Əvvəlcə kiçik hədəflər qoyun!",
]
const Steps = () => {
    const [step, setStep]=useState(1)
  return (
    <div className='container'>
        <p className='text'>
            Step {step}: {advice[step-1]}
        </p>
        <button className='btn' onClick={()=>step>1 ? setStep(step-1) : ""}>Geri</button>
        <button className='btn' onClick={()=>step<10 ? setStep(step+1) : ""}>İrəli</button>

    </div>
  )
}

export default Steps