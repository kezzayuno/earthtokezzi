import React from 'react';
import DocPage from '@theme-original/DocPage';
import useDoc from '@docusaurus/theme-common';

export default function CustomDocPage(props) {
    const { frontmatter } = useDoc();
    console.log(frontmatter)
    const tags = frontmatter.tags || [];

    return (
        <>
            <DocPage {...props} />
            {tags.length > 0 && (
            <div className="tags-container">
                <ul className="tags-list">
                    {tags.map((tag) => (
                        <li key={tag} className="tag-item">{tag}</li>
                    ))}
                </ul>
            </div>
            )}
        </>
    );
};