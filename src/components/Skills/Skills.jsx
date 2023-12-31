// import { useState } from 'react';
import PropTypes from 'prop-types'; // ES6

const Skills = ({ selectedSkills, setSelectedSkills }) => {
    // const [checkboxValues, setCheckboxValues] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // If checked, add the value to the array, else remove it
        if (checked) {
            setSelectedSkills([...selectedSkills, value]);
        } else {
            const updatedValues = selectedSkills.filter((val) => val !== value);
            setSelectedSkills(updatedValues);
        }
    };

    const skillsSet = ['Fitness Knowledge', 'Communication', 'Problem-Solving'];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                skillsSet.map((skill, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={skill}
                            onChange={handleCheckboxChange}
                            checked={selectedSkills.includes(skill)}
                        />
                        <span className='mx-2'>
                            {skill}
                        </span>
                    </label>)
                )
            }
            {/* <label>
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
            </label> */}
            {/* Add more checkboxes in a similar fashion */}
        </div>
    );
};

export default Skills;

// Props Validation
Skills.propTypes = {
    selectedSkills: PropTypes.array,
    setSelectedSkills: PropTypes.node
}