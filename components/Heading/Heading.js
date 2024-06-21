import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({textAlign, content, level = 2}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
    });

    // If content is undefined, return null to avoid rendering an invalid element
    if (!content) {
        return null;
    }

    return tag;
}