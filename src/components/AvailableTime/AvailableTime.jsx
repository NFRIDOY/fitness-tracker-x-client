import PropTypes from 'prop-types'; // ES6

export default function AvailableTime({selectedTimes, setSelectedTimes}) {
    // const [selectedTimes, setSelectedTimes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // If checked, add the day to the selectedTimes array, else remove it
        if (checked) {
            setSelectedTimes([...selectedTimes, value]);
        } else {
            const updatedDays = selectedTimes.filter((time) => time !== value);
            setSelectedTimes(updatedDays);
        }
    };

    const timesInDay = ['7:00 AM-8:00 AM', '8:00 AM-9:00 AM', '9:00 AM-10:00 AM', '10:00 AM-11:00 AM', '11:00 AM-12:00 PM', '12:00 PM-1:00 PM', '1:00 PM-2:00 PM', '2:00 PM-3:00 PM', '3:00 PM-4:00 PM', '4:00 PM-5:00 PM','5:00 PM-6:00 PM','6:00 PM-7:00 PM','7:00 PM-8:00 PM','8:00 PM-9:00 PM','9:00 PM-10:00 PM','10:00 PM-11:00 PM' ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            {timesInDay.map((time, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        value={time}
                        onChange={handleCheckboxChange}
                        checked={selectedTimes.includes(time)}
                    />
                    <span className='ml-[2px]'>
                        {time}
                    </span>
                </label>
            ))}
        </div>
    )
}

// Props Validation
AvailableTime.propTypes = {
    selectedTimes: PropTypes.array,
    setSelectedTimes: PropTypes.node
}