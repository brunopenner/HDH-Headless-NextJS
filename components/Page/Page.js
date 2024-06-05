import { BlockRenderer } from "components/BlockRenderer"
import { MainMenu } from "components/MainMenu"

export const Page = (props) => {
    return (
        <div>
            <MainMenu 
                items= {props.mainMenuItems} 
                callToActionLabel={props.callToActionLabel}
                CallToActionDestination={props.CallToActionDestination}
            />
            <BlockRenderer blocks={props.blocks}/>
        </div>
    );
}