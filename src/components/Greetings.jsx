const Greetings = ({lang, children}) => {

    let greeting = ""
    switch (lang) {
        case 'de':
            greeting = "Hallo "
            break
        case 'en':
            greeting = "Hello "
            break
        case 'fr':
            greeting = "Bonjour "
            break
        default:
            greeting = "Hola"
            break
    }

    return (
        <div className="greetings">
             <p>{greeting}{children}</p>
        </div>
    );
};
export default Greetings;