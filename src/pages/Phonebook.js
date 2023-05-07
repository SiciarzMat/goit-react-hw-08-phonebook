import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { Section } from "components/Section";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { Circles } from "react-loader-spinner";
import { StyledDiv } from "components/App";
import { selectError, selectIsLoading } from "redux/selectors";


const Phonebook = () => {
    const dispatch = useDispatch()
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter />
                {isLoading && !error &&
                    <StyledDiv>
                        <Circles />
                    </StyledDiv>}
                <ContactList />
            </Section>
        </>
    );
};

export default Phonebook;