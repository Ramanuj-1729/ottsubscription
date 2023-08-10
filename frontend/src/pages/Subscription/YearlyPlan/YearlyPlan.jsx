import PlanCard from "../../../components/PlanCard/PlanCard";

const YearlyPlan = ({ plans }) => {
    const titles = plans.map(a => a.title);
    const prices = plans.map(a => a.price);
    const qualities = plans.map(a => a.quality);
    const resolutions = plans.map(a => a.resolution);
    const devices = plans.map(a => a.devices);
    return (
        <>
            <PlanCard cardHeading={titles[3]} price={prices[3]} quality={qualities[3]} resolution={resolutions[3]} devices={devices[3]}></PlanCard>
            <PlanCard cardHeading={titles[2]} price={prices[2]} quality={qualities[2]} resolution={resolutions[2]} devices={devices[2]}></PlanCard>
            <PlanCard cardHeading={titles[1]} price={prices[1]} quality={qualities[1]} resolution={resolutions[1]} devices={devices[1]}></PlanCard>
            <PlanCard cardHeading={titles[0]} price={prices[0]} quality={qualities[0]} resolution={resolutions[0]} devices={devices[0]}></PlanCard>
        </>
    );
}

export default YearlyPlan;