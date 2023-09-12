
const Progress = (progress) => {
    return (
        <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width:`${progress.progress}%`}}  aria-valuenow={progress.progress}  aria-valuemin="0" aria-valuemax="100">{progress.progress}%</div>
        </div>
    );
};

export default Progress;
