import React from "react";
import {
    TagButton,
    TagButtonLink
} from './TagCardStyled';

const TagCard = (props) => {

    return (
        <TagButton>
            <TagButtonLink to='/About'>
                {props.tagName}
            </TagButtonLink>
        </TagButton>
    )


}

export default TagCard;