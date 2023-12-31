import { useState } from 'react';
import PropTypes from 'prop-types'; // ES6

const CheckboxComponent = ({ checkboxValues, setCheckboxValues }) => {
    // const [checkboxValues, setCheckboxValues] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // If checked, add the value to the array, else remove it
        if (checked) {
            setCheckboxValues([...checkboxValues, value]);
        } else {
            const updatedValues = checkboxValues.filter((val) => val !== value);
            setCheckboxValues(updatedValues);
        }
    };

    return (
        <div className='flex gap-4'>
            <label>
                <input
                    type="checkbox"
                    value="Fitness Knowledge"
                    onChange={handleCheckboxChange}
                    checked={checkboxValues.includes('Fitness Knowledge')}
                />
                <span className='ml-2'>
                    Fitness Knowledge
                </span>
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Communication"
                    onChange={handleCheckboxChange}
                    checked={checkboxValues.includes('Communication')}
                />
                <span className='ml-2'>
                    Communication
                </span>

            </label>
            <label>
                <input
                    type="checkbox"
                    value="Problem-Solving"
                    onChange={handleCheckboxChange}
                    checked={checkboxValues.includes('Problem-Solving')}
                />
                <span className='ml-2'>
                    Problem-Solving
                </span>
            </label>
            {/* Add more checkboxes in a similar fashion */}
        </div>
    );
};

export default CheckboxComponent;

// Props Validation
CheckboxComponent.propTypes = {
    checkboxValues: PropTypes.array,
    setCheckboxValues: PropTypes.node
}