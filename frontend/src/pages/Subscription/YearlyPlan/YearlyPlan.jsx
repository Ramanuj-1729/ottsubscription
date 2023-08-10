import PlanCard from "../../../components/PlanCard/PlanCard";

const YearlyPlan = () => {
    return (
        <>
            <PlanCard cardHeading="Mobile" price={1000} quality="Good" resolution="480p"></PlanCard>
            <PlanCard cardHeading="Basic" price={2000} quality="Good" resolution="480p"></PlanCard>
            <PlanCard cardHeading="Standard" price={5000} quality="Better" resolution="1080p"></PlanCard>
            <PlanCard cardHeading="Premium" price={7000} quality="Best" resolution="4k+HDR"></PlanCard>
        </>
    );
}

export default YearlyPlan;