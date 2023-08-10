import PlanCard from "../../../components/PlanCard/PlanCard";

const MonthlyPlan = () => {
    return (
        <>
            <PlanCard cardHeading="Mobile" price={100} quality="Good" resolution="480p"></PlanCard>
            <PlanCard cardHeading="Basic" price={200} quality="Good" resolution="480p"></PlanCard>
            <PlanCard cardHeading="Standard" price={500} quality="Better" resolution="1080p"></PlanCard>
            <PlanCard cardHeading="Premium" price={700} quality="Best" resolution="4k+HDR"></PlanCard>
        </>
    );
}

export default MonthlyPlan;