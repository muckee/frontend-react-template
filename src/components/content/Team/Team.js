import Section from "../../UI/Section/Section";
import ListItem from "../../UI/List/ListItem";
import UnorderedList from "../../UI/List/UnorderedList";

import configData from "../../../config.json";
const teamMembers = configData.TEAM_MEMBERS;

const Team = props => {

    teamMembers.sort((a,b) => {
        if(a.PRIORITY < b.PRIORITY) {
            return -1;
        }
        if(a.PRIORITY > b.PRIORITY) {
            return 1;
        }
        return 0;
    });

    const teamList = teamMembers.map((data) => {
        console.log(data);
        const members = data.MEMBERS.map((member) => {
            return (
                <article>
                    <h4>{member.NAME}</h4>
                    <p>{member.DESCRIPTION}</p>
                </article>
            );
        });

        return (
            <ListItem>
                <h3>{data.TITLE}</h3>
                {members}
            </ListItem>
        );
    });

    return (
        <Section className={`${props.styles.MainContent}`}>

        <UnorderedList>
            {teamList}
        </UnorderedList>

        </Section>
    );
};

export default Team;