// import { useState } from 'react';
import PropTypes from 'prop-types'; // ES6

const WeekDaysCheckbox = ({selectedDays, setSelectedDays}) => {
    // const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // If checked, add the day to the selectedDays array, else remove it
        if (checked) {
            setSelectedDays([...selectedDays, value]);
        } else {
            const updatedDays = selectedDays.filter((day) => day !== value);
            setSelectedDays(updatedDays);
        }
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {daysOfWeek.map((day, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        value={day}
                        onChange={handleCheckboxChange}
                        checked={selectedDays.includes(day)}
                    />
                    <span className='mx-2'>
                        {day}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default WeekDaysCheckbox;

// Props Validation
WeekDaysCheckbox.propTypes = {
    selectedDays: PropTypes.array,
    setSelectedDays: PropTypes.node
}