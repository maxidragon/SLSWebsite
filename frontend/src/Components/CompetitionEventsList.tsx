
const CompetitionEventsList = (props: {
    events: string[]
}) => {
    console.log(props.events);
    return (
        <>
            {props.events.map((event) => (
                <span
                    className={`cubing-icon event-${event}`}
                    style={{ marginRight: "0.5em", fontSize: "1.5em", opacity: 1 }}
                />
            ))}
        </>
    );
}

export default CompetitionEventsList;