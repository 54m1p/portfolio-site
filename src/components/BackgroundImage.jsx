import '../css/background.css'
const BackgroundImage =(img)=>{
    return(
        <div className="bg-img section">
            <img className="h-100" src={img.img} alt="img" />
        </div>
    )
}

export default BackgroundImage