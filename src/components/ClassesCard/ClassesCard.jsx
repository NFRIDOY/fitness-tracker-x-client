

export default function ClassesCard({ classOne }) {

    const { _id, className, email, description, weeklyDays, timesInDay } = classOne;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p className="text-blue-500">Trainers Email: {email}</p>
                <p>{description}</p>
                <p className="flex justify-evenly h-fit">
                    {
                        weeklyDays.map((day, i) => <div key={i} className="px-4 py-2 h-fit bg-green-200 rounded-full">{day}</div>)
                    }
                </p>
                <p className="flex flex-col">
                    {
                        timesInDay.map((time, i) => <div key={i}>{time}</div>)
                    }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
