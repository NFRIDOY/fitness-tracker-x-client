import React, { useEffect, useState } from "react";

const DAYS = [
    { key: "sunday", label: "S" },
    { key: "monday", label: "M" },
    { key: "tuesday", label: "T" },
    { key: "wednesday", label: "W" },
    { key: "thursday", label: "T" },
    { key: "friday", label: "F" },
    { key: "saturday", label: "S" }
];

const StyledToggle = ({ isSelected, onClick, children }) => {
    const baseClasses =
        "w-8 h-8 flex items-center justify-center rounded-full border border-purple-700 text-purple-700 focus:outline-none";
    const selectedClasses = "bg-purple-300 text-white";

    const classes = isSelected
        ? `${baseClasses} ${selectedClasses}`
        : baseClasses;

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

const ToggleDays = ({days, setDays}) => {
    
    // const [days, setDays] = useState([0, 2, 3]);
    
    // useEffect

    const handleToggle = (index) => {
        const currentIndex = days.indexOf(index);
        const newDays = [...days];

        if (currentIndex === -1) {
            newDays.push(index);
        } else {
            newDays.splice(currentIndex, 1);
        }

        setDays(newDays);
    };

    return (
        <>
            <div className="flex space-x-2">
                {DAYS.map((day, index) => (
                    <StyledToggle
                        key={day.key}
                        isSelected={days.includes(index)}
                        onClick={() => handleToggle(index)}
                    >
                        {day.label}
                    </StyledToggle>
                ))}
            </div>
            <div>
                {
                    console.log(days)
                }
            </div>
        </>
    );
};

export default ToggleDays;
