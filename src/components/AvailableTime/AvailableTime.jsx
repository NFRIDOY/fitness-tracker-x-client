import PropTypes from 'prop-types'; // ES6

export default function AvailableTime({selectedTimes, setSelectedTimes, timesInDay}) {
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
    setSelectedTimes: PropTypes.node,
    timesInDay: PropTypes.node
}