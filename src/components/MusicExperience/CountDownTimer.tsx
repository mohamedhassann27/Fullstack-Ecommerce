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
            <div className='flex gap-5'>
                <div className="flex flex-col bg-white text-black h-17 w-17 p-2 items-center justify-center rounded-full">
                    <span>{days}</span>
                    <p className='text-sm -mt-1'>Days</p>
                </div>
                <div className="flex flex-col bg-white text-black h-17 w-17 p-2 items-center justify-center rounded-full">
                    <span>{hours}</span>
                    <span className='text-sm -mt-1'>Hours</span>
                </div>
                <div className="flex flex-col bg-white text-black h-17 w-17 p-2 items-center justify-center rounded-full">
                    <span>{minutes}</span>
                    <p className='text-sm -mt-1'>Minutes</p>
                </div>
                <div className="flex flex-col bg-white text-black h-17 w-17 p-2 items-center justify-center rounded-full">
                    <span>{seconds}</span>
                    <p className='text-sm -mt-1'>Seconds</p>
                </div>
            </div>
        )
        }
    }

function CountDownTimer(){
    return(
        <Countdown date={Date.now() + 15*24*60*60*1000} renderer={renderer}/>
    )
}
export default CountDownTimer