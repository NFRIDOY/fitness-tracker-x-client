

export default function AvailableTime({timeStart, setTimeStart, timeEnd, setTimeEnd}) {
    return (
        <div className="flex gap-1 flex-col lg:flex-row ">
            <div className="w-1/2">
                <p className="text-center">
                    Start Time
                </p>
                <label htmlFor="timeStart">
                    <input id="timeStart" type="time" name="AvalableTimeInADay" className="input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Day" required="" />
                </label>
            </div>
            <div className="w-1/2">
                <p className="text-center">
                    End Time
                </p>
                <label htmlFor="timeEnd">
                    <input id="timeStart" type="time" name="AvalableTimeInADay" className="input input-bordered w-full max-w-xs" placeholder="Avalable Time In A Day" required="" />
                </label>
            </div>
        </div>
    )
}
