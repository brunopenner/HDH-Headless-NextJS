import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({destination, label, alignment="left" }) => {
    const ctaAlign = {
        left: "text-align",
        center: "text-center",
        right: "text-right"
    };

    return (
        
        <div className={ctaAlign[alignment]}>
            <ButtonLink 
                destination={destination}
                label ={label}
            />
        </div>
    )
}