

export default function HomeCTABox({img, alt, descr, title}) {
  return (
    <div className="box-container">
        <img src={img} aria-description={alt} className='box-img'/>
        <div className="descr-box">
            <h3>{title}</h3>
        <p>{descr}</p>
        <button aria-label="przycisk przenoszący do gry">Dowiedz się więcej</button>
        </div>
        
      
    </div>
  )
}
