import { ExperienceItem } from "../../components";
import "./Experience.scss";

function Experience() {
    return (
        <div className="Experience">
            <ExperienceItem
                companyName="PatientNow"
                title="Web Developer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
                laoreet non curabitur gravida arcu. Mi quis hendrerit dolor magna eget.
                Dignissim cras tincidunt lobortis feugiat vivamus. Sagittis eu volutpat
                odio facilisis mauris sit amet massa vitae. In fermentum posuere urna
                nec tincidunt praesent semper. Ullamcorper dignissim cras tincidunt
                lobortis feugiat. Netus et malesuada fames ac turpis egestas integer
                eget. Mattis rhoncus urna neque viverra justo nec ultrices."
                fromDate="Jan 2022"
                toDate="Present" />
            <hr />
            <ExperienceItem
                companyName="Kemira"
                title="Customer Service Team Lead"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
                laoreet non curabitur gravida arcu. Mi quis hendrerit dolor magna eget.
                Dignissim cras tincidunt lobortis feugiat vivamus. Sagittis eu volutpat
                odio facilisis mauris sit amet massa vitae. In fermentum posuere urna
                nec tincidunt praesent semper. Ullamcorper dignissim cras tincidunt
                lobortis feugiat. Netus et malesuada fames ac turpis egestas integer
                eget. Mattis rhoncus urna neque viverra justo nec ultrices."
                fromDate="Jan 2022"
                toDate="Present" />
            <hr />
            <ExperienceItem
                companyName="Kemira"
                title="Customer Service Representative"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus
                laoreet non curabitur gravida arcu. Mi quis hendrerit dolor magna eget.
                Dignissim cras tincidunt lobortis feugiat vivamus. Sagittis eu volutpat
                odio facilisis mauris sit amet massa vitae. In fermentum posuere urna
                nec tincidunt praesent semper. Ullamcorper dignissim cras tincidunt
                lobortis feugiat. Netus et malesuada fames ac turpis egestas integer
                eget. Mattis rhoncus urna neque viverra justo nec ultrices."
                fromDate="Jan 2022"
                toDate="Present" />
        </div>
    );
}

export default Experience;
