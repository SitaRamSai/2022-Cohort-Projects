import React from 'react';
import TagCard from './TagCard';
import { Tags } from './TagCardStyled';

const TagList = (props) => {

    const tagList = props.tags.map( (tag) => 
    
        <TagCard key={tag.id}
        tagName = {tag.tagName}
        />
    
    )
    return (
        <Tags>
            { tagList }
        </Tags>

    )
}

export default TagList;