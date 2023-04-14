import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export async function action({ request, params }) {
    
}


export function GameIFrame({ gameSource, pageSource, title}) {
    return (
            <iframe frameBorder="0" src={gameSource} allowFullScreen={true} width="600" height="600"><a href={pageSource}>{title} on itch.io</a></iframe>
    )
}

export default function Contact() {
    const { contact } = useLoaderData();
    
    return (
        <div>
            <div>
                <h1>
                    {contact.title ? (
                        <>
                            {contact.title}
                        </>
                    ) : (
                        <i>No Nasdme</i>
                    )}{" "}
                </h1>
            </div>
            <div>
                <GameIFrame gameSource={contact.gameSource} pageSource={contact.pageSource} title={contact.title}/>
            </div>
        </div>
    );
}