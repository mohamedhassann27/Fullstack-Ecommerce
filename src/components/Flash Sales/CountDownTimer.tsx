import Countdown from 'react-countdown';

// / Renderer callback with condition
const Completionist = () => <span>Sale ended 🔥</span>;
const renderer = ({days, hours, minutes, seconds, completed }:any) => {
    if (completed) {
    // Render a completed state
    return <Completionist />;
    } else {
    // Render a countdown
    return(
        <>
            <div className='flex font-bold w-fit gap-10 max-md:gap-4 justify-between items-end'>

                <div className="flex flex-col justify-center items-center text-md font-bold">
                    <p>Days </p>  
                    <p className='font-bold text-3xl max-md:text-2xl'>{days}</p> 
                </div>
                <span className='text-theme font-bold text-4xl max-md:text-2xl'> :</span>
                <div className="flex flex-col justify-center items-center text-md font-bold">
                    <p className=''>Hours </p> 
                    <p className='font-bold text-3xl max-md:text-2xl'>{hours}</p>
                </div>
                <span className='text-theme text-center font-bold text-4xl max-md:text-2xl'> :</span>
                <div className="flex flex-col justify-center items-center text-md font-bold">
                    <p className=''>Minutes </p> 
                    <p className='font-bold text-3xl max-md:text-2xl'>{minutes} </p> 
                </div>
                <span className='text-theme text-center font-bold text-4xl max-md:text-2xl'> :</span>
                <div className="flex flex-col justify-center items-center text-md font-bold">
                    <p className=''>Seconds </p>
                    <p className='font-bold text-3xl max-md:text-2xl'>{seconds} </p>
                </div>
            </div>

            {/* <div className='flex font-bold text-4xl w-110 gap-7 bg-red-400'> */}
            {/* </div> */}
        </>
    ) 
}
};

function CountDownTimer() {

    return (
        <Countdown date={Date.now() + 27*24*60*60*1000} renderer={renderer}/>
    )
}

export default CountDownTimer
