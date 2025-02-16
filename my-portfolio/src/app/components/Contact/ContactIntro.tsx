import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Mail from "./Mail";

const ContactIntro = () => {

    return (

        <div className="left-auto mx-auto my-auto flex h-full w-3/4 flex-col justify-center">
            <div className="mx-auto space-y-4 text-left">
                <h1 className="text-black-custom justify-center text-left text-4xl font-bold sm:text-7xl">
                    Let's talk.<br />Tell me about your ideas!
                </h1>

                <h3 className="text-xl font-semibold sm:text-lg md:text-xl lg:text-2xl">
                    Get in contact with me <FontAwesomeIcon icon={faCloud} color="blue" />
                </h3>
            </div>
            <div className="mt-12 flex w-full justify-center sm:mt-8">
                <Mail />
            </div>
        </div>
    );

}

export default ContactIntro;