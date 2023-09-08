
const Progress = (progress) => {
    console.log(progress.progress,'progress')
    return (
        <div className="progress w-25">
            <div className="progress-bar bg-warning" role="progressbar" style={{width:`${progress.progress}%`}}  aria-valuenow={progress.progress}  aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
};

export default Progress;
